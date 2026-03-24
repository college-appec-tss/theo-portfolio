import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function InstagramMessageButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://instagram.com/theoneste_dushimirimana"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-3 px-5 py-3">
        <Instagram size={24} />
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden whitespace-nowrap font-medium"
        >
          Message Theo
        </motion.span>
      </div>
    </motion.a>
  );
}
