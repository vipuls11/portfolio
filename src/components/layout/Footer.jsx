import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" dark:text-slate-100 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-heading text-3xl text-purple-600 mb-4">VIPUL VISHWAKARMA</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs">
            Crafting premium digital experiences with the MERN stack and modern UI principles.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#about">About Me</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="text-slate-600 dark:text-slate-400">Mumbai, Maharashtra</p>
          <p className="text-purple-600 font-medium">vipulvishwakrama161@gmail.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-50 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} Vipul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;