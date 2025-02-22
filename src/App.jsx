import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import RecommendedResources from './components/RecommendedResources';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import AISupport from './components/AISupport';
import Login from './components/Login'; // Import the Login component

const resources = [
  {
    id: '1',
    title: 'Guided Meditation Session',
    description: 'A 10-minute meditation session for stress relief and mindfulness.',
    category: 'meditation',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Anxiety Management Techniques',
    description: 'Learn effective strategies to manage anxiety in daily life.',
    category: 'therapy',
    imageUrl: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Mindful Movement Guide',
    description: 'Simple exercises to incorporate mindfulness into physical activity.',
    category: 'exercise',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
  },
];

const quotes = [
  "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 bg-cover bg-center h-screen w-full">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Flex Layout with Image and Quotes */}
                    <div className="flex items-center justify-center relative">
                      <img
                        src="https://media.istockphoto.com/id/2163920269/photo/indian-young-family-of-four-sitting-isolated-on-white-background-and-playing-different-games.jpg?s=2048x2048&w=is&k=20&c=05dq9JZ8qeoEG0lWpYlwxl9YKrbtaX9XnP0RESomzXQ="
                        alt="Mental Health"
                        className="w-full h-150 object-cover rounded-md shadow-lg"
                      />
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center space-y-4">
                        {quotes.map((quote, index) => (
                          <motion.p
                            key={index}
                            className="text-2xl w-200 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 * index, duration: 1 }}
                          >
                            {`"${quote}"`}
                          </motion.p>
                        ))}
                      </div>
                    </div>

                    <RecommendedResources resources={resources} />
                  </>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/community" element={<Community />} />
              <Route path="/ai-support" element={<AISupport />} />
              <Route path="/auth" element={<Login />} /> {/* Add the Login route */}
            </Routes>
          </motion.div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;