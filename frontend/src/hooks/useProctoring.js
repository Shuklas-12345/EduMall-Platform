import { useEffect } from 'react';

export const useProctoring = (onViolation) => {
  useEffect(() => {
    // 1. Tab Switch Detection
    const handleVisibility = () => {
      if (document.hidden) onViolation('TAB_SWITCH');
    };

    // 2. FIX 2: FOCUS-LOSS DETECTION (Dual-Monitor Check)
    const handleBlur = () => {
      onViolation('WINDOW_FOCUS_LOST'); // Student clicked outside the browser
    };

    // 3. Fullscreen Exit Detection
    const handleFullscreen = () => {
      if (!document.fullscreenElement) onViolation('FULLSCREEN_EXIT');
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleBlur); 
    document.addEventListener('fullscreenchange', handleFullscreen);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('fullscreenchange', handleFullscreen);
    };
  }, [onViolation]);
};