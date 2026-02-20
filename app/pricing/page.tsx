import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-[#050a14] text-white py-28 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Header */}
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Pricing
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Every Project is Unique.
          <br />
          <span className="text-blue-300">Let’s Build Yours Together.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-20 leading-relaxed">
          I don’t believe in one-size-fits-all pricing. Each website is crafted 
          based on your business goals, features required, and long-term vision. 
          Let’s discuss your project and create a solution that fits perfectly.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Starter */}
          <div className="bg-[#0c1626] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Starter Website</h3>
            <p className="text-gray-400 mb-6">
              Perfect for small local businesses starting their online presence.
            </p>
            <ul className="text-gray-400 space-y-2 mb-8 text-sm">
              <li>✔ Responsive Design</li>
              <li>✔ Modern UI</li>
              <li>✔ Contact Form</li>
              <li>✔ Basic SEO Setup</li>
            </ul>
            <p className="text-blue-400 font-medium">
              Let’s discuss your needs
            </p>
          </div>

          {/* Business */}
          <div className="bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/30 rounded-3xl p-8 scale-105 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Business Growth</h3>
            <p className="text-gray-300 mb-6">
              For businesses looking to attract more customers and grow revenue.
            </p>
            <ul className="text-gray-300 space-y-2 mb-8 text-sm">
              <li>✔ Everything in Starter</li>
              <li>✔ Custom Design System</li>
              <li>✔ Advanced SEO</li>
              <li>✔ Performance Optimization</li>
              <li>✔ Analytics Setup</li>
            </ul>
            <p className="text-white font-semibold">
              Custom Quote After Discussion
            </p>
          </div>

          {/* Premium */}
          <div className="bg-[#0c1626] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium Experience</h3>
            <p className="text-gray-400 mb-6">
              Fully customized, high-end websites for serious business growth.
            </p>
            <ul className="text-gray-400 space-y-2 mb-8 text-sm">
              <li>✔ Custom UX Strategy</li>
              <li>✔ Unique Animations</li>
              <li>✔ E-commerce Integration</li>
              <li>✔ Ongoing Support</li>
            </ul>
            <p className="text-blue-400 font-medium">
              Tailored Proposal
            </p>
          </div>

        </div>

        {/* Call To Action */}
        <div className="mt-20">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-full text-lg font-medium shadow-lg">
            Schedule a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default page;
