import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle, TrendingUp, ExternalLink } from 'lucide-react';
import GlassCard from '../../components/openclaw/GlassCard';

const certifications = [
  {
    title: "Bachelor's of Computer Science",
    issuer: "University of Mumbai",
    date: "2021",
    icon: <Award className="text-blue-500" />,
    link: "https://mu.ac.in/"
  },
  {
    title: "MERN Stack Development",
    issuer: "Industry Certification",
    date: "2023",
    icon: <Award className="text-purple-500" />,
    link: "https://mu.ac.in/"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters / Meta",
    date: "2024",
    icon: <Award className="text-cyan-500" />,
    link: "https://mu.ac.in/"
  }
];

const currentLearning = [
  { name: "Next.js 15 & Server Components", progress: 85, status: "Advanced" },
  { name: "TypeScript for Enterprise", progress: 60, status: "Intermediate" },
  { name: "AI Agent Orchestration", progress: 40, status: "Explorer" }
];

const Learning = () => {
  return (
    <section id="learning" className="lg:py-24 py-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Completed Certifications */}
        <div>
          <div className="flex items-center lg:gap-3 gap-0.5 mb-10">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl">
              <CheckCircle size={28} />
            </div>
            <h2 className="font-heading lg:text-5xl text-4xl">CERTIFICATIONS</h2>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center justify-between group hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                      <p className="text-sm text-slate-500">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <a 
    href={cert.link} 
    target="_blank" 
    rel="noreferrer" 
    className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
  >
    <ExternalLink 
      size={18} 
      className="text-slate-300 group-hover:text-purple-500 transition-colors" 
    />
  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Continuous Learning */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl">
              <TrendingUp size={28} />
            </div>
            <h2 className="font-heading lg:text-5xl text-4xl text-blue-600 dark:text-blue-400">UP-SKILLING</h2>
          </div>

          <GlassCard className="space-y-8">
            <p className="text-slate-500 italic">"I believe code is never finished. I am currently deep-diving into these technologies to stay ahead of the curve."</p>
            
            <div className="space-y-6">
              {currentLearning.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-bold flex items-center gap-2">
                      <BookOpen size={16} className="text-purple-500" />
                      {item.name}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                      {item.status}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default Learning;