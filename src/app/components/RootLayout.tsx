import { useState } from 'react';
import { Outlet } from 'react-router';
import LoadingScreen from './LoadingScreen';
import ModernHeader from './ModernHeader';
import FloatingMessageButton from './FloatingMessageButton';
import { ThemeProvider } from './ThemeContext';
import { ToastProvider } from './ToastContext';
import Footer from './Footer';
import InternetStatus from './InternetStatus';
import { Toast } from './Toast';
import YouTubePopup from './YouTubePopup';

export function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <ToastProvider>
        <InternetStatus />
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        
        {!isLoading && (
          <div className="min-h-screen flex flex-col">
            <ModernHeader />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
            <FloatingMessageButton />
          </div>
        )}
        <Toast />
        <YouTubePopup />
      </ToastProvider>
    </ThemeProvider>
  );
}
