import { createContext, useContext, useState, ReactNode } from 'react';

interface ToastState {
  message: string;
  visible: boolean;
}

interface ToastContextType {
  toast: ToastState;
  showToast: (message: string) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    visible: false
  });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 6000);
  };

  const hideToast = () => {
    setToast({ message: '', visible: false });
  };

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
