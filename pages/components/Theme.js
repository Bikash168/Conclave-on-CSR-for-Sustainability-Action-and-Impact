// components/Courses.js
import { motion } from 'framer-motion';
import ProjectProposal from './projects/Semicon';
import TechnologyMonitoring from './projects/Energy';
import GuidanceCSR from './projects/AI';
import EducationCSR from './projects/Cybersecurity';


const Theme = () => {
  const projects = [
    { Component: ProjectProposal, key: 'Semicon' },
    { Component: TechnologyMonitoring, key: 'Energy' },
    { Component: GuidanceCSR, key: 'AI' },
    { Component: EducationCSR, key: 'Cybersecurity' },
  
  ];

  return (
    <section id="sub-theme" className="py-16 px-4 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6 text-[#316b9e] font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sub - Themes
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-4 font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Driving Force of Technological Revolution.
        </motion.p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        {projects.map(({ Component, key }, index) => (
          <motion.div
            key={key}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition duration-500"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Component />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Theme;
