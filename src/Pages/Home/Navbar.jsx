import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar container">
      <div className="left">
        <h3 id="heading">Chaitanya Karthik</h3>
      </div>
      <div className="right">
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#heroSection" className="text-lg">Home</a>
          <a href="#AboutMe" className="text-lg">About Me</a>
          <a href="#portfolio" className="text-lg">Portfolio</a>
          <a href="#testimonial" className="text-lg">Testimonials</a>
          <a href="#contact" className="btn ">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
