import React from 'react';
import MoodTracker from './MoodTracker'; // Import the MoodTracker component

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mood Tracker Section */}
        <div className="col-span-1">
          <MoodTracker />
        </div>

        {/* Other Dashboard Content */}
        <div className="col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Other Content</h2>
            <p className="text-gray-700">
              This is where you can add other dashboard content, such as statistics, notifications, or additional widgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;