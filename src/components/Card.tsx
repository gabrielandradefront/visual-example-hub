
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
}

const Card = ({ title, description, imageUrl, category }: CardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl hover-card bg-white border-2 border-[#33C3F0]/10 transition-all hover:border-[#ea384c] hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 ${loaded ? 'hidden' : 'block'}`}></div>
        <img
          src={imageUrl}
          alt={title}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
        />
        {category && (
          <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-[#ea384c] text-white">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[#33C3F0] transition-colors group-hover:text-[#ea384c]">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
