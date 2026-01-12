import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Watermark from './Watermark';

const VideoPlayer = ({ streamData, userSecurity }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && streamData.url) {
      const hls = new Hls({
        // FIX: THE "DEVELOPER TOOLS" BYPASS
        // Ensures the token is automatically attached to every .ts segment request
        xhrSetup: (xhr, url) => {
          if (url.includes('.ts')) {
            const tokenParams = streamData.url.split('?')[1];
            xhr.open('GET', `${url}?${tokenParams}`, true);
          }
        }
      });
      hls.loadSource(streamData.url);
      hls.attachMedia(videoRef.current);
    }
  }, [streamData.url]);

  return (
    <div className="relative overflow-hidden rounded-lg bg-black aspect-video group">
      {/* 1. HARDENED WATERMARK */}
      <Watermark 
        maskedId={userSecurity.maskedId} 
        forensics={streamData.forensics} 
      />

      <video 
        ref={videoRef}
        controls
        className="w-full h-full"
        style={{ userSelect: 'none' }}
        controlsList="nodownload" 
      />
    </div>
  );
};

export default VideoPlayer;