
import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "I absolutely valued working with Strakzat. The team is complementary & critical. With their help we were able to launch auto.nl successfully and quickly.",
      name: "Martijn Bovée",
      role: "Manager at auto.nl",
      image: "/images/p1.webp"
    },
    {
      text: "Strakzat doesn't only bring your ideas to life, they manage to give designs that extra touch, seemingly without effort. The more space Strakzat gets, the more the quality of the output improves.",
      name: "Rients Hoeksma",
      role: "Growth Hacker at De Kweker",
      image: "/images/p2.webp"
    },
    {
      text: "Next to the fact that they are really pleasant people to work with, they add incredible value to our company. Our design flow is way more efficient which is beneficial for both our team internally as our customers.",
      name: "Tako Paddenburg",
      role: "Founder Oaky",
      image: "/images/p3.webp"
    },
    {
      text: "We have experienced working with Strakzat as very pleasant. They are professional and deliver on time. Our project was for all websites of Pearson Clinical in Europe to improve the UX with new content pages and flow. Next to that we also needed to implement our renewed CI. We used the designed pages created by the Strakzat team as templates in the backend so that the use is consistent and easy to recognize for customers. So we now have a more customer focused website with a good flow and fresh design in each country.",
      name: "Teine van der Drift",
      role: "Manager at Pearson Clinical",
      image: "/images/p4.webp"
    },
    {
      text: "Strakzat has been crucial in realizing YourDesq. With the help of their shared vision, dedication, cooperation we've been able to successfully build platform that impacts peoples lives in the new era of hybrid working. The team of Strakzat used our design sketches and did what they do best: design and build high quality and scalable software.",
      name: "Wouter van den Brink",
      role: "Co-founder Yourdesq",
      image: "/images/p5.webp"
    },
  ];

  return (
    <section className=" text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
            Success Stories
          </h3>
          <h2 className="text-5xl md:text-6xl font-bold">
            Words from our clients
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid bg-[#0b1622] p-8 rounded-3xl border border-gray-800/50 flex flex-col justify-between"
            >
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {item.text}
              </p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={item.image} 
                  width={50} 
                  height={50}
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-gray-700 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
