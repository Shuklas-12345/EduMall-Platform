import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Camera, useCodeScanner } from 'react-native-vision-camera';
import SyncManager from '../core/services/sync.manager';

const AssistantScan = ({ sessionId, apiClient, localDb }) => {
  const [statusMsg, setStatusMsg] = useState("Ready to Scan");

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async (codes) => {
      const result = await SyncManager.handleAttendanceScan(sessionId, codes[0].value, apiClient, localDb);
      
      if (result.status === 'VERIFIED') {
        setStatusMsg(`✅ ${result.data.studentName}`);
      } else if (result.status === 'RETRY_REQUIRED') {
        setStatusMsg("⚠️ NETWORK DELAY: Check ID Manually");
      }
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} isActive={true} codeScanner={codeScanner} />
      <View style={{ position: 'absolute', top: 50, width: '100%', alignItems: 'center' }}>
        <Text style={{ backgroundColor: 'white', padding: 10, borderRadius: 8, fontWeight: 'bold' }}>{statusMsg}</Text>
      </View>
    </View>
  );
};

export default AssistantScan;