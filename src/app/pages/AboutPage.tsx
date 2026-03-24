import { motion } from 'motion/react';
import { GraduationCap, Code2, Heart, Sparkles, Award, Users } from 'lucide-react';

export function AboutPage() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Software Development Student at College APPEC',
    },
    {
      icon: Code2,
      title: 'Passion',
      description: 'Building innovative solutions that make a difference',
    },
    {
      icon: Heart,
      title: 'Philosophy',
      description: 'Code with purpose, design with empathy',
    },
  ];

  const achievements = [
    { icon: Award, text: 'Dean\'s List for Academic Excellence' },
    { icon: Users, text: 'Active member of Tech Community' },
    { icon: Sparkles, text: 'Multiple successful project deliveries' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">
              Hello, I'm Theoneste
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software development student at College APPEC, dedicated to
                transforming ideas into elegant, functional solutions. My journey in technology
                is driven by curiosity, creativity, and a commitment to continuous learning.
              </p>
              <p>
                From crafting intuitive user interfaces to building robust backend systems,
                I approach every project with enthusiasm and attention to detail. I believe
                that great software is not just about writing code—it's about solving real
                problems and creating meaningful experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with fellow developers. I'm
                constantly seeking opportunities to grow, collaborate, and make a positive
                impact through technology.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <highlight.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-secondary rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-full">
                  <achievement.icon size={32} />
                </div>
                <p className="text-foreground font-medium">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-primary italic max-w-3xl mx-auto">
            "Every line of code is an opportunity to learn, innovate, and make a difference."
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Theoneste Dushimirimana</p>
        </motion.div>
      </div>
    </div>
  );
}
