// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' }
];

function Navbar() {
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

        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to={item.to}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
