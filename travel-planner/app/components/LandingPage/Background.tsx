import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
    <video 
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        >
        <source 
          src="videos/background.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  );
};

export default Background;