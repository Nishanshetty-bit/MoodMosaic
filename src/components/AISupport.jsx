import React, { useState } from 'react';
import axios from 'axios';

const AISupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/gemini', {
        prompt: input,
      });

      const aiMessage = {
        text: response.data.response || 'No response received.',
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Failed to get AI response. Please try again.', sender: 'ai' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">AI Support</h1>
      <p>Get AI-powered support and guidance.</p>

      <div className="mt-4 border rounded-lg p-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-100 ml-auto w-3/4'
                : 'bg-gray-100 mr-auto w-3/4'
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        {isLoading && <p className="text-gray-500">AI is typing...</p>}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your question..."
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AISupport;
