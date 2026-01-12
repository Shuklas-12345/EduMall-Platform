import { Vibration } from 'react-native';

class SyncManager {
    async handleAttendanceScan(sessionId, token, apiClient, localDb) {
        const timeout = 2000; 
        try {
            const apiPromise = apiClient.post('/api/v1/attendance/verify', { sessionId, token });
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject('TIMEOUT'), timeout));
            const response = await Promise.race([apiPromise, timeoutPromise]);

            Vibration.vibrate(100); 
            return { status: 'VERIFIED', data: response.data };
        } catch (error) {
            if (error === 'TIMEOUT') {
                return { status: 'RETRY_REQUIRED', message: "Network slow. Please verify ID manually." };
            }
            throw error; 
        }
    }

    async pushLocalUpdates(apiClient, localDb) {
        const pending = await localDb.execute("SELECT * FROM sync_queue");
        for (let action of pending) {
            try {
                const response = await apiClient.post('/api/v1/sync/push', action.payload);
                if (response.status === 200 || response.status === 409) {
                    await localDb.execute("DELETE FROM sync_queue WHERE id = ?", [action.id]);
                }
            } catch (e) {
                if (e.response && [400, 403].includes(e.response.status)) {
                    await localDb.execute("DELETE FROM sync_queue WHERE id = ?", [action.id]);
                }
            }
        }
    }
}
export default new SyncManager();