import React from 'react';
import Map from '../components/Map';
import EmergencyCall from '../components/EmergencyCall';
import AIConversation from '../components/AIConversation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
const Home: React.FC = () => {
  return (
    <>
     <Navbar/>
    <div className="container mx-auto px-4 py-8 space-y-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold">Welcome to Gaia</h2>
        <p className="text-gray-600">
          Your safety companion in moments of vulnerability.
        </p>
      </section>
      <Map />
      <AIConversation />
      <EmergencyCall />
<Footer/>
    </div>
    </>
   
  );
};

export default Home;
