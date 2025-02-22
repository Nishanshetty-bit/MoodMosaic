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
        user: {
          name: 'John Doe',
        },
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
                user: {
                  name: 'Jane Doe',
                },
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Community</h1>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className=" flex items-start space-x-3">
          <i className=" mt-2 fa-solid fa-user text-2xl text-gray-600"></i> {/* Font Awesome user icon */}
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </form>
      <div>
        {messages.map((message) => (
          <div key={message.id} className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-user text-2xl text-gray-600"></i> {/* Font Awesome user icon */}
              <div>
                <p className="font-semibold text-gray-800">{message.user.name}</p>
                <p className="text-gray-800">{message.text}</p>
                <p className="text-sm text-gray-500 mt-1">{message.timestamp}</p>
              </div>
            </div>
            <div className="mt-4">
              {message.replies.map((reply) => (
                <div key={reply.id} className="ml-6 p-2 border-l-2 border-gray-200">
                  <div className="flex items-start space-x-3">
                    <i className="fa-solid fa-user text-xl text-gray-600"></i> {/* Font Awesome user icon */}
                    <div>
                      <p className="font-semibold text-gray-800">{reply.user.name}</p>
                      <p className="text-gray-700">{reply.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{reply.timestamp}</p>
                    </div>
                  </div>
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
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-user text-xl text-gray-600"></i> {/* Font Awesome user icon */}
                  <input
                    name="reply"
                    placeholder="Reply..."
                    className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
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