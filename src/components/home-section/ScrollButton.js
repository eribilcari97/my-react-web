import React from 'react';

const ScrollButton = () => {
  // Function to scroll to the target section smoothly
  const scrollToSection = () => {
    const section = document.getElementById('about');  // Reference to the section with ID 'about'
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Button that triggers the scroll */}
      <button className="cyber-btn" onClick={scrollToSection}>
        <span>ACTIVATE PROTOCOL</span>
      </button>

     
    </div>
  );
};

export default ScrollButton;

