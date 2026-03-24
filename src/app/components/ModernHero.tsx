import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
}

export default function ModernHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const mousePos = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = [];
      const numStars = 200;
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.5 + 0.5,
        });
      }
      starsRef.current = stars;
    };
    initStars();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Theme-aware background colors
      const isDark = theme === 'dark';
      const bgColor = isDark ? 'rgba(15, 23, 42, 0.3)' : 'rgba(248, 249, 250, 0.3)';
      const starColor = isDark ? '255, 255, 255' : '15, 23, 42';
      const glowColor = isDark ? '34, 197, 94' : '30, 64, 175';
      
      // Clear canvas with fade effect for trails
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Mouse influence
      const mouseX = (mousePos.current.x - centerX) * 0.5;
      const mouseY = (mousePos.current.y - centerY) * 0.5;

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Update star position (rotation + mouse influence)
        star.z -= 2;
        
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        // Calculate 3D to 2D projection
        const fov = canvas.width / 2;
        const scale = fov / (fov + star.z);
        const x2d = star.x * scale + centerX + mouseX * (1 - scale);
        const y2d = star.y * scale + centerY + mouseY * (1 - scale);

        // Skip if outside canvas
        if (x2d < 0 || x2d > canvas.width || y2d < 0 || y2d > canvas.height) return;

        // Calculate brightness based on depth and mouse proximity
        const mouseDist = Math.sqrt(
          Math.pow(mousePos.current.x - x2d, 2) + 
          Math.pow(mousePos.current.y - y2d, 2)
        );
        const mouseGlow = Math.max(0, 1 - mouseDist / 200);
        
        // Adjust brightness for light mode (dimmer)
        const baseBrightness = isDark ? star.brightness : star.brightness * 0.4;
        const finalBrightness = baseBrightness * scale + mouseGlow * (isDark ? 0.3 : 0.15);

        // Draw star glow
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, star.size * 3 * scale);
        gradient.addColorStop(0, `rgba(${starColor}, ${finalBrightness})`);
        gradient.addColorStop(0.3, `rgba(${glowColor}, ${finalBrightness * 0.5})`);
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, star.size * 3 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Draw star core
        ctx.fillStyle = `rgba(${starColor}, ${finalBrightness})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, star.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Get theme-aware background
  const canvasBg = mounted && theme === 'dark' 
    ? 'linear-gradient(to bottom, #0F172A, #1E293B)'
    : 'linear-gradient(to bottom, #F8F9FA, #E9ECEF)';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Star Field Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: canvasBg }}
      />

      {/* Subtle mesh overlay */}
      <div className={`absolute inset-0 z-10 neon-mesh-bg ${theme === 'light' ? 'opacity-30' : 'opacity-50'}`}></div>

      {/* Floating Gradient Shapes for atmosphere */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ background: theme === 'dark' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(30, 64, 175, 0.08)' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: theme === 'dark' ? 'rgba(34, 197, 94, 0.08)' : 'rgba(30, 64, 175, 0.05)' }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="animate__animated animate__rubberBand">
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="neon-text-subtle">Theo Dev</span> 👋
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Developer | Building Modern Web Experiences
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16a34a] text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
            >
              View Projects
            </motion.div>
            <Link to="/about">
              <motion.div
                className="px-8 py-4 rounded-full glass-dark text-white font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover My Story
              </motion.div>
            </Link>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-dark text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
