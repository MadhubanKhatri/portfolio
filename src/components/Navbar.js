// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' }
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    // Replace 'resume.pdf' with your actual resume file name
    const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
    window.open(resumeUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, duration: 0.8 }}
    >
      <div className="navbar-content">
        <motion.div className="logo" whileHover={{ scale: 1.1 }}>
          Madhuban Khatri
        </motion.div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to={item.to} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link>
            </motion.li>
          ))}
          
          <motion.div
          className="resume-container mobile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button onClick={handleDownload} className="resume-btn">
            Download Resume
          </button>
        </motion.div>
        </ul>

        {/* Resume button outside nav links for desktop */}
        <motion.div
          className="resume-container desktop"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button onClick={handleDownload} className="resume-btn">
            Download Resume
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
