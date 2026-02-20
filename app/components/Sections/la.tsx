
import React from 'react';
import {  BookOpen, Ruler, Hammer, TrendingUp, X, Menu, Check } from 'lucide-react';
import Image from 'next/image';

const BentoPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] p-6 md:p-12 text-white font-sans">
     <div className="text-center mb-12">
       <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
            Services
          </h3>
 <h1 className="text-6xl font-bold">
  What we’re <br />
  capable of
</h1>

</div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        
        {/* REFINED Large Top Left Card: Design System */}
        <div className="md:col-span-2 md:row-span-2 bg-[#0d1525] rounded-[32px] p-8 relative overflow-hidden border border-slate-800/50">
          <div className="max-w-xl mx-auto text-center mb-12 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Set up a design system</h2>
            <p className="text-slate-400 text-lg">
              A design system brings consistency and efficiency to your product, 
              resulting in better user experience and brand identity.
            </p>
          </div>
          
          {/* UI Component Mockups */}
          <div className="relative h-64 w-full">
            {/* Top Left Buttons */}
            <div className="absolute top-0 left-4 flex gap-3">
              <div className="bg-[#1e293b]/50 border border-slate-700 rounded-lg px-3 py-2 flex items-center gap-6">
                <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
                <X size={14} className="text-slate-400" />
              </div>
              <div className="bg-[#1e293b]/50 border border-slate-700 rounded-lg px-3 py-2 flex items-center gap-6">
                <Menu size={14} className="text-slate-400" />
                <div className="w-16 h-1.5 bg-slate-600 rounded-full" />
              </div>
            </div>

            {/* Profile Card (Right) */}
            <div className="absolute top-10 right-4 bg-[#1e293b]/40 border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 w-72">
              <div className="relative">
                 <Image
                                width={40}
                                height={40}
                                src="/images/i.webp"
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover border-2 border-[#16253A]"
                              />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#1e293b] rounded-full" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 w-full bg-slate-600 rounded-full" />
                <div className="h-2 w-2/3 bg-slate-700 rounded-full" />
              </div>
            </div>

            {/* Progress Card (Bottom Left) */}
            <div className="absolute bottom-[-20px] left-8 bg-[#1e293b]/40 border border-slate-700/50 rounded-xl p-6 w-64 h-56">
               <div className="flex justify-between items-start mb-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path stroke="#1e293b" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path stroke="#3b82f6" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                  </div>
                  <X size={14} className="text-slate-500" />
               </div>
               <div className="space-y-3">
                 <div className="h-2 w-20 bg-slate-600 rounded-full" />
                 <div className="h-2 w-full bg-slate-800 rounded-full" />
                 <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
               </div>
            </div>

            {/* Toggles (Bottom Right) */}
            <div className="absolute bottom-4 right-12 flex items-center gap-4">
               <div className="w-10 h-6 bg-slate-700 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
               </div>
               <div className="w-10 h-6 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
               </div>
               <div className="w-6 h-6 bg-slate-800 border border-slate-700 rounded-md" />
               <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                  <Check size={14} className="text-white" />
               </div>
            </div>
          </div>
        </div>

        {/* Create Interfaces Card */}
        <div className="bg-[#2d1b2e] rounded-[32px] flex items-center justify-center p-8 border border-pink-900/30">
          <h2 className="text-4xl font-bold text-center leading-tight">
            Create interfaces users <span className="inline-block text-pink-500 animate-pulse">❤️</span> to use
          </h2>
        </div>

        {/* MVP Card */}
        <div className="md:row-span-2 bg-[#0f172a] rounded-[32px] p-8 flex flex-col items-center justify-center text-center border border-slate-800">
          <div className="flex justify-center gap-4 mb-8">
             <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Hammer className="text-white" size={28} />
             </div>
          </div>
          <div className="flex justify-center gap-6 mb-10 text-slate-400 font-semibold uppercase text-xs tracking-widest">
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center">
                    <BookOpen className="text-white" size={28} />
                </div>
                <span>Learn</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Ruler className="text-white" size={28} />
                </div>
                <span>Measure</span>
             </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Build an MVP</h2>
          <p className="text-slate-400 text-sm">
            Building a Minimum Viable Product allows you to quickly validate your product idea, 
            receive feedback from users, and iterate towards a successful solution.
          </p>
        </div>

        {/* Branding Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 rounded-[32px] p-10 flex items-center justify-center relative overflow-hidden group">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight relative z-10">
              Strengthen the branding <br /> of your product
          </h2>
        </div>

       
        {/* BOTTOM ROW: Research & Strategy */}
        <div className="bg-[#0f172a] rounded-[32px] p-8 flex flex-col items-center justify-center text-center ">
          <div className="mb-6  p-4 rounded-2xl ">
            {/* <Beaker className="text-slate-300" size={40} /> */}
                      <Image src="/download.svg" alt='' width={50}  height={100}/>
            
          </div>
          <h2 className="text-2xl font-bold mb-3">Research & strategy</h2>
          <p className="text-slate-400 text-sm">
            We love talking to users. Using various research methods we work towards a viable product strategy.
          </p>
        </div>

        {/* BOTTOM ROW: Conversion Rates */}
        <div className="md:col-span-2 bg-[#0f172a] rounded-[32px] p-8 border border-slate-800 relative overflow-hidden flex items-center">
          <div className="max-w-xs relative z-10">
             <h2 className="text-2xl font-bold mb-4">Improve Conversion rates</h2>
             <p className="text-slate-400 text-sm leading-relaxed">
               Good design boosts conversion rates through simplification and persuasion. 
               In addition, a trustworthy look-and-feel contributes to credibility.
             </p>
          </div>
          <div className="flex-1 h-full relative min-h-[180px]">
            <div className="absolute top-4 right-0 text-emerald-400 flex items-center gap-1 text-sm font-medium">
              <TrendingUp size={16} /> 20% <span className="text-slate-500 ml-1">vs last month</span>
            </div>
            <svg className="absolute bottom-0 right-0 w-full h-full overflow-visible" viewBox="0 0 400 150">
              <path 
                d="M 50 140 Q 100 140, 130 90 T 220 80 T 310 110 T 380 20" 
                fill="none" 
                stroke="#2dd4bf" 
                strokeWidth="3"
                className="drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
              />
            </svg>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default BentoPage;







