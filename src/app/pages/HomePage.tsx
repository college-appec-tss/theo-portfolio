import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export function HomePage() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/theoneste', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/theoneste-dushimirimana', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/theoneste_dev', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/theoneste_dushimirimana', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@theoneste_dev', label: 'YouTube' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-foreground"
            >
              Theoneste Dushimirimana
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Software Development Student
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Crafting innovative solutions through code
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/about"
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Discover My Story
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/projects"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-8"
          >
            <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-secondary text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="pt-12"
          >
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-2 mx-auto w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
