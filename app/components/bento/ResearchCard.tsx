import React from "react";
import Image from "next/image";

const ResearchCard = () => {
  return (
    <div className="bg-[#0f172a] rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
      <div className="mb-6 p-4 rounded-2xl">
        <Image src="/download.svg" alt="" width={50} height={100} />
      </div>

      <h2 className="text-2xl font-bold mb-3">Research & strategy</h2>

      <p className="text-slate-400 text-sm">
        We love talking to users. Using various research methods we work
        towards a viable product strategy.
      </p>
    </div>
  );
};

export default ResearchCard;
