import React from "react";
import SectionHeader from "./SectionHeader";
import DesignSystemCard from "./DesignSystemCard";
import InterfaceCard from "./InterfaceCard";
import MvpCard from "./MvpCard";
import BrandingCard from "./BrandingCard";
import ResearchCard from "./ResearchCard";
import ConversionCard from "./ConversionCard";

const BentoPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] p-6 md:p-12 text-white font-sans">
      <SectionHeader />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        <DesignSystemCard />
        <InterfaceCard />
        <MvpCard />
        <BrandingCard />
        <ResearchCard />
        <ConversionCard />
      </div>
    </div>
  );
};

export default BentoPage;
