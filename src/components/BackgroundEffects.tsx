import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs with enhanced movement */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-cyan/15 to-accent-magenta/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-lime/12 to-accent-fire/8 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 100, -60, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-accent-magenta/10 to-accent-cyan/8 rounded-full blur-3xl"
      />

      {/* Additional floating particles */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 75, 0],
          opacity: [0.3, 0.8, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 right-1/3 w-32 h-32 bg-accent-lime/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 100, -50, 0],
          opacity: [0.4, 0.7, 0.3, 0.4],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/6 right-1/2 w-24 h-24 bg-accent-fire/25 rounded-full blur-xl"
      />

      {/* Enhanced grid pattern with animation */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(244, 114, 182, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 114, 182, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
          backgroundPosition: '0 0, 0 0, 30px 30px, 30px 30px'
        }} />
      </motion.div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-primary/20" />
    </div>
  );
};

export default BackgroundEffects;