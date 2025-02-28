
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="group p-6 rounded-xl border-2 border-blue-100 bg-white transition-all hover:shadow-lg hover:border-blue-300">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-blue-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Feature;
