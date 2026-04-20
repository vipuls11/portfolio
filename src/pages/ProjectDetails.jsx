import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, fetch data from your MERN backend using the ID
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-slate-500 hover:text-purple-600 mb-10 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} /> Back to Projects
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-heading lg:text-6xl text-4xl mb-4">PROJECT {id} DETAILS</h1>
          <p className="text-slate-600 text-lg mb-8">
            Detailed breakdown of how I implemented the frontend architecture, 
            responsive design, and database integration for this project.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-500" />
              <span>React & Vite Integration</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-500" />
              <span>Tailwind CSS v4 Styling</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-3xl h-96 shadow-depth animate-pulse">
           {/* Project Image/Video Placeholder */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;