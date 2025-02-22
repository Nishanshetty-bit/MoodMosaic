import React, { useState } from 'react';

const Community = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        replies: [],
        timestamp: new Date().toLocaleString(),
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  const handleReply = (messageId, replyText) => {
    if (replyText.trim()) {
      const updatedMessages = messages.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            replies: [
              ...message.replies,
              {
                id: message.replies.length + 1,
                text: replyText,
                timestamp: new Date().toLocaleString(),
              },
            ],
          };
        }
        return message;
      });
      setMessages(updatedMessages);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </form>
      <div>
        {messages.map((message) => (
          <div key={message.id} className="mb-6 p-4 border border-gray-200 rounded-lg">
            <p className="text-gray-800">{message.text}</p>
            <p className="text-sm text-gray-500 mt-1">{message.timestamp}</p>
            <div className="mt-4">
              {message.replies.map((reply) => (
                <div key={reply.id} className="ml-6 p-2 border-l-2 border-gray-200">
                  <p className="text-gray-700">{reply.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{reply.timestamp}</p>
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const replyText = e.target.reply.value;
                  handleReply(message.id, replyText);
                  e.target.reset();
                }}
                className="mt-2"
              >
                <input
                  name="reply"
                  placeholder="Reply..."
                  className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="mt-1 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                >
                  Reply
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;