import { motion } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution featuring secure user authentication, dynamic product catalog, shopping cart functionality, and seamless payment integration with Stripe. Built with scalability and user experience in mind.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A real-time collaborative task management platform that enables teams to organize, track, and complete projects efficiently. Features include drag-and-drop task boards, real-time updates, team chat, and progress analytics.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'An elegant weather application that provides accurate real-time weather information with beautiful data visualizations. Includes 7-day forecasts, interactive charts, and location-based weather alerts.',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'Geolocation'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Portfolio CMS',
      description: 'A modern content management system specifically designed for creative professionals to build and manage their portfolio websites. Features an intuitive drag-and-drop interface and customizable templates.',
      technologies: ['React', 'Express', 'PostgreSQL', 'AWS S3'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard that aggregates data from multiple social media platforms, providing insights, engagement metrics, and scheduling capabilities for content creators.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'OAuth'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application that helps users monitor workouts, nutrition, and progress towards their health goals with personalized recommendations.',
      technologies: ['React Native', 'Firebase', 'TensorFlow.js'],
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="flex items-center gap-1 text-accent">
                      <Star size={16} fill="currentColor" />
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to see more?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects and open-source contributions
          </p>
          <a
            href="https://github.com/theoneste"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
