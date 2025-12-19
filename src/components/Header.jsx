import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1></h1>
        <nav className="header-nav">
          <a href="#home">Home</a>
          
          <a href="#tour">Tour</a>
          <a href="#about">About</a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
