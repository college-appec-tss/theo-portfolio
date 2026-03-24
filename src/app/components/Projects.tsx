import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';
import portfolioData from '../../data/portfolio.json';

export function Projects() {
  const projects = portfolioData.projects;
  const featuredProjects = projects.filter(p => p.featured);
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Some of the projects I've worked on
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={idx * 100}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-dark rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2035] to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#22C55E]/20 text-[#22C55E] rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && projects.length > featuredProjects.length && (
          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 rounded-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold flex items-center gap-2 mx-auto transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More Projects
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </FadeIn>
        )}

        {/* Show Less Button */}
        {showAll && (
          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setShowAll(false)}
                className="px-8 py-3 rounded-full glass-dark hover:bg-white/20 text-white font-semibold flex items-center gap-2 mx-auto transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Less
                <ArrowRight size={18} className="transform rotate-180" />
              </motion.button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default Projects;
