// /* eslint-disable react-hooks/rules-of-hooks */

// "use client";
// import { useState } from "react";

// const page = () => {

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   message: "",
// });

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await fetch("/api/email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   const data = await res.json();
//   alert(data.success ? "Message Sent!" : data.error);
// };




//   return (
//     <section className="min-h-screen bg-[#050a14] text-white py-28 px-6 relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />

//       <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

//         {/* Left Side Content */}
//         <div>
//           <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
//             Contact
//           </p>

//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             Let’s Build Something
//             <br />
//             <span className="text-blue-300">Amazing Together</span>
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed mb-8">
//             Have a project in mind? I’d love to hear about your business and goals.
//             Fill out the form and I’ll get back to you as soon as possible.
//           </p>

//           <div className="space-y-4 text-gray-400">
//             <p>📍 Uttar Pradesh, India</p>
//             <p>📧 yourmail@email.com</p>
//             <p>💼 Freelance Web Developer</p>
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <div className="bg-[#0c1626] border border-white/10 rounded-3xl p-8 shadow-2xl">

//           <form className="space-y-6"  onSubmit={handleSubmit}
// >

//             <div>
//               <label className="block text-sm mb-2 text-gray-400">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-400">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-400">
//                 Project Details
//               </label>
//               <textarea
//                 rows="5"
//                 placeholder="Tell me about your project..."
//                 className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition resize-none"
//               />
//             </div>
//             <button 
//               type="submit"
//               className="w-full py-4 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-lg font-medium shadow-lg"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default page;


"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Page = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <section className="min-h-screen bg-[#050a14] text-white py-28 px-6 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let’s Build Something
            <br />
            <span className="text-blue-300">Amazing Together</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Have a project in mind? Fill out the form and I’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#0c1626] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Project Details
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#111c2e] border border-white/10 focus:border-blue-500 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-lg font-medium shadow-lg"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
