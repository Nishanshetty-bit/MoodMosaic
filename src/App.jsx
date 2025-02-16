import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import DailyInsights from './components/DailyInsights';
import RecommendedResources from './components/RecommendedResources';
import MoodTracker from './components/MoodTracker';

const resources = [
  {
    id: '1',
    title: 'Guided Meditation Session',
    description: 'A 10-minute meditation session for stress relief and mindfulness.',
    category: 'meditation',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Anxiety Management Techniques',
    description: 'Learn effective strategies to manage anxiety in daily life.',
    category: 'therapy',
    imageUrl: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Mindful Movement Guide',
    description: 'Simple exercises to incorporate mindfulness into physical activity.',
    category: 'exercise',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 bg-cover bg-center h-screen w-full">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <MoodTracker />
            </div>
            <div className="space-y-6">
              <DailyInsights />
            </div>
          </div>
          <RecommendedResources resources={resources} />
        </motion.div>
      </main>
    </div>
  );
}

export default App;