import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

import movieImg from '../assets/movie-booking.jpg';
import studentImg from '../assets/sms.png';
import fileImg from '../assets/file-sharing.png';
import backpackerImg from '../assets/backpacker.png';
import videoStreamImg from '../assets/video-stream.png';
import weatherImg from '../assets/weather.png';

const projects = [
  {
    title: 'Movie Booking System',
    image: movieImg,
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'API calling'],
    features: [
      'Register, Login & Logout',
      'Real-time seat booking',
      'Admin dashboard for movie/show management',
      'Razorpay payment integration payment',
    ],
    github: 'https://github.com/MadhubanKhatri/movie-booking-system-django',
  },
  {
    title: 'Video Streaming Website',
    image: videoStreamImg,
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript','AJAX','Bootstrap'],
    features: [
      'Upload videos, its title, description, and thumbnail',
      'Search videos by title or description',
      'Watch videos, like, comment and subscribe to channels',
      'User settings for profile management',
    ],
    github: 'https://github.com/MadhubanKhatri/online-video-sharing-website',
  },
  {
    title: 'Student Management System',
    image: studentImg,
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript','Bootstrap'],
    features: [
      'Admin and Student panels',
      'Teacher management and notice board',
      'Add students and teachers',
      'Login/logout for both roles',
    ],
    github: 'https://github.com/MadhubanKhatri/student-management-system',
  },
  {
    title: 'File Sharing Website',
    image: fileImg,
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Secure file upload and share',
      'User authentication',
      'Rich user interface',
    ],
    github: 'https://github.com/MadhubanKhatri/file-share-webiste-django',
  },
  {
    title: 'The Backpacker (Hotel Booking)',
    image: backpackerImg,
    technologies: ['PHP', 'SQL', 'HTML', 'CSS'],
    features: [
      'Room availability checking',
      'Booking form and validation',
      'Admin section for bookings',
    ],
    github: 'https://github.com/MadhubanKhatri/the-backpacker',
  },
  {
    title: 'Weather App',
    image: weatherImg,
    technologies: ['ReactJs', 'Material UI', 'API'],
    features: [
      'Material UI for responsive design',
      'Fetch weather data from OpenWeatherMap API',
      'Search by city name',
      'Display current weather and forecast',
    ],
    github: 'https://github.com/MadhubanKhatri/weather-react-app',
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
    scale: 1.03,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 300 },
  }}
          >
            <img src={project.image} alt={project.title} className="project-image" />

            {/* Tech labels */}
            <div className="tech-labels">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <h3 className="project-title">{project.title}</h3>
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

              {/* Animated GitHub Link */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaGithub className="github-icon" />
                View Code
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
