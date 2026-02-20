import React from 'react';

const StrakzatPage = () => {
  const values = [
    { title: "Be your go-to", highlight: "for products", text: "Our passion lies in creating digital services with a focus on user experience. Our expertise includes strategy and design for marketplaces, webshops, dashboards, and apps." },
    { title: "Rather show", highlight: "than tell", text: "With a hands-on approach, we aim to get results fast. We've mastered the skill of iterative design, allowing us to develop tangible ideas quickly, optimizing those step by step." },
    { title: "Deliver", highlight: "value", text: "Validation is our driving force. We place immense value on testing and measuring our creations, as we firmly believe that true impact can only be demonstrated through rigorous validation." },
    { title: "Put people", highlight: "first", text: "At the heart of our creative process lies a focus on real people. We craft designs that resonate with users and solve actual problems through empathy." },
    { title: "Form a super", highlight: "force", text: "We thrive on teamwork and collaboration. We believe in harnessing the knowledge and expertise of everyone involved to create something superior." },
    { title: "Adapt to your", highlight: "process", text: "We believe in the power of freedom and flexibility regarding collaboration. Together we find the rhythm that works best for your team." }
  ];


  return (
    <div className="bg-[#050a14] text-white min-h-screen font-sans">
      
      {/* 1. Mission & Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We transform ideas into extraordinary designed products
          </h1>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <p>At Strakzat we unleash digital product design s power to ignite positive impact. With an unwavering commitment to excellence, we place the user, business, and technology at the heart of our creative process.</p>
            <p>We go beyond the ordinary to create extraordinary digital experiences for our clients and their users. As an agile team of design experts, we specialize in crafting validated digital solutions with impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-bold">Values</h2>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
            {values.map((v, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-semibold">
                  {v.title} <span className="text-blue-300">{v.highlight}</span>
                </h4>
                <p className="text-gray-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

   
    </div>
  );
};

export default StrakzatPage;