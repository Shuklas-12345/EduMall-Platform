const Scrubber = require('./ai.scrubber');
const { systemDb } = require('../../database');

class AITutorService {
    async askTutor(userId, tenantId, rawQuery, trx) {
        // 1. ATOMIC HEARTBEAT UPSERT (Fixes New Day Crash)
        // Ensures row exists for today and adds 1 minute
        await trx('user_activity_heartbeats')
            .insert({ user_id: userId, active_date: trx.fn.now(), minutes_spent: 1 })
            .onConflict(['user_id', 'active_date'])
            .merge({
                minutes_spent: trx.raw('user_activity_heartbeats.minutes_spent + 1')
            });

        // Check for Burnout
        const heartbeat = await trx('user_activity_heartbeats')
            .where({ user_id: userId, active_date: trx.fn.now() }).first();
        if (heartbeat?.minutes_spent > 180) {
            return { error: "BURNOUT", message: "Daily limit reached. Please rest." };
        }

        // 2. IDENTITY FETCH (Fixes "PURGED" Leak)
        // We set the vault key to look inside the USERS vault, not the LEADS vault
        await trx.raw(`SET LOCAL app.vault_key_v1 = ?`, [process.env.DB_PII_VAULT_KEY]);
        const userRecord = await trx('v_decrypted_users').where({ id: userId }).first();
        const tenantRecord = await trx('tenants').where({ id: tenantId }).first();

        // 3. DYNAMIC SCRUB
        const scrubbedQuery = Scrubber.scrub(
            rawQuery, 
            userRecord?.full_name, 
            tenantRecord?.name 
        );

        // 4. HQ-AWARE GROUNDING
        const contextChunks = await trx('knowledge_vectors')
            .where(function() {
                this.where('tenant_id', tenantId).orWhereNull('tenant_id');
            })
            .orderByRaw('embedding <=> ?', [/* Query Vector */])
            .limit(3);

        if (contextChunks.length === 0) {
            return { ai_response: "I can only help with your specific curriculum topics." };
        }

        // 5. DISPATCH & LOG
        const aiResponse = "Hint: Consider the force acting on the object...";
        await trx('tutor_conversation_logs').insert({
            user_id: userId, tenant_id: tenantId,
            student_query_scrubbed: scrubbedQuery,
            ai_response: aiResponse,
            citations: JSON.stringify(contextChunks.map(c => c.metadata.source))
        });

        return { ai_response: aiResponse, citations: contextChunks.map(c => c.metadata.source) };
    }
}

module.exports = new AITutorService();