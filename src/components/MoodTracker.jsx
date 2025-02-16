import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Smile, Frown, Meh } from 'lucide-react';

const MoodTracker = () => {
  const [moodEntries, setMoodEntries] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const addMoodEntry = (mood) => {
    const newEntry = {
      date: new Date(),
      mood,
      notes: currentNote,
    };
    setMoodEntries([...moodEntries, newEntry]);
    setCurrentNote('');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Mood Tracker</h2>
      
      <div className="mb-6">
        <div className="flex justify-center space-x-8 mb-4">
          <button
            onClick={() => addMoodEntry(1)}
            className="p-4 hover:bg-blue-50 rounded-full transition-colors"
          >
            <Frown className="w-8 h-8 text-blue-500" />
          </button>
          <button
            onClick={() => addMoodEntry(2)}
            className="p-4 hover:bg-blue-50 rounded-full transition-colors"
          >
            <Meh className="w-8 h-8 text-blue-500" />
          </button>
          <button
            onClick={() => addMoodEntry(3)}
            className="p-4 hover:bg-blue-50 rounded-full transition-colors"
          >
            <Smile className="w-8 h-8 text-blue-500" />
          </button>
        </div>
        
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="How are you feeling today? (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moodEntries}>
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis domain={[0, 3]} />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#3B82F6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodTracker;