import React from 'react';

const TronNavbar = () => {
  return (
    <nav className="navbar">
      <div className="console-line"></div>
      <div className="logo">SYSTEM_UI</div>
      <button 
        className="menu-toggle navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      </button>
      <div className="nav-links collapse navbar-collapse" id="navbarNav">
        <a href="#" className="nav-item active">MAIN</a>
        <a href="#" className="nav-item">GRID</a>
        <a href="#" className="nav-item">NET</a>
        <a href="#" className="nav-item">CMD</a>
      </div>
    </nav>
  );
};

export default TronNavbar;
