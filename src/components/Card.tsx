
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
    <div className="group relative overflow-hidden rounded-lg hover-card bg-white">
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
      </div>
      <div className="p-6">
        {category && (
          <span className="inline-block mb-2 text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100">
            {category}
          </span>
        )}
        <h3 className="text-xl font-medium mb-2 transition-colors group-hover:text-gray-700">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
