
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="group p-6 rounded-xl border border-gray-100 bg-white transition-all hover:shadow-md">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Feature;
