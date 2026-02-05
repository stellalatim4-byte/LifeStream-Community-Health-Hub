
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { MOCK_SURGERY_DATA } from '../constants';

const BloodStockChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 text-lg">Daily Blood Analysis</h3>
        <span className="text-xs font-medium text-slate-400">Last 5 Days</span>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOCK_SURGERY_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend />
            <Bar name="Units Required" dataKey="bloodUnitsRequired" fill="#D32F2F" radius={[4, 4, 0, 0]} />
            <Bar name="Units Available" dataKey="bloodUnitsAvailable" fill="#CBD5E1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
        <p className="text-sm text-red-800 font-medium">
          ⚠️ Significant deficit detected. Average surgery blood loss replenishment at 45% capacity.
        </p>
      </div>
    </div>
  );
};

export default BloodStockChart;
