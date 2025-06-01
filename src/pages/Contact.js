import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDev } from 'react-icons/fa';

const contacts = [
  {
    title: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/MadhubanKhatri',
    display: 'github.com/MadhubanKhatri',
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/madhuban-khatri/',
    display: 'linkedin.com/in/madhuban-khatri/',
  },
  {
    title: 'Email',
    icon: <FaEnvelope />,
    link: 'mailto:madhuban211998@gmail.com',
    display: 'madhuban211998@gmail.com',
  },
  {
    title: 'DEV',
    icon: <FaDev />,
    link: 'https://dev.to/madhubankhatri',
    display: 'dev.to/madhubankhatri',
  },
  {
    title: 'Phone',
    icon: <FaPhone />,
    link: 'tel:+917568170690',
    display: '+91 7568 170 690',
  },
];

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>Connect with me</h2>
        <p className="subtitle">You can also reach out to me directly through these channels</p>
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="icon-wrapper">{c.icon}</div>
            <div className="contact-info">
              <h4>{c.title}</h4>
              <p>{c.display}</p>
            </div>
          </motion.a>
        ))}

        <div className="location">
          <h4>Current Location</h4>
          <p>Jodhpur, India</p>
        </div>
      </motion.div>
    </div>
  );
}
