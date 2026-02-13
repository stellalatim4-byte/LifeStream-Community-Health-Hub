
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SURGICAL_DEMAND_DATA } from '../constants';

const MulagoOrthopedicAnalytics: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Mulago Orthopedic Demand</h3>
          <p className="text-xs text-slate-500 font-medium">8+ Daily Life-Saving Surgeries Replenishment Tracker</p>
        </div>
        <div className="bg-red-50 px-3 py-1 rounded-full text-[10px] font-black text-red-600 uppercase tracking-widest">Critical Need Model</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {SURGICAL_DEMAND_DATA.map((item, idx) => (
          <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center">
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.type}</p>
            <p className="text-xl font-black text-slate-900">{item.units}U</p>
            <span className={`text-[9px] font-black uppercase mt-1 ${item.risk === 'High' ? 'text-red-500' : 'text-blue-500'}`}>
              Risk: {item.risk}
            </span>
          </div>
        ))}
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SURGICAL_DEMAND_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="type" tick={{fontSize: 9, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 9}} />
            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
            <Bar dataKey="units" radius={[4, 4, 0, 0]} barSize={30}>
              {SURGICAL_DEMAND_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.risk === 'High' ? '#f43f5e' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 bg-blue-900 text-white rounded-2xl">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <p className="text-[10px] font-medium leading-relaxed italic">
              "Replenishing stocks for childhood deformity corrections and road trauma prevents 94% of long-term disability cases."
            </p>
         </div>
      </div>
    </div>
  );
};

export default MulagoOrthopedicAnalytics;
