import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

export function InternetStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    // Check initial status
    const initialOnline = navigator.onLine;
    setIsOnline(initialOnline);
    
    // If initially offline, show the banner
    if (!initialOnline) {
      setWasOffline(true);
      setShowStatus(true);
    }
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Only show "Internet is on" if user was previously offline
      if (wasOffline) {
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
      }
      setWasOffline(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
      setShowStatus(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [wasOffline]);

  return (
    <AnimatePresence>
      {showStatus && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-2 py-2 text-sm font-medium ${
            isOnline 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
        >
          {isOnline ? (
            <>
              <RefreshCw size={16} className="animate-spin-slow" />
              <span>Internet is back on</span>
            </>
          ) : (
            <>
              <WifiOff size={16} />
              <span>Internet is off</span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InternetStatus;
