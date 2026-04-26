import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import GlassCard from '../../components/openclaw/GlassCard';

// Import images from assets
import mernProjectImg from '../../assets/images/mernproject.png';
import avInfoSystemImg from '../../assets/images/av-info-sytem.png';
import openclawAiImg from '../../assets/images/openclaw-ai.png';
import abacusImg from '../../assets/images/abacus.png';
import jobPortalImg from '../../assets/images/job-portal.png';


const categories = ['All', 'Web App', 'Mern', 'UI Design'];

const projects = [
  {
    id: 1,
    title: 'YOUR PLACE',
    category: 'Mern',
    img: mernProjectImg,
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind Css'],
    link: 'https://udemy-learning-project-react-mern.vercel.app',
    github: 'https://github.com/vipuls11/Udemy-learning-project-react-mern'
  },
  {
    id: 2,
    title: 'AV INFO SYSTEM',
    category: 'Web App',
    img: avInfoSystemImg,
    tags: ['Vite', 'Tailwind'],
    link: 'https://av-info-system-16-05-2024.vercel.app',
    github: 'https://github.com/vipuls11/av-info-system-16-05-2024'
  },
  {
    id: 3,
    title: 'OPENCLAW AI',
    category: 'Web App',
    img: openclawAiImg,
    tags: ['React', 'Material UI', 'Framer-motion'],
    link: 'https://open-claw-ai.vercel.app/',
    github: 'https://github.com/vipuls11/OpenClaw-AI'
  },
  {
    id: 4,
    title: 'SMART-ABACUS',
    category: 'Web App',
    img: abacusImg,
    tags: ['React', 'Tailwind', 'Slick-Carousel',],
    link: 'https://smart-abacus.vercel.app',
    github: 'https://github.com/vipuls11/smart-abacus'
  },
  {
    id: 5,
    title: 'Job Portal',
    category: 'UI Design',
    img: jobPortalImg,
    tags: ['React'],
    link: 'https://job-portal-psi-lovat.vercel.app/job-preview',
    github: 'https://github.com/vipuls11/job-portal'
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="lg:py-24 py-10 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-7xl mb-4 uppercase tracking-tighter">
            Selected <span className="text-purple-600">Works</span>
          </h2>
          <p className="text-slate-500 max-w-md">Highlighting production-ready applications built with the MERN stack and precision UI.</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-2xl flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`lg:px-6 p-4 py-2 rounded-xl text-sm font-bold transition-all text-wrap ${
                activeFilter === cat ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600' : 'text-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="group !p-0 overflow-hidden h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <a href={project.link} className="p-3 bg-white rounded-full text-slate-900 hover:bg-purple-600 hover:text-white transition-colors"><ExternalLink size={20}/></a>
                      <a href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:bg-purple-600 hover:text-white transition-colors"><Github size={20}/></a>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <span className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-heading mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;