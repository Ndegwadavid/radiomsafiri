import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
  ];

  // Load Voiceflow script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67b4eb18ab4534bbe160925a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up Voiceflow widget if needed
      if (window.voiceflow?.chat) {
        window.voiceflow.chat.destroy();
      }
    };
  }, []);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <header
      className="relative bg-cover bg-center h-screen transition-all duration-1000"
      style={{ backgroundImage: `url('${backgroundImages[currentImage]}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="container mx-auto text-center text-white relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-extrabold mb-4 pt-32 animate-fadeIn tracking-wide">
          Welcome to <span className="text-gold-500 animate-pulse">Radio Msafiri</span>
        </h1>
        <p className="text-lg mb-6 animate-fadeIn text-gray-300">
          Depopulating Earth to Populate Heaven
        </p>
        <p className="text-xl font-semibold mb-4 animate-fadeIn text-gray-200">
          Press the <span className="text-red-400">Live Icon</span> for Live Broadcast
        </p>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;