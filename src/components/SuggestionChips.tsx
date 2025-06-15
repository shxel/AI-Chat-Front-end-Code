import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Code, 
  PenTool, 
  BookOpen, 
  Zap, 
  Palette,
  Calculator,
  Music,
  Sparkles
} from 'lucide-react';

interface Suggestion {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  text: string;
  color: 'cyan' | 'magenta' | 'lime' | 'fire';
  description: string;
}

const suggestions: Suggestion[] = [
  { id: '1', icon: Lightbulb, text: 'Creative Ideas', color: 'lime', description: 'Brainstorm innovative solutions' },
  { id: '2', icon: Code, text: 'Code Review', color: 'cyan', description: 'Analyze and improve code' },
  { id: '3', icon: PenTool, text: 'Writing Help', color: 'magenta', description: 'Enhance your writing' },
  { id: '4', icon: BookOpen, text: 'Research', color: 'fire', description: 'Deep dive into topics' },
  { id: '5', icon: Zap, text: 'Quick Questions', color: 'cyan', description: 'Get instant answers' },
  { id: '6', icon: Palette, text: 'Design Ideas', color: 'magenta', description: 'Creative design concepts' },
  { id: '7', icon: Calculator, text: 'Math Problems', color: 'lime', description: 'Solve complex equations' },
  { id: '8', icon: Music, text: 'Music Theory', color: 'fire', description: 'Learn musical concepts' },
];

const colorClasses = {
  cyan: {
    bg: 'from-accent-cyan/20 to-accent-cyan/10',
    hover: 'hover:from-accent-cyan/30 hover:to-accent-cyan/20',
    text: 'text-accent-cyan',
    shadow: 'hover:shadow-glow-cyan',
    border: 'border-accent-cyan/20 hover:border-accent-cyan/40',
  },
  magenta: {
    bg: 'from-accent-magenta/20 to-accent-magenta/10',
    hover: 'hover:from-accent-magenta/30 hover:to-accent-magenta/20',
    text: 'text-accent-magenta',
    shadow: 'hover:shadow-glow-magenta',
    border: 'border-accent-magenta/20 hover:border-accent-magenta/40',
  },
  lime: {
    bg: 'from-accent-lime/20 to-accent-lime/10',
    hover: 'hover:from-accent-lime/30 hover:to-accent-lime/20',
    text: 'text-accent-lime',
    shadow: 'hover:shadow-glow-lime',
    border: 'border-accent-lime/20 hover:border-accent-lime/40',
  },
  fire: {
    bg: 'from-accent-fire/20 to-accent-fire/10',
    hover: 'hover:from-accent-fire/30 hover:to-accent-fire/20',
    text: 'text-accent-fire',
    shadow: 'hover:shadow-glow-fire',
    border: 'border-accent-fire/20 hover:border-accent-fire/40',
  },
};

const SuggestionChips: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-4xl mx-auto px-4 mt-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          const colors = colorClasses[suggestion.color];
          
          return (
            <motion.button
              key={suggestion.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative bg-gradient-to-br ${colors.bg} ${colors.hover} ${colors.shadow} ${colors.border}
                border rounded-2xl p-5 md:p-6
                transition-all duration-300 ease-out
                group focus:outline-none focus:ring-2 focus:ring-white/20
                backdrop-blur-sm overflow-hidden
              `}
            >
              {/* Animated background effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Sparkles size={12} className={colors.text} />
              </motion.div>

              <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
                <motion.div 
                  className={`${colors.text} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={28} />
                </motion.div>
                
                <div className="text-center">
                  <motion.span 
                    className="text-white text-sm md:text-base font-semibold leading-tight block mb-1"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    {suggestion.text}
                  </motion.span>
                  
                  <motion.span 
                    className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {suggestion.description}
                  </motion.span>
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SuggestionChips;