import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4">
      <h3 className="text-xl font-bold mb-2">Dangerous Areas Map</h3>
      <p className="text-gray-600">
        This map displays the most dangerous areas based on real-time emergency data.
      </p>
      <div className="h-64 bg-gray-300 rounded">


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52919556.130216956!2d-161.85628198928978!3d35.948110453402755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1732879299176!5m2!1sen!2s" width={1200} height={260} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
    </div>
  );
};

export default Map;
