import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Paperclip, Globe, ChevronDown, Send, Sparkles } from 'lucide-react';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('GPT-4');
  const [isFocused, setIsFocused] = useState(false);

  const models = [
    { name: 'GPT-4', color: 'from-accent-cyan to-accent-magenta' },
    { name: 'Claude', color: 'from-accent-magenta to-accent-fire' },
    { name: 'Gemini', color: 'from-accent-lime to-accent-cyan' },
    { name: 'Llama', color: 'from-accent-fire to-accent-lime' }
  ];

  const selectedModelData = models.find(m => m.name === selectedModel) || models[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-4xl mx-auto px-4 relative"
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 via-accent-magenta/5 to-accent-lime/5 rounded-2xl blur-xl"
        animate={{
          opacity: isFocused ? 0.8 : 0.3,
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div 
        className="relative bg-dark-secondary/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-dark-tertiary/50 overflow-hidden"
        whileHover={{
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 via-accent-magenta/20 to-accent-lime/20 rounded-2xl"
          animate={{
            opacity: isFocused ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-[1px] bg-dark-secondary/90 backdrop-blur-xl rounded-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            {/* Enhanced Attachment Button */}
            <motion.button
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(34, 211, 238, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 text-gray-400 hover:text-accent-cyan transition-all duration-300 rounded-xl hover:bg-accent-cyan/10 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Paperclip size={20} className="relative z-10" />
            </motion.button>

            {/* Enhanced Globe Button */}
            <motion.button
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(244, 114, 182, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 text-gray-400 hover:text-accent-magenta transition-all duration-300 rounded-xl hover:bg-accent-magenta/10 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-magenta/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Globe size={20} className="relative z-10" />
            </motion.button>

            {/* Enhanced Model Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModelOpen(!isModelOpen)}
                className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${selectedModelData.color} bg-opacity-20 text-white rounded-xl hover:bg-opacity-30 transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Sparkles size={16} className="text-white/80 relative z-10" />
                <span className="text-sm font-semibold relative z-10">{selectedModel}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 relative z-10 ${isModelOpen ? 'rotate-180' : ''}`} 
                />
              </motion.button>

              {/* Enhanced Dropdown */}
              {isModelOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-2 bg-dark-secondary/95 backdrop-blur-xl border border-dark-tertiary/50 rounded-xl shadow-2xl z-20 min-w-[160px] overflow-hidden"
                >
                  {models.map((model, index) => (
                    <motion.button
                      key={model.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setSelectedModel(model.name);
                        setIsModelOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-white hover:bg-gradient-to-r ${model.color} hover:bg-opacity-20 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden`}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-10`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <Sparkles size={14} className="text-white/60 relative z-10" />
                      <span className="relative z-10">{model.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Enhanced Input Area */}
          <div className="flex items-end gap-4">
            <div className="flex-1 relative">
              <motion.textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Message AI..."
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none text-lg leading-relaxed min-h-[60px] max-h-[200px] relative z-10"
                rows={1}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
              
              {/* Animated cursor line when focused */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta"
                initial={{ width: 0 }}
                animate={{ width: isFocused ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.button
              whileHover={{ 
                scale: message.trim() ? 1.1 : 1,
                boxShadow: message.trim() ? "0 0 20px rgba(34, 211, 238, 0.4)" : "none"
              }}
              whileTap={{ scale: 0.95 }}
              disabled={!message.trim()}
              className={`p-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                message.trim() 
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white shadow-lg hover:shadow-xl' 
                  : 'bg-dark-tertiary/50 text-gray-500 cursor-not-allowed'
              }`}
            >
              {message.trim() && (
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <Send size={20} className="relative z-10" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatInput;