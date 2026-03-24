import { motion } from 'motion/react';
import { Code2, Database, Wrench, Rocket } from 'lucide-react';

export function SkillsPage() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'SQL/PostgreSQL', level: 70 },
        { name: 'REST APIs', level: 75 },
        { name: 'Express.js', level: 72 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Linux/Terminal', level: 75 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: Rocket,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Communication', level: 82 },
        { name: 'Time Management', level: 80 },
        { name: 'Adaptability', level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${category.bgColor} rounded-lg`}>
                  <category.icon className={category.color} size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Continuous Learning
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
            Currently exploring: Cloud Computing (AWS), Machine Learning, and Advanced React Patterns.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
