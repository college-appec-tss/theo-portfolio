import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, X, Bell } from 'lucide-react';
import { useToast } from './ToastContext';

const YOUTUBE_CHANNEL_ID = 'UCyFGuB1_HRjofHu0pErktkw';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@DushTheo-q1s';

export function YouTubePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Check if popup has already been shown in this session
    const alreadyShown = sessionStorage.getItem('youtube_popup_shown');
    if (alreadyShown) {
      return;
    }

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasShown(true);
      sessionStorage.setItem('youtube_popup_shown', 'true');
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    // Open YouTube channel in new tab
    window.open(YOUTUBE_CHANNEL_URL, '_blank');
    
    // Show thank you message
    showToast('Thanks for subscribing! 🎉');
    
    // Close popup
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-8 right-8 z-[90] max-w-sm"
        >
          <div className="glass-dark rounded-2xl p-6 shadow-2xl border border-[#FF0000]/30">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* YouTube Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center">
                <Youtube className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Subscribe to My Channel!</h3>
                <p className="text-white/60 text-sm">@DushTheo</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-white/80 text-sm mb-4">
              I've been creating content about web development and programming. 
              Subscribe to get notified about new videos!
            </p>

            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              className="w-full py-3 px-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Bell size={18} />
              Subscribe on YouTube
            </button>

            {/* Maybe Later */}
            <button
              onClick={handleClose}
              className="w-full mt-2 py-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              Maybe later
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default YouTubePopup;
