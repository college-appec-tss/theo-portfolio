import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { useToast } from './ToastContext';

export function Toast() {
  const { toast, hideToast } = useToast();

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[90] glass-dark rounded-xl px-6 py-4 flex items-center gap-3 shadow-xl"
        >
          <CheckCircle className="text-[#22C55E] w-6 h-6" />
          <span className="text-white font-medium">{toast.message}</span>
          <button
            onClick={hideToast}
            className="ml-2 text-white/60 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
