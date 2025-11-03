import React from 'react';
// A simple component to display a default image with animated text when the actual image is not available

const DefaultImage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    padding: '20px'
  };

  const textStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    // animation: 'bounce 2s infinite, colorChange 3s infinite',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  };

  // Keyframes for animations can be defined in a separate CSS file or within a style tag
  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes colorChange {
            0% { color: #ffffff; }
            50% { color: #ffeb3b; }
            100% { color: #ffffff; }
          }
        `}
      </style>
      <div style={textStyle}>
        News Anish
        <footer style={{ fontSize: '1rem', marginTop: '20px', textAlign: 'center' }}>Image Not Available</footer>
      </div>
    </div>
  );
};

export default DefaultImage;