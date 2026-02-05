
import React from 'react';

const CommunityCTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
        {/* Decorative background elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
            Keep our apps free for every user. <br className="hidden md:block" />
            Help us grow thriving communities together. ✨
          </h3>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Support our work in <span className="font-bold text-blue-600">AGRITECH</span> and community initiatives. 
            Every contribution from friends around the world helps us expand community initiatives, create jobs, and strengthen local food systems. Your generosity helps us go further.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://idawellness.vendblue.store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200"
            >
              <span className="mr-2">👉</span> 
              Purchase the eBook & Invest in AGRITECH
            </a>
            
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              International Support Gateway • idawellness.vendblue.store
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
