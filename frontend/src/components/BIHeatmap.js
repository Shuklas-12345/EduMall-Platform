import React from 'react';

const BIHeatmap = ({ data }) => {
  return (
    <div className="p-8 bg-white rounded-3xl border-2 border-slate-50 shadow-xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-black text-primary">Eagle Eye: Mastery Density</h3>
          <p className="text-sm text-slate-500 italic">Anonymized data for strategic intervention.</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold">
          DPDP ANONYMIZED
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map(item => (
          <div key={item.id} className="group relative">
             <div className={`h-24 w-full rounded-2xl transition-all shadow-inner
                ${item.avg_score > 80 ? 'bg-secondary' : item.avg_score > 60 ? 'bg-warning/30' : 'bg-danger/20'}`} 
             />
             <div className="mt-3 text-center">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Topic ID</div>
                <div className="text-xs font-bold text-primary">{item.topic_id.substring(0,8)}</div>
                {item.is_minor && <div className="text-[8px] text-danger font-bold uppercase mt-1">Minor-Safety Protected</div>}
             </div>

             <div className="invisible group-hover:visible absolute -top-16 left-0 right-0 z-20 bg-slate-900 text-white p-3 rounded-xl text-[10px]">
                <strong>Score: {item.avg_score}%</strong><br />
                Sample Size: {item.sample_size} students<br />
                {item.sample_size < 10 ? "⚠️ Statistical caution advised." : "✅ High confidence trend."}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BIHeatmap;