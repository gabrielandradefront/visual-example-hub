
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="group p-6 rounded-xl border-2 border-[#0c2340]/10 bg-white transition-all hover:shadow-lg hover:border-[#c8a035]">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f5fa] text-[#0c2340] group-hover:bg-[#c8a035]/20">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#0c2340]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Feature;
