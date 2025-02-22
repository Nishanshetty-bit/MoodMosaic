import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">MoodMosaic</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Dashboard
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Resources
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Community
            </Link>
            <Link to="/ai-support" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              AI Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;