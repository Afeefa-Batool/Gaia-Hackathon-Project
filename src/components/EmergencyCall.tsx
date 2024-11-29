import React from 'react';

const EmergencyCall: React.FC = () => {
  const handleEmergencyCall = () => {
    alert('Calling emergency services...');
  };

  return (
    <div className="bg-red-100 rounded-md shadow-md p-4 text-center">
      <h3 className="text-xl font-bold text-red-600 mb-2">Emergency Call</h3>
      <p className="text-gray-600">
        Connect with emergency services instantly during a critical situation.
      </p>
      <button
        onClick={handleEmergencyCall}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
      >
        Call Now
      </button>
    </div>
  );
};

export default EmergencyCall;
