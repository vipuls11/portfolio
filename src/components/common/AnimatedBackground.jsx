import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 15 }); // Reduced for better performance

  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none transition-colors duration-500">
      
      {/* 1. Static Dotted Grid (Adapts automatically) */}
      <div 
        className="animated-grid-dots absolute inset-0 opacity-[0.2] dark:opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px) !imporrtant`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Floating Particles (Theme-aware colors) */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-500/40 dark:bg-purple-100/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth, 
              Math.random() * (window.innerWidth / 2), 
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight, 
              Math.random() * (window.innerHeight / 2), 
              Math.random() * window.innerHeight
            ],
          }}
          transition={{
            duration: Math.random() * 30 + 30, // Even slower for a "premium" feel
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'blur(1px)',
            // Senior Tip: Add a slight box-shadow glow in dark mode
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)' 
          }}
        />
      ))}

      {/* 3. The "OpenClaw" Vignette Glow */}
      <div className="absolute inset-0 
        bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-900/10 dark:via-slate-950/50 dark:to-slate-950 
        transition-colors duration-700" 
      />
    </div>
  );
};

export default AnimatedBackground;