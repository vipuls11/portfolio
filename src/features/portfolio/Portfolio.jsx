import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import GlassCard from '../../components/openclaw/GlassCard';

const categories = ['All', 'Web App', 'MERN', 'UI Design'];

const projects = [
  {
    id: 1,
    title: 'Society Management System',
    category: 'MERN',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'MUI'],
    link: '#',
    github: 'https://github.com/vipuls11'
  },
  {
    id: 2,
    title: 'Wok N Grill Xpress',
    category: 'Web App',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: 'https://wok-n-grill.vercel.app/',
    github: '#'
  },
  {
    id: 3,
    title: 'PMKSY-WDC 2.0 Dashboard',
    category: 'Web App',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['React', 'Formik', 'Data Viz'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Interior Storefront',
    category: 'UI Design',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    tags: ['React', 'MongoDB', 'Masonry'],
    link: '#',
    github: '#'
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