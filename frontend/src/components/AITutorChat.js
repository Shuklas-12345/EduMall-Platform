import React from 'react';
import Button from './Button';

const AITutorChat = ({ messages, onSend, isThrottled }) => (
  <div className="flex flex-col h-[600px] bg-white rounded-3xl border-2 border-slate-100 shadow-2xl overflow-hidden">
    <div className="bg-primary p-5 text-white flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="font-black tracking-tight">SOCRATIC MENTOR</span>
      </div>
      <span className="text-[9px] font-bold opacity-70 italic tracking-widest uppercase">Apex Integrated</span>
    </div>

    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white text-slate-800 border border-slate-200'}`}>
            <p className="text-sm leading-relaxed">{m.text}</p>
            {m.citations && (
              <div className="mt-3 pt-2 border-t border-slate-100 text-[8px] font-black text-secondary uppercase tracking-tighter">
                Sourced from: {m.citations.join(' | ')}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="p-4 bg-white border-t flex gap-2">
      <input 
        disabled={isThrottled}
        className="flex-1 p-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary disabled:opacity-30" 
        placeholder={isThrottled ? "Burnout Governor: Active" : "How do I solve this?"} 
      />
      <Button label="Mentor" onClick={onSend} disabled={isThrottled} />
    </div>
  </div>
);

export default AITutorChat;