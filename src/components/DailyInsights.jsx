import React from 'react';
import { Users, BookOpen } from 'lucide-react';

const DailyInsights = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Daily Insights</h2>
      <div className="flex items-center space-x-4 text-gray-600">
        <Users className="w-5 h-5" />
        <span>Join 2,345 others tracking their mental well-being today</span>
      </div>
      <div className="flex items-center space-x-4 mt-4 text-gray-600">
        <BookOpen className="w-5 h-5" />
        <span>Access 100+ expert-curated resources</span>
      </div>
    </div>
  );
};

export default DailyInsights;