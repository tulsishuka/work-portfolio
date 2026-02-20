// import Image from 'next/image';
// import React from 'react';
// import StrakzatPage from './team/page';

// const AboutSection = () => {
//   const images = [
//     "/images/green.webp", // Man on phone
//     "/images/green.webp", // Monitor/Code
//    "/images/green.webp", // Architecture/Boat
//    "/images/green.webp",
//    "/images/green.webp",
//   ];

//   return (
//     <section className="relative bg-[#050a14] py-24 px-6 overflow-hidden">
//       {/* Top Glow Effect */}
//       <div 
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-30"
//         style={{
//           background: 'radial-gradient(circle at center, #1e3a8a 0%, transparent 70%)',
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Content */}
//         <div className="text-center mb-16">
//           <h2 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//             We are <span className="text-blue-300">Strakzat</span>
//           </h2>
//           <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Experts in the design of digital products and able to cater to all 
//             stages of this process from research to testing.
//           </p>
//         </div>

//         {/* Image Card Gallery */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-[450px] md:h-[550px]">
//           {images.map((src, index) => (
//             <div 
//               key={index} 
//               className={`relative overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${
//                 index % 2 === 0 ? 'mt-0' : 'mt-0' // Adjust if you want a staggered look
//               }`}
//             >
//               <Image width={50} height={50}
//                 src={src} 
//                 alt={`Strakzat team ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//               {/* Subtle Overlay to match image style */}
//               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <StrakzatPage/>
//     </section>
//   );
// };

// export default AboutSection;





import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-[#050a14] py-28 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            About Me
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Helping Local Businesses
            <br />
            Grow Online 🚀
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I’m a freelance web developer who builds modern, responsive websites 
            for local businesses. My goal is simple — help businesses attract more 
            customers, build trust, and increase revenue through powerful digital presence.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Responsive Design
            </span>
            <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Fast Performance
            </span>
            <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              SEO Friendly
            </span>
          </div>
        </div>

        {/* Right Image Layout */}
        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/green.webp"
              alt="Freelancer working"
              width={800}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-[#0c1626] border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl w-[250px]">
            <p className="text-white text-3xl font-bold">20+</p>
            <p className="text-gray-400 text-sm mt-1">
              Websites Designed & Developed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
