import React from 'react';
import Button from './Button';

const ConsentModal = ({ noticeText, purposes, onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-primary mb-4">Privacy Update</h2>
        
        <div className="prose mb-6 overflow-y-auto max-h-60 p-4 bg-slate-50 rounded border">
          {/* SRS 15.7: Display the exact notice text versioned in Task 1.3 */}
          {noticeText}
        </div>

        <p className="text-sm text-slate-600 mb-6 italic">
          * Note: You can withdraw consent at any time in your profile settings.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <Button label="Decline & Exit" variant="outline" onClick={onDecline} />
          <Button label="I Accept these Terms" variant="primary" onClick={onAccept} />
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;