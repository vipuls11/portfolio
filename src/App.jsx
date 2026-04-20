import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { Suspense, lazy } from 'react';
import AnimatedBackground from './components/common/AnimatedBackground.jsx';

// Code splitting for performance (Senior practice)
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));

function App() {
  return (
    <Router>
      {/* <AnimatedBackground /> */}
      <div className="min-h-screen relative bg-transparent dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body transition-colors duration-300">
       <AnimatedBackground />
        <Navbar />
        <main className="pt-20"> {/* Offset for fixed navbar */}
          <Suspense fallback={<div className="h-screen flex justify-center items-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;