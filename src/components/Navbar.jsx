import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, X } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false); // State for messaging modal

  const toggleMessaging = () => {
    setIsMessagingOpen(!isMessagingOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">MoodMosaic</span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4 items-center">
              {/* <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                Dashboard
              </Link> */}
              <Link to="/community" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                Community
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                Resources
              </Link>
              <Link to="/ai-support" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                AI Support
              </Link>
              <Link to="/Auth" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                Get Started
              </Link>

              {/* Messaging Icon */}
              <button
                onClick={toggleMessaging}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Messaging Modal */}
      {isMessagingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start p-6 z-50">
          <div className="bg-white rounded-xl w-96 h-[80vh] shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Chat with Friends</h2>
              <button
                onClick={toggleMessaging}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Friends List */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Friend 1</p>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Friend 2</p>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
              {/* Add more friends dynamically */}
            </div>

            {/* Input Box */}
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;