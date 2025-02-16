import React from 'react';
import { ExternalLink } from 'lucide-react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={resource.imageUrl}
        alt={resource.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <p className="text-gray-600 mb-4">{resource.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {resource.category}
          </span>
          <button className="text-blue-500 hover:text-blue-700">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;