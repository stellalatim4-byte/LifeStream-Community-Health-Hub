
import React, { useState } from 'react';
import { Donor } from '../types';
import { INITIAL_DONORS } from '../constants';

const DonorManager: React.FC = () => {
  const [donors] = useState<Donor[]>(INITIAL_DONORS);
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
    d.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group donors by country
  const groupedDonors = filteredDonors.reduce((acc, donor) => {
    if (!acc[donor.country]) {
      acc[donor.country] = [];
    }
    acc[donor.country].push(donor);
    return acc;
  }, {} as Record<string, Donor[]>);

  const countries = Object.keys(groupedDonors).sort();

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Global Donor Directory</h2>
          <p className="text-sm text-slate-500">Comprehensive historical registry of past and present donors.</p>
        </div>
        <div className="relative">
          <input 
            type="text"
            placeholder="Search name, type, or country..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blood-red outline-none w-full md:w-64 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4">Donor Profile</th>
              <th className="px-6 py-4">Blood Type</th>
              <th className="px-6 py-4">Registry Year</th>
              <th className="px-6 py-4">Last Active</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {countries.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-medium italic">
                  No donors found matching your search.
                </td>
              </tr>
            ) : (
              countries.map(country => (
                <React.Fragment key={country}>
                  {/* Country Header Row */}
                  <tr className="bg-slate-50/50 sticky top-[52px] z-10 backdrop-blur-sm">
                    <td colSpan={6} className="px-6 py-3 border-y border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Region:</span>
                        <span className="text-sm font-black text-slate-900">{country}</span>
                        <span className="ml-2 px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-500">
                          {groupedDonors[country].length} Historical Records
                        </span>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Donor Rows for this Country */}
                  {groupedDonors[country].sort((a,b) => b.registryYear - a.registryYear).map((donor) => (
                    <tr key={donor.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 group-hover:bg-red-50 group-hover:text-blood-red transition-colors">
                            {donor.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 leading-none mb-1">{donor.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                              {donor.location} • <span className="text-blue-600">Since {donor.registryYear}</span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-red-100 text-blood-red">
                          {donor.bloodType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-bold">
                        {donor.registryYear}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                        {new Date(donor.lastDonationDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight w-fit ${
                            donor.status === 'Available' ? 'bg-green-100 text-green-700' : 
                            donor.status === 'Recent Donor' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {donor.status}
                          </span>
                          {notifiedDonors.has(donor.id) && (
                            <span className="text-[9px] font-black text-blue-600 uppercase animate-pulse">Follow-up Sent</span>
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
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorManager;
