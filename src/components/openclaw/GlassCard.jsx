import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        bg-white/70 backdrop-blur-md border border-white/20 
        rounded-3xl shadow-depth p-6 transition-all 
        ${className}
      `}
    >
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none rounded-3xl" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;