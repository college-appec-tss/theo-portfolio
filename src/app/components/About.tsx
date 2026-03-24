import { motion } from 'motion/react';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                I'm a dedicated software development student at College APPEC, passionate about technology and problem-solving. My journey in software development has equipped me with a strong foundation in programming and a drive to continuously learn and improve.
              </p>
              <p className="text-muted-foreground mb-4">
                I believe in writing clean, efficient code and creating user-centered applications that make a difference. Whether it's web development, mobile apps, or exploring new technologies, I'm always eager to take on new challenges.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or collaborating with fellow developers to build something amazing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Education</h3>
                  <p className="text-muted-foreground">Software Development Student at College APPEC</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Experience</h3>
                  <p className="text-muted-foreground">Building projects and honing skills in web and software development</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Passion</h3>
                  <p className="text-muted-foreground">Creating innovative solutions and learning new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
