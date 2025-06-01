import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      {/* LEFT: Introduction */}
      <motion.div
        className="about-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm Madhuban Khatri, a Full Stack Developer with 2 year of experience. I’ve worked with various technologies
          including Django, React, PHP, ASP.NET, and SQL Server. I’ve built projects like Movie Booking System, Student
          Management System, and File Sharing Web App. I'm passionate about building clean, efficient, and user-friendly web
          applications and love sharing my knowledge on DEV community.
        </p>
        <p>
          I’m currently working in a ReliableSoft PVT. LTD. that develops software for cable operators to manage customers, plans, and
          generate bills. My goal is to keep improving my backend skills.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="education-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor of Science(Maths stream)</h3>
          <p>Jai Narayan Vyas University</p>
          <p>2018 - 2021</p>
        </div>
      </motion.div>

      {/* RIGHT: Skills */}
      <motion.div
        className="about-right"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <ul className="skills-grid">
          {[
            'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Django',
            'Python', 'PHP', 'SQL', 'ASP.NET', 'C#',
            'Bootstrap', 'Framer Motion', 'JWT', 'Git', 'VS Code'
          ].map((skill, index) => (
            <li key={index} className="skill-badge">{skill}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
