import React from 'react';

const StrakzatMainPage = () => {
  return (
    <div className="bg-[#050a14] text-white font-sans selection:bg-blue-500/30">
      
    

     

      {/* 3. DIGITAL PRODUCT DESIGN / SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-800/50">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Digital product <span className="text-blue-200/80 italic">design</span></h2>
          <p className="text-gray-400 text-xl max-w-4xl leading-relaxed">We specialise in determining how digital services can provide value within the user and business context. By utilising research, strategy and design we create valuable mobile apps, web applications, webshops, and software.</p>
        </div>

        <div className="space-y-32">
          {/* Research */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <h3 className="text-4xl font-bold">Research</h3>
            <div className="md:col-span-2 text-gray-400 text-lg leading-relaxed">
              Research plays a crucial role in helping both our team and yours to develop a profound understanding of the problem at hand, identify potential opportunities, and make informed design decisions.
            </div>
            <div className="space-y-2">
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Services</h4>
              {['User Interviews', 'User Testing', 'Stakeholder sessions', 'Competitor Analysis', 'UX/UI Audit'].map(s => (
                <p key={s} className="text-gray-300 text-sm">{s}</p>
              ))}
            </div>
          </div>
          {/* Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <h3 className="text-4xl font-bold">Strategy</h3>
            <div className="md:col-span-2 text-gray-400 text-lg leading-relaxed">
              Strategy involves deliberate planning and decision-making that directs the overall direction and goals of the product. It entails defining the product's vision, objectives, and key principles.
            </div>
            <div className="space-y-2">
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Services</h4>
              {['User Journey', 'Product Guidelines', 'User Stories', 'Product Roadmap', 'Flowchart'].map(s => (
                <p key={s} className="text-gray-300 text-sm">{s}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

 


    </div>
  );
};

export default StrakzatMainPage;