import React from 'react';
import { motion } from 'framer-motion';

export function BrandLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-6 z-50"
    >
      <h1 
        className="text-xl sm:text-2xl font-bold text-purple-400"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          textShadow: `
            0 0 20px rgba(168,85,247,0.5),
            0 0 40px rgba(168,85,247,0.3)
          `
        }}
      >
        TimeMachine
      </h1>
    </motion.div>
  );
}