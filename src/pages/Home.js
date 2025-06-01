// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import movieImg from '../assets/movie-booking.jpg';
import smsImg from '../assets/sms.png';
import fileShareImg from '../assets/file-sharing.png';
import backpackerImg from '../assets/backpacker.png';

const projects = [
  {
    title: 'Movie Booking System',
    description: 'A real-time system for booking movie tickets with admin dashboard, seat selection, and payment method using Django and React.',
    image: movieImg,
    technologies: ['Django', 'ReactJS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Student Management System',
    description: 'A Django-based system with Admin and Student panels to manage students, teachers, and public notices.',
    image: smsImg,
    technologies: ['Django', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'File Sharing Website',
    description: 'A website like MediaShare built in Django for uploading and sharing files securely.',
    image: fileShareImg,
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'The Backpacker',
    description: 'A PHP-based hotel room booking system with features like availability checking, signup/login, and booking.',
    image: backpackerImg,
    technologies: ['PHP', 'SQL', 'HTML', 'CSS'],
  },
  
];

function Home() {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Intro Section */}
      <section className="intro-section">
        <h1>Hello, I'm <span className="highlight">Madhuban Khatri</span> 👋</h1>
        <p>
          A Full Stack Developer with 2 year of experience in building responsive, real-world applications using <strong>Django, ReactJs</strong>. I enjoy crafting clean UI and solving real-world problems through code.
        </p>
      </section>

    {/* Experience Section */}
    <section className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>

      <div className="experience-content">
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Full Stack Developer</h3>
          <p><strong>Company:</strong> ReliableSoft PVT. LTD.</p>
          <p><strong>Duration:</strong> 2 year</p>
          <p>
            Worked on real-time customer and billing systems, integrated payment filters, notifications, SMS/WhatsApp modules,
            and contributed to admin dashboards using ASP.NET (C#), SQL Server, and Micro Service.
          </p>
        </motion.div>
      </div>
    </section>


      {/* Projects Section */}
      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card full-width"
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="project-content">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="tech-labels">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    </motion.div>
  );
}

export default Home;
