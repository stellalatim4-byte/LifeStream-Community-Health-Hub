
import React, { useState } from 'react';
import { Donor } from '../types';
import { INITIAL_DONORS } from '../constants';

const DonorManager: React.FC = () => {
  const [donors] = useState<Donor[]>(INITIAL_DONORS);
  const [searchTerm, setSearchTerm] = useState('');
  const [followingUp, setFollowingUp] = useState<string | null>(null);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [notifiedDonors, setNotifiedDonors] = useState<Set<string>>(new Set());

  const handleFollowUp = (donorId: string) => {
    setFollowingUp(donorId);
    setTimeout(() => {
      setNotifiedDonors(prev => new Set(prev).add(donorId));
      setFollowingUp(null);
      setTimeout(() => {
        setNotifiedDonors(prev => {
          const next = new Set(prev);
          next.delete(donorId);
          return next;
        });
      }, 5000);
    }, 800);
  };

  const handleBulkBroadcast = () => {
    setIsBroadcasting(true);
    // Simulate low-cost ICT SMS/Push broadcast to all filtered donors
    setTimeout(() => {
      const allIds = donors.map(d => d.id);
      setNotifiedDonors(new Set(allIds));
      setIsBroadcasting(false);
      
      setTimeout(() => {
        setNotifiedDonors(new Set());
      }, 10000);
    }, 2000);
  };

  const filteredDonors = donors.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedDonors = filteredDonors.reduce((acc, donor) => {
    if (!acc[donor.country]) acc[donor.country] = [];
    acc[donor.country].push(donor);
    return acc;
  }, {} as Record<string, Donor[]>);

  const countries = Object.keys(groupedDonors).sort();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
        <div>
          <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Global Donor Registry</h2>
          <p className="text-xs text-slate-500 font-medium">Replicable Life-Saving Node (IHR 2005 Standard)</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <input 
              type="text"
              placeholder="Filter pool..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm w-full md:w-48 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button 
            onClick={handleBulkBroadcast}
            disabled={isBroadcasting}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-200"
          >
            {isBroadcasting ? 'Broadcasting...' : 'Broadcast Follow-up'}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
            <tr>
              <th className="px-6 py-4">Profile</th>
              <th className="px-6 py-4">Group</th>
              <th className="px-6 py-4">Active Since</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Outreach</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {countries.map(country => (
              <React.Fragment key={country}>
                <tr className="bg-blue-50/50">
                  <td colSpan={5} className="px-6 py-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                    {country} Region
                  </td>
                </tr>
                {groupedDonors[country].map((donor) => (
                  <tr key={donor.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{donor.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{donor.location}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-lg font-black text-xs">{donor.bloodType}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-500">{donor.registryYear}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full w-fit ${
                          donor.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {donor.status}
                        </span>
                        {notifiedDonors.has(donor.id) && (
                          <span className="text-[8px] font-black text-blue-600 uppercase mt-1 animate-pulse">Follow-up Dispatched</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleFollowUp(donor.id)}
                        disabled={followingUp === donor.id || notifiedDonors.has(donor.id)}
                        className={`p-2 rounded-xl transition-all ${notifiedDonors.has(donor.id) ? 'bg-blue-600 text-white' : 'bg-slate-100 text-blue-600 hover:bg-blue-50'}`}
                      >
                        {notifiedDonors.has(donor.id) ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorManager;
