import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { InstagramMessageButton } from './InstagramMessageButton';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <InstagramMessageButton />
    </div>
  );
}
