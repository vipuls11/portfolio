import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import GlassCard from '../../components/openclaw/GlassCard';


const workHistory = [
  {
    company: 'Oriflamme IT Solutions',
    role: 'FrontEnd Developer',
    duration: '2022 - Present',
    location: 'Mumbai',
    description: 'Developed scalable e-commerce and real-estate platforms using React and MUI. Focused on performance optimization and responsive architecture.'
  },
  {
    company: 'Jewel webnet',
    role: 'UI Developer',
    duration: '2021 - 2022',
    location: 'Mumbai',
    description: 'Crafted precision jewelry storefronts and landing pages. Implemented custom animations and high-impact layouts using Tailwind CSS.'
  },
  {
    company: 'A-one employment',
    role: 'Web Developer',
    duration: '2020 - 2021',
    location: 'Remote',
    description: 'Managed full-lifecycle web projects, ensuring seamless integration between frontend design and backend functionality.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="lg:py-24 py-10 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-heading text-4xl md:text-7xl mb-4 ">PROFESSIONAL <span className="text-purple-600">JOURNEY</span></h2>
        <p className="text-slate-500">2+ years of experience building digital products for startups and corporations.</p>
      </div>

      <div className="relative space-y-12 before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-transparent before:-translate-x-1/2">
        {workHistory.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Dot on timeline */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg -translate-x-1/2 z-10" />

            <div className="w-full md:w-[45%] mt-6 md:mt-0">
              <GlassCard className="hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl">
                    <Briefcase size={20}/>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{job.role}</h3>
                    <p className="text-purple-600 font-medium text-sm">{job.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 text-xs text-slate-00 mb-4 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {job.duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {job.description}
                </p>
              </GlassCard>
            </div>
            
            {/* Spacer for the other side */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;