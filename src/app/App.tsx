import { useState } from 'react';
import { Outlet } from 'react-router';
import LoadingScreen from './components/LoadingScreen';
import ModernHeader from './components/ModernHeader';
import FloatingMessageButton from './components/FloatingMessageButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen">
          <ModernHeader />
          <main className="pt-20">
            <Outlet />
          </main>
          <FloatingMessageButton />
        </div>
      )}
    </>
  );
}
