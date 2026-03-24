import { useState } from 'react';
import { Outlet } from 'react-router';
import LoadingScreen from './LoadingScreen';
import ModernHeader from './ModernHeader';
import FloatingMessageButton from './FloatingMessageButton';

export function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen">
          <ModernHeader />
          <main>
            <Outlet />
          </main>
          <FloatingMessageButton />
        </div>
      )}
    </>
  );
}
