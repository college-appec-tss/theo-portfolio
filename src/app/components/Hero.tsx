import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Theoneste Dushimirimana</span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate Software Development student at College APPEC, dedicated to creating innovative solutions and building impactful digital experiences.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={() => window.open('#projects', '_self')}
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Projects
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:theoeneste7dushimirinmana@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
