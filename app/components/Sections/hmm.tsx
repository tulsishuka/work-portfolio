import React from 'react';

const BrewSection = () => {
  return (
    <section className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-[#05070A] px-4 py-20 text-center">
      {/* Background Gradient Glow */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at center, #1E3A8A 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Let’s brew something <br /> great together!
        </h1>

        <button 
          className="rounded-xl bg-gradient-to-b from-[#3B82F6] to-[#2563EB] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default BrewSection;