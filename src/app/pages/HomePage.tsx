import ModernHero from '../components/ModernHero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <div>
      <ModernHero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default HomePage;
