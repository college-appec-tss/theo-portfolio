import { motion } from 'motion/react';
import { GraduationCap, Code, Lightbulb, MapPin, Calendar, Award } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">About Me</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="glass-dark rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Who I Am</h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  I'm Theo Dev (Theonest Dushimirimana), a dedicated software development student at 
                  <span className="text-[#22C55E]"> College APPEC</span> in Kigali, Rwanda. Passionate about 
                  technology and problem-solving, I'm on a journey to become a full-stack developer.
                </p>
                <p className="text-white/70 leading-relaxed">
                  I believe in writing clean, efficient code and creating user-centered applications that 
                  make a difference. Whether it's web development, mobile apps, or exploring new technologies, 
                  I'm always eager to take on new challenges.
                </p>
              </div>

              {/* Personal Details */}
              <div className="glass-dark rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin size={18} className="text-[#22C55E]" />
                    <span className="text-sm">Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar size={18} className="text-[#22C55E]" />
                    <span className="text-sm">Born in 2004</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <GraduationCap size={18} className="text-[#22C55E]" />
                    <span className="text-sm">College APPEC</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Award size={18} className="text-[#22C55E]" />
                    <span className="text-sm">Student</span>
                  </div>
                </div>
              </div>

              {/* What I Do */}
              <div className="glass-dark rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#22C55E]/20 p-2 rounded-lg">
                      <Code className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Web Development</h4>
                      <p className="text-white/60 text-sm">Building modern, responsive websites and web applications</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#22C55E]/20 p-2 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Problem Solving</h4>
                      <p className="text-white/60 text-sm">Finding elegant solutions to complex technical challenges</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#22C55E]/20 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Continuous Learning</h4>
                      <p className="text-white/60 text-sm">Always exploring new technologies and best practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Timeline */}
          <FadeIn direction="left" delay={200}>
            <div className="glass-dark rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">My Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#22C55E]/30"></div>

                {/* Timeline Items */}
                <div className="space-y-6">
                  <motion.div 
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-[#22C55E] border-2 border-[#1B2035]"></div>
                    <h4 className="text-white font-medium">Currently Learning</h4>
                    <p className="text-white/60 text-sm">Advanced React, TypeScript, and Node.js</p>
                    <p className="text-[#22C55E] text-xs mt-1">2024 - Present</p>
                  </motion.div>

                  <motion.div 
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-[#22C55E]/50 border-2 border-[#1B2035]"></div>
                    <h4 className="text-white font-medium">Started Software Development</h4>
                    <p className="text-white/60 text-sm">Began my journey at College APPEC</p>
                    <p className="text-[#22C55E] text-xs mt-1">2023</p>
                  </motion.div>

                  <motion.div 
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-[#22C55E]/30 border-2 border-[#1B2035]"></div>
                    <h4 className="text-white font-medium">First Website</h4>
                    <p className="text-white/60 text-sm">Created my first HTML/CSS project</p>
                    <p className="text-[#22C55E] text-xs mt-1">2022</p>
                  </motion.div>

                  <motion.div 
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-white/20 border-2 border-[#1B2035]"></div>
                    <h4 className="text-white font-medium">Discovered Programming</h4>
                    <p className="text-white/60 text-sm">First encountered code and fell in love</p>
                    <p className="text-[#22C55E] text-xs mt-1">2021</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Hobbies / Interests */}
            <div className="glass-dark rounded-xl p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Beyond Code</h3>
              <div className="flex flex-wrap gap-2">
                {['Gaming', 'Reading Tech Blogs', 'Open Source', 'Music', 'Photography', 'Cooking'].map((hobby) => (
                  <span 
                    key={hobby}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm hover:bg-[#22C55E]/20 hover:text-[#22C55E] transition-colors cursor-default"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default About;
