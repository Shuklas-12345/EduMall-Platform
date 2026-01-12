import React, { useState, useEffect } from 'react';

const Watermark = ({ maskedId, forensics }) => {
  const [style, setStyle] = useState({ top: '20%', left: '10%', opacity: 0.15 });

  useEffect(() => {
    const interval = setInterval(() => {
      // FIX: THE "FLOATING OBSTRUCTION" (Safe Zones)
      // Clamping: Top must be 15-75% (avoids title/controls), Left 5-70%
      const top = Math.floor(Math.random() * 60) + 15 + '%';
      const left = Math.floor(Math.random() * 65) + 5 + '%';
      
      // FIX: THE "OPACITY SCRUB"
      // Randomly varies between 10% and 25% to confuse level-based removal
      const opacity = (Math.random() * 0.15) + 0.10;
      
      setStyle({ top, left, opacity });
    }, 12000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="absolute pointer-events-none select-none z-50 text-white font-mono leading-tight text-[10px] md:text-xs"
      style={{ ...style, transition: 'all 3s ease-in-out' }}
    >
      ID: {maskedId} <br />
      IP: {forensics.maskedIP} <br />
      SES: {forensics.sessionID} <br />
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default Watermark;