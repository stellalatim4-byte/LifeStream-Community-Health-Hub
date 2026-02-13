
import React from 'react';

const Acknowledgements: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200 py-20 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100">
            <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Acknowledgements</h2>
          </div>
          
          <div className="space-y-12">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              We gratefully acknowledge the support, collaboration, and contributions of our partner organizations based in Uganda. 
              In particular, we recognize the <span className="text-slate-900 font-bold underline decoration-blue-500/30 decoration-4">Professor Kupuliano Odaet Foundation (PKOF)</span>, 
              the <span className="text-slate-900 font-bold underline decoration-indigo-500/30 decoration-4">Intercultural Development Agency (IDA)</span>, and 
              <span className="text-slate-900 font-bold underline decoration-green-500/30 decoration-4"> Esspys Cleaning Services Limited</span> for their commitment to community development, 
              innovation, and sustainable impact. Their collective efforts continue to strengthen local initiatives and improve livelihoods 
              across the communities we serve. <span className="text-blue-600 font-semibold italic">This app is sponsored to ensure continuous patient care for everyone.</span>
            </p>

            <div className="pt-12 border-t border-slate-100">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Follow us</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <a 
                  href="https://www.tiktok.com/@ida_uganda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.6 8.6 0 01-1.87-1.48v9.33c.03 2.1-.56 4.31-2.11 5.8-1.55 1.49-3.76 2.12-5.86 2.09-2.09.03-4.31-.56-5.8-2.11C1.17 21.01.55 18.81.58 16.7c-.03-2.11.56-4.31 2.11-5.8 1.55-1.49 3.76-2.12 5.86-2.09v4.03c-1.14-.02-2.34.33-3.13 1.15-.79.82-1.1 2.01-1.03 3.12.07 1.14.7 2.21 1.68 2.8.98.59 2.19.68 3.23.41 1.04-.27 1.93-.94 2.45-1.86.52-.92.68-2 .65-3.05V0z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Tiktok</p>
                    <p className="text-sm font-bold text-slate-900">@ida_uganda</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/ida_uganda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Instagram</p>
                    <p className="text-sm font-bold text-slate-900">@ida_uganda</p>
                  </div>
                </a>

                <a 
                  href="https://twitter.com/IDA_Uganda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">X</p>
                    <p className="text-sm font-bold text-slate-900">IDA_Uganda</p>
                  </div>
                </a>

                <a 
                  href="https://www.youtube.com/@idauganda7590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Youtube</p>
                    <p className="text-sm font-bold text-slate-900">@idauganda7590</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;
