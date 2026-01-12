const db = require('../../database');
const noticeCache = require('../../infrastructure/cache');

class NoticeService {
    async publishNotice(noticeData) {
        return await db.transaction(async (trx) => {
            // 1. Deactivate current active notice for this language
            await trx('privacy_notices')
                .where({ language_code: noticeData.language_code, is_active: true })
                .update({ is_active: false });

            // 2. Insert and activate new version
            const [newNotice] = await trx('privacy_notices').insert({
                ...noticeData,
                is_active: true,
                published_at: db.fn.now()
            }).returning('*');

            // 3. CACHE INVALIDATION: Force the platform to fetch the new version ID
            await noticeCache.del(`latest_notice:${noticeData.language_code}`);
            
            return newNotice;
        });
    }
}