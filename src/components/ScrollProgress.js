// src/components/ScrollProgress.js
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import '../styles/ScrollProgress.css';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: 'left',
      }}
    />
  );
}

export default ScrollProgress;
