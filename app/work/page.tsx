

// import Image from 'next/image'

// const projects = [
//   {
//     client: "Ministry of Health, Welfare and Sport",
//     title: "Optimise contact investigation during the pandemic",
//     description:
//       "Designing the GGD Contact (mobile) application and new web portal to help the municipal health services speed up source and contact investigation and make it more privacy resistant.",
//     services: ["UX Design", "UI Design"],
//     imageSrc: "/images/phones.webp",
//   },
//   {
//     client: "Ministry of Health, Welfare and Sport",
//     title: "AURALINE- A JEWELLERY BRAND",
//     description:
//       "We designed a refined and luxurious jewellery shopping experience that highlights craftsmanship, detail, and beauty. The interface focuses on clean layouts, high-quality visuals, and smooth navigation, allowing customers to explore collections effortlessly and shop with confidence.",
//     services: ["UX Design", "UI Design"],
//     imageSrc: "/images/bangel.webp",
//   },
//   {
//     client: "Ministry of Health, Welfare and Sport",
//     title: "Optimise contact investigation during the pandemic",
//     description:
//       "Designing the GGD Contact (mobile) application and new web portal to help the municipal health services speed up source and contact investigation.",
//     services: ["UX Design", "UI Design"],
//     imageSrc: "/images/v.mp4",
//   },
//   {
//     client: "Ministry of Health, Welfare and Sport",
//     title: "Optimise contact investigation during the pandemic",
//     description:
//       "Designing the GGD Contact (mobile) application and new web portal to help the municipal health services speed up source and contact investigation.",
//     services: ["UX Design", "UI Design"],
//     imageSrc: "/images/g.webp",
//   },
// ];

// const Page = () => {
//   return (
//     <section className="bg-[#040615] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
//       <div className="max-w-7xl mx-auto space-y-20 md:space-y-28 lg:space-y-32">
//         {projects.map((project, index) => (
//           <div key={index} className="group">

//             {/* Project Header */}
//             <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:mb-12">
              
//               <div className="md:w-2/3">
//                 <p className="text-gray-400 mb-2 text-sm sm:text-base font-medium">
//                   {project.client}
//                 </p>

//                 <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
//                   {project.title}
//                 </h2>

//                 <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
//                   {project.description}
//                 </p>
//               </div>

//               <div className="md:text-right">
//                 <h4 className="font-bold mb-2 text-white text-sm sm:text-base">
//                   Services
//                 </h4>
//                 <ul className="text-gray-400 space-y-1 text-sm sm:text-base">
//                   {project.services.map((service, sIndex) => (
//                     <li key={sIndex}>{service}</li>
//                   ))}
//                 </ul>
//               </div>

//             </div>

//             {/* Image Section */}
//             <div className="flex items-center justify-center">
//               <div className="relative w-full max-w-6xl aspect-[16/10] p-6 sm:p-8 md:p-12">
//                 <Image
//                   src={project.imageSrc}
//                   alt={project.title}
//                   fill
//                   className="object-contain"
//                   priority={index === 0}
//                 />
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Page;








import Image from "next/image";

const projects = [
  {
    client: "Ministry of Health, Welfare and Sport",
    title: "Optimise contact investigation during the pandemic",
    description:
      "Designing the GGD Contact (mobile) application and new web portal to help the municipal health services speed up source and contact investigation and make it more privacy resistant.",
    services: ["UX Design", "UI Design"],
    mediaSrc: "/images/phones.webp",
  },
  {
    client: "Ministry of Health, Welfare and Sport",
    title: "AURALINE - A JEWELLERY BRAND",
    description:
      "We designed a refined and luxurious jewellery shopping experience that highlights craftsmanship, detail, and beauty.",
    services: ["UX Design", "UI Design"],
    mediaSrc: "/images/c.mp4",
  },
  {
    client: "Ministry of Health, Welfare and Sport",
    title: "Video Project Showcase",
    description:
      "This project demonstrates smooth animation and interaction using autoplay background video.",
    services: ["UX Design", "UI Design"],
    mediaSrc: "/images/v.mp4",
  },
  {
    client: "Ministry of Health, Welfare and Sport",
    title: "Optimise contact investigation during the pandemic",
    description:
      "Designing the GGD Contact application to help health services speed up investigations.",
    services: ["UX Design", "UI Design"],
    mediaSrc: "/images/g.webp",
  },
];

const Page = () => {
  return (
    <section className="bg-[#040615] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-28 lg:space-y-32">
        {projects.map((project, index) => {
          const isVideo = project.mediaSrc.endsWith(".mp4");

          return (
            <div key={index} className="group">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:mb-12">
                <div className="md:w-2/3">
                  <p className="text-gray-400 mb-2 text-sm sm:text-base font-medium">
                    {project.client}
                  </p>

                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="md:text-right">
                  <h4 className="font-bold mb-2 text-white text-sm sm:text-base">
                    Services
                  </h4>
                  <ul className="text-gray-400 space-y-1 text-sm sm:text-base">
                    {project.services.map((service, sIndex) => (
                      <li key={sIndex}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Media Section */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-6xl aspect-[16/10] p-6 sm:p-8 md:p-12 overflow-hidden rounded-xl">
                  {isVideo ? (
                    <video
                      src={project.mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <Image
                      src={project.mediaSrc}
                      alt={project.title}
                      fill
                      className="object-contain rounded-xl"
                      priority={index === 0}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
