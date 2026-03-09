
import Image from "next/image";
const projects = [

  {
  title: "DreamHomes – Real Estate Website",
  description:
    "A modern real estate website designed to build strong trust between property buyers and sellers. The platform showcases verified property listings, detailed property information, and transparent project details to help clients make confident decisions. With sections like property listings, property details, and a 'Why Choose Us' section, the website highlights credibility and professionalism. The clean UI, responsive design, and clear information structure make it easy for visitors to explore properties and trust the brand behind them.",

  services: [
    "Responsive Web Design",
    "Property Listing Interface",
    "Trust-Focused UI/UX Design",
    "Brand Positioning",
  ],

  features: [
    "Listed property showcase",
    "Detailed property information for buyers",
    "Why Choose Us section to increase credibility",
    "Add property functionality for agents",
    "Project details to highlight transparency",
  ],

  mediaSrc: "/Navbar/dreamhouse.webp",
  liveLink: "https://dream-house-umber.vercel.app/",
},

{
  title: "LandMark – Real Estate Website",
  description:
    "LandMark is a modern real estate website designed to help clients explore properties with confidence and clarity. The platform allows users to browse featured properties, view detailed property information, and understand the value and benefits of each listing before making a decision. With a clean interface, structured property sections, and trust-building elements such as project details and service highlights, the website helps real estate businesses present their properties professionally and build credibility with potential buyers. The responsive design ensures a seamless experience across all devices, making property discovery simple and engaging.",
  
  services: [
    "Responsive Web Design",
    "Property Listing Interface",
    "UI/UX Design",
    "Real Estate Website Development"
  ],

  features: [
    "Featured property listings with images and details",
    "Property detail pages with clear information",
    "Sections highlighting why clients should trust the service",
    "Modern responsive layout for mobile and desktop",
    "Easy navigation to explore multiple properties"
  ],

  mediaSrc: "/Navbar/landmark.webp",
  liveLink: "https://land-mark-self.vercel.app/"
},
 
{
  title: "LUXE – Premium Real Estate Website",
  description:
    "A modern real estate website designed to present luxury properties in a professional and trustworthy way. The platform allows visitors to explore premium property listings, view detailed property information, and understand the value of each project before making a decision. With elegant design, clear property showcases, and trust-building sections, the website helps real estate businesses position themselves as reliable and high-end brands while making property discovery simple for potential buyers.",

  services: [
    "Responsive Web Design",
    "Real Estate UI/UX Design",
    "Property Listing Interface",
    "Brand Positioning"
  ],

  features: [
    "Luxury property showcase with high-quality visuals",
    "Detailed property information sections",
    "Modern and responsive design for all devices",
    "Trust-focused layout for real estate businesses",
    "Smooth navigation for exploring multiple properties"
  ],

  mediaSrc: "/Navbar/luxeestate.webp",
  liveLink: "https://land-mark-y4jb.vercel.app/"
},
 {
  title: "Surgico – Medical & Aesthetic Clinic Website",
  description:
    "Surgico is a modern medical and aesthetic clinic website designed to present healthcare services in a professional, trustworthy, and visually clean way. The platform highlights clinic treatments, doctor expertise, and service details with a strong visual hierarchy and elegant layout. With a responsive design and patient-focused interface, the website helps clinics build credibility, clearly communicate their services, and make it easy for visitors to explore treatments and contact the clinic with confidence.",

  services: [
    "Responsive Web Design",
    "Medical Website UI/UX Design",
    "Conversion Optimization",
    "UI Design",
  ],

  features: [
    "Clean and professional medical service layout",
    "Treatment and service detail sections",
    "Trust-focused design for healthcare brands",
    "Fully responsive design for all devices",
    "Clear contact and consultation options for patients"
  ],

  mediaSrc: "/Navbar/apex.webp",
  liveLink: "https://apex-jet-three.vercel.app/",
},
 {
  title: "Creative Agency Website Redesign",
  description:
    "A modern agency website redesign focused on improving visual clarity, user experience, and brand impact. The project highlights a clean and structured layout, modern UI patterns, and a fully responsive design that works seamlessly across devices. By simplifying navigation and strengthening the visual hierarchy, the website helps agencies present their services more effectively and create a stronger first impression for potential clients.",

  services: [
    "Responsive Web Design",
    "UX Strategy & Optimization",
    "UI Design",
    "Website Redesign"
  ],

  features: [
    "Modern and minimal agency layout",
    "Improved visual hierarchy for better readability",
    "Responsive design for mobile, tablet, and desktop",
    "Clear service presentation for agencies",
    "Engaging design to strengthen brand identity"
  ],

  mediaSrc: "/Navbar/velora.webp",
  liveLink: "https://p4-weld-three.vercel.app/",
},
  {
  title: "Glorine – Beauty & Skincare Website",
  description:
    "A modern beauty and skincare website designed to present cosmetic products and services with elegance and clarity. The website features a clean and visually appealing layout that highlights beauty collections, brand values, and product benefits. With responsive design, strong visual hierarchy, and engaging UI elements, the platform helps beauty brands build trust with customers while creating a premium online presence.",

  services: [
    "Responsive Web Design",
    "Beauty Brand UI/UX Design",
    "Conversion Optimization",
    "UI Design",
  ],

  features: [
    "Elegant beauty product showcase",
    "Modern and visually appealing layout",
    "Responsive design for all devices",
    "Clear product and brand presentation",
    "Trust-focused design for beauty brands"
  ],

  mediaSrc: "/Navbar/beauty.webp",
  liveLink: "https://glorine.vercel.app/",
}
];
const Page = () => {
  return (
    <section className="bg-[#040615] text-white py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto space-y-24">
        {projects.map((project, index) => {
          const isVideo = project.mediaSrc.endsWith(".mp4");

          return (
            <div key={index}>
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
                <div className="md:w-2/3">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-lg max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="md:text-right">
                  <h4 className="font-bold mb-2">Services</h4>
                  <ul className="text-gray-400 space-y-1">
                    {project.services.map((service, sIndex) => (
                      <li key={sIndex}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Media */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-6xl aspect-[16/10] overflow-hidden rounded-xl group">

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
                    />
                  )}

                  {/* Center Button */}
                <a
  href={project.liveLink}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute inset-0 flex items-center justify-center"
>
  <span className="px-8 py-3 border border-white text-white font-semibold rounded-lg bg-transparent hover:bg-white hover:text-black transition">
    View More
  </span>
</a>
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