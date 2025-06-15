import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ChatInput from './components/ChatInput';
import SuggestionChips from './components/SuggestionChips';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <BackgroundEffects />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col justify-center py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Header />
            
            <div className="mt-8 md:mt-16 space-y-8">
              <ChatInput />
              <SuggestionChips />
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="py-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            Powered by advanced AI • Built with ❤️
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;