import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // 1. Scroll Progress Bar (Senior Polish)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Handle Scroll Shadow & Active Section Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for high-end UX
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Smooth Scroll Helper
  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 py-3 shadow-depth text-slate-900 dark:text-slate-100' 
          : 'bg-transparent py-3'
      }`}
    >
      {/* Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 to-pink-500 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading text-3xl tracking-tighter group flex items-center"
        >
          <span className="text-purple-600 group-hover:text-pink-500 transition-colors duration-300">VIPUL</span>
          <span className="text-slate-900 dark:text-slate-100">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.path.replace('/#', '');
              const isActive = activeSection === (sectionId || 'home') && location.pathname === '/';
              
              return (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`relative font-medium text-sm uppercase tracking-widest transition-colors duration-300 hover:text-purple-600 ${
                      isActive ? 'text-purple-600' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5 ml-4 border-l pl-8 border-slate-200">
            <a 
              href="https://github.com/vipuls11" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vipul-vishwakarma-963111211" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

  {/* Mobile Menu Overlay */}
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 overflow-hidden md:hidden shadow-2xl"
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => {
            const sectionId = link.path.replace('/#', '');
            const isActive = activeSection === (sectionId || 'home') && location.pathname === '/';
            return (
              <a 
                key={link.name} 
                href={link.path} 
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-2xl font-heading hover:text-purple-600 flex justify-between items-center ${
                  isActive ? 'text-purple-600' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
                <ExternalLink size={18} className="opacity-20" />
              </a>
            );
          })}
          <div className="flex gap-6 mt-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <a href="https://github.com/vipuls11" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="text-slate-400 dark:text-slate-500" />
            </a>
            <a href="https://www.linkedin.com/in/vipul-vishwakarma-963111211" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-slate-400 dark:text-slate-500" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
    
         


    </nav>
  );
};

export default Navbar;