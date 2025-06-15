import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-8 md:py-12 relative"
    >
      {/* Glowing background effect for title */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-accent-cyan/20 via-accent-magenta/20 to-accent-lime/20 bg-clip-text blur-xl">
          Shxel
        </div>
      </motion.div>

      <motion.h1 
        className="relative text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-wider cursor-default select-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        onMouseEnter={(e) => {
          const letters = e.currentTarget.textContent?.split('') || [];
          e.currentTarget.innerHTML = letters.map((letter, index) => 
            `<span class="inline-block hover-letter" style="animation-delay: ${index * 0.1}s">${letter}</span>`
          ).join('');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.innerHTML = 'Shxel';
        }}
      >
        Shxel
      </motion.h1>

      <motion.div 
        className="relative w-32 h-1 bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-lime rounded-full mx-auto mt-6 overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 128, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: [-100, 200],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Subtitle with typewriter effect */}
      <motion.p
        className="mt-4 text-gray-400 text-lg md:text-xl font-light tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Your AI Companion
      </motion.p>
    </motion.header>
  );
};

export default Header;