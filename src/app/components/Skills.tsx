import { motion } from 'motion/react';
import { FadeIn } from '../hooks/useInView';
import portfolioData from '../../data/portfolio.json';

export function Skills() {
  const skills = portfolioData.skills;

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryOrder = ['Frontend', 'Backend', 'Tools', 'Design'];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">Skills</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {categoryOrder.map((category, idx) => {
            const categorySkills = categories[category];
            if (!categorySkills) return null;

            return (
              <FadeIn key={category} direction={idx % 2 === 0 ? 'right' : 'left'} delay={idx * 100}>
                <div className="glass-dark rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIdx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-white/80 text-sm flex items-center gap-2">
                            <img 
                              src={skill.icon} 
                              alt={skill.name} 
                              className="w-5 h-5"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            {skill.name}
                          </span>
                          <span className="text-[#22C55E] text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-[#22C55E] to-[#16a34a] rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
