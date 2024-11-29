import React from 'react';

const AIConversation: React.FC = () => {
  return (
    <div className="bg-blue-100 rounded-md shadow-md p-4">
      <h3 className="text-xl font-bold text-blue-600 mb-2">AI Companion</h3>
      <p className="text-gray-600">
        Simulate a conversation with an AI to feel accompanied and safe.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
        Start AI Chat
      </button>
    </div>
  );
};

export default AIConversation;
