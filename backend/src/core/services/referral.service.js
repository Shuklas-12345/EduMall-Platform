const FraudService = require('./fraud.service');
const LoyaltyService = require('./loyalty.service');

class ReferralService {
    async attributeLead(leadId, tenantId, slug, leadPhoneHash, clientIP, trx) {
        const link = await trx('referral_links').where({ slug, is_active: true }).first();
        if (!link) return null;

        const fraudCheck = await FraudService.isPotentialFraud(link.promoter_id, leadPhoneHash, clientIP, trx);
        
        await trx('referral_events').insert({
            link_id: link.id,
            lead_id: leadId,
            status: fraudCheck.isFraud ? 'FLAG_FRAUD' : 'PENDING'
        });

        return { attributed: !fraudCheck.isFraud };
    }

    async settleReferral(leadId, trx) {
        const event = await trx('referral_events')
            .join('referral_links', 'referral_events.link_id', 'referral_links.id')
            .where({ 
                'referral_events.lead_id': leadId, 
                'referral_events.status': 'PENDING',
                'referral_links.is_active': true 
            })
            .select('referral_events.*', 'referral_links.promoter_id', 'referral_links.tenant_id')
            .first();

        if (event) {
            await LoyaltyService.awardPoints(
                event.promoter_id, event.tenant_id, 'COMMUNITY', 500, event.id, 'REFERRAL_CONVERSION', trx
            );

            await trx('referral_events').where({ id: event.id }).update({ 
                status: 'CONVERTED', reward_issued: true 
            });
        }
    }
}

module.exports = new ReferralService();