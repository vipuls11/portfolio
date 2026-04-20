import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Frontend', 'Backend', 'Tools'];

const PlatformTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex space-x-2 bg-slate-200/50 dark:bg-slate-700/50 p-1 rounded-xl w-fit mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab ? 'bg-white dark:bg-slate-800 shadow-sm text-purple-600 dark:text-purple-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {data[activeTab.toLowerCase()].map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
             <span className="font-heading text-xl">{skill.name}</span>
             <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full" style={{ width: `${skill.level}%` }} />
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlatformTabs;