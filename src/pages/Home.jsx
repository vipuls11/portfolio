import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/openclaw/GlassCard';
import PlatformTabs from '../components/openclaw/PlatformTabs';
import ContactForm from '../features/contact/ContactForm';
import Experience from '../features/experience/Experience';
import Portfolio from '../features/portfolio/Portfolio';
import Learning from '../features/learning/Learning';

const Home = () => {
  // Demo Data (Usually you'd put this in src/utils/constants.js)
  const skillsData = {
    frontend: [{ name: 'HTML', level: 90 },{ name: 'CSS', level: 90 },{ name: 'JQuery', level: 90 },{ name: 'JavaScript', level: 90 },{ name: 'Bootstrap', level: 95 }, { name: 'Tailwind', level: 95 }, { name: 'MUI', level: 85 }],
    backend: [{ name: 'Node.js', level: 75 }, { name: 'MongoDB', level: 70 }],
    tools: [{ name: 'Vite', level: 95 }, { name: 'Git', level: 85 },{ name: 'AI Tools', level: 50 }]
  };

  const projects = [
    { id: 1, title: 'Society Management', category: 'Web App', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500' },
    { id: 2, title: 'Mewalal Pasta And Salad', category: 'Restaurant', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500' },
  ];

  return (
    <div className="lg:space-y-32 space-y-18 lg:pb-20 pb-10  dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="lg:min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-bold mb-6"
        >
          AVAILABLE FOR WORKING
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-8xl font-heading leading-none mb-6 lg:w-1/2  "
        >
          I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">DIGITAL PRODUCTS</span>
        </motion.h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mb-10">
          Building high-performance, scalable, and visually impactful web applications with modern frontend technologies.
        </p>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10">
        I’m a passionate UI Developer with 3+ years of experience crafting modern, responsive, and high-performance web applications.
        </p>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mb-10">
         I specialize in building pixel-perfect interfaces and integrating them seamlessly with backend systems. My focus is not just on design—but on performance, scalability, and user experience.
        </p>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10">
        I’ve worked on CMS platforms, dashboards, and dynamic web applications, helping businesses deliver smooth and engaging digital experiences.
        </p>
        <div className="flex space-x-4">
          <a href="/vipulvishwakarma2026cv.pdf" download  target="_blank" className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
            View My CV <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading lg:text-5xl text-4xl lg:mb-12 mb-10 text-center">TECHNICAL ARSENAL</h2>
        <PlatformTabs data={skillsData} />
      </section>
        {/* Portfolio Grid */}
      <Portfolio />
      {/* Projects Grid */}
      <section id="featured" className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading lg:text-5xl text-4xl lg:mb-12 mb-10">FEATURED WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <GlassCard className="group overflow-hidden !p-0">
                <div className="h-64 overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex justify-between items-end">
                  <div>
                    <span className="text-purple-600 font-bold text-sm uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-3xl font-heading mt-1">{project.title}</h3>
                  </div>
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
      <div className="space-y-10 pb-20">
      {/* Experience Section */}
      <Experience />
      {/* Learning & Certifications */}
      <Learning />
      {/* Add this section */}
      <ContactForm />
    </div>
    </div>
  );
};

export default Home;