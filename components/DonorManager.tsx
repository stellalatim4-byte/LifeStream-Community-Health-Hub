
import React, { useState } from 'react';
import { Donor } from '../types';
import { INITIAL_DONORS } from '../constants';

const DonorManager: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>(INITIAL_DONORS);
  const [searchTerm, setSearchTerm] = useState('');
  const [followingUp, setFollowingUp] = useState<string | null>(null);
  const [notifiedDonors, setNotifiedDonors] = useState<Set<string>>(new Set());

  const handleFollowUp = (donorId: string) => {
    setFollowingUp(donorId);
    // Simulate API call to send follow-up message
    setTimeout(() => {
      setNotifiedDonors(prev => new Set(prev).add(donorId));
      setFollowingUp(null);
      // Remove notification badge after 5 seconds
      setTimeout(() => {
        setNotifiedDonors(prev => {
          const next = new Set(prev);
          next.delete(donorId);
          return next;
        });
      }, 5000);
    }, 800);
  };

  const filteredDonors = donors.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Donor Directory</h2>
          <p className="text-sm text-slate-500">Manage willing donors for rapid surgical follow-up.</p>
        </div>
        <div className="relative">
          <input 
            type="text"
            placeholder="Search by name or type..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blood-red outline-none w-full md:w-64 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">Donor Name</th>
              <th className="px-6 py-4">Blood Type</th>
              <th className="px-6 py-4">Last Donation</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Follow-up</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredDonors.map((donor) => (
              <tr key={donor.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 group-hover:bg-red-50 group-hover:text-blood-red transition-colors">
                      {donor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{donor.name}</p>
                      <p className="text-xs text-slate-500">{donor.location}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-red-100 text-blood-red">
                    {donor.bloodType}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(donor.lastDonationDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight w-fit ${
                      donor.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {donor.status}
                    </span>
                    {notifiedDonors.has(donor.id) && (
                      <span className="text-[9px] font-black text-blue-600 uppercase animate-bounce">Follow-up Sent</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => handleFollowUp(donor.id)}
                    disabled={followingUp === donor.id || notifiedDonors.has(donor.id)}
                    className={`p-2 rounded-full transition-all flex items-center justify-center ml-auto ${
                      notifiedDonors.has(donor.id) 
                        ? 'bg-blue-600 text-white' 
                        : 'text-blood-red hover:bg-red-50'
                    }`}
                    title="Send follow-up message"
                  >
                    {followingUp === donor.id ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : notifiedDonors.has(donor.id) ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorManager;
