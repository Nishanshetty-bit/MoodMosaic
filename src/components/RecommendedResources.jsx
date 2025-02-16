import React from 'react';
import ResourceCard from './ResourceCard';

const RecommendedResources = ({ resources }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 mt-20">Recommended Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedResources;