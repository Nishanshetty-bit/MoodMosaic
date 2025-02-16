import React from 'react';
import { Brain } from 'lucide-react';
import AISuppport from './AISuppport';

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
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Dashboard
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Resources
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              Community
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              AI support
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;