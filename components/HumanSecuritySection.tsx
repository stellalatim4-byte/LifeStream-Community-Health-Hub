
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HUMAN_SECURITY_DATA } from '../constants';

const HumanSecuritySection: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-black text-slate-900 text-xl tracking-tight">Smallholder Human Security</h3>
          <p className="text-xs text-slate-500 font-medium">Psychological Distress vs Farm Productivity Correlation</p>
        </div>
        <div className="bg-blue-50 px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest">Live Correlation</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {HUMAN_SECURITY_DATA.map(m => (
          <div key={m.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
            <p className="text-xl font-black text-slate-900">{m.value}%</p>
            <div className={`mt-2 h-1 w-8 rounded-full ${m.trend === 'declining' ? 'bg-red-500' : 'bg-green-500'}`}></div>
          </div>
        ))}
        <div className="md:col-span-2 p-4 bg-blue-900 text-white rounded-2xl flex flex-col justify-center">
          <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-1">Impact Insight</p>
          <p className="text-xs font-bold leading-relaxed italic">"A 5% reduction in psychological distress adds $1,200/yr in household farm productivity."</p>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={HUMAN_SECURITY_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="label" tick={{fontSize: 10, fontWeight: 'bold'}} axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
              {HUMAN_SECURITY_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.category === 'Psychological' ? '#f43f5e' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HumanSecuritySection;
