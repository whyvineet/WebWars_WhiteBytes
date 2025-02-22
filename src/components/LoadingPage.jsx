import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center z-50">
      {/* Logo Animation */}
      <div className="relative mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <img 
            src="./assets/logos/gulogo.png" 
            alt="Galgotias University Logo" 
            className="h-16 w-auto" 
          />
          <div className="h-12 w-px bg-gray-400/30"></div>
          <img 
            src="./assets/logos/iccsai_logo.jpeg" 
            alt="ICCSAI Logo" 
            className="h-20 w-auto" 
          />
        </motion.div>
        
        {/* Animated ring */}
        <motion.div
          className="absolute -inset-4 border-2 border-blue-500/20 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        ICCSAI 2025
      </motion.h2>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading dots */}
      <div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-blue-500"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Loading message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-gray-400 text-sm"
      >
        Preparing your conference experience...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
