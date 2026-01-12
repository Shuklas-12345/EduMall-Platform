const handleLiveWebhook = async (req) => {
    const { event, userId, sessionId, timestamp } = req.body;
    const trx = req.db; 

    if (event === 'user_left') {
        // FIX: THE COLLISION GUARD
        // We filter by BOTH user and session to ensure we hit the exact record
        const log = await trx('attendance_logs')
            .where({ 
                user_id: userId, 
                session_id: sessionId 
            })
            .first();
        
        if (log) {
            const leftAt = new Date(timestamp);
            const joinedAt = new Date(log.joined_at);
            const duration = Math.floor((leftAt - joinedAt) / 60000);

            await trx('attendance_logs').where({ id: log.id }).update({
                left_at: leftAt,
                total_minutes: duration,
                is_verified: duration >= 20
            });
        }
    }
    return { status: "PROCESSED" };
};

module.exports = { handleLiveWebhook };