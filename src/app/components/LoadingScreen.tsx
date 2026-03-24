import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showReady, setShowReady] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowReady(true);
    }, 3000);

    const readyTimer = setTimeout(() => {
      setShowReady(false);
      onLoadingComplete();
    }, 4000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(readyTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {(isLoading || showReady) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0f4c81]"
        >
          <div className="relative flex flex-col items-center">
            {isLoading ? (
              <>
                {/* Running Person Animation */}
                <div className="relative w-64 h-64 mb-8">
                  {/* Road */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
                  
                  {/* Animated Road Lines */}
                  <motion.div
                    className="absolute bottom-1 left-0 right-0 flex justify-around"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-1 bg-white opacity-50" />
                    ))}
                  </motion.div>

                  {/* Running Person */}
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Head */}
                      <circle cx="50" cy="25" r="12" fill="#22C55E" />
                      
                      {/* Body */}
                      <motion.line
                        x1="50"
                        y1="37"
                        x2="50"
                        y2="60"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      
                      {/* Arms */}
                      <motion.line
                        x1="50"
                        y1="45"
                        x2="35"
                        y2="50"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                        animate={{ rotate: [0, -20, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      <motion.line
                        x1="50"
                        y1="45"
                        x2="65"
                        y2="40"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      
                      {/* Legs */}
                      <motion.line
                        x1="50"
                        y1="60"
                        x2="40"
                        y2="80"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      <motion.line
                        x1="50"
                        y1="60"
                        x2="60"
                        y2="80"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                        animate={{ rotate: [0, -15, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Loading Text */}
                <motion.div
                  className="text-white text-2xl font-bold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading...
                </motion.div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#22C55E] to-[#ff6b35]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl mb-4">🚀</div>
                <div className="text-white text-3xl font-bold">
                  Your Page is Ready!
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
