// components/Courses.js
import { motion } from 'framer-motion';
import ProjectProposal from './projects/ProjectProposal';
import TechnologyMonitoring from './projects/TechnologyMonitoring';
import GuidanceCSR from './projects/GuidanceCSR';
import EducationCSR from './projects/EducationCSR';
import UtilisationCSR from './projects/UtilisationCSR';
import EnvironmentalSustainability from './projects/EnvironmentalSustainability';

const Theme = () => {
  const projects = [
    { Component: ProjectProposal, key: 'project-proposal' },
    { Component: TechnologyMonitoring, key: 'technology-monitoring' },
    { Component: GuidanceCSR, key: 'guidance-csr' },
    { Component: EducationCSR, key: 'education-csr' },
    { Component: UtilisationCSR, key: 'utilisation-csr' },
    { Component: EnvironmentalSustainability, key: 'environmental-sustainability' },
  ];

  return (
    <section id="theme" className="py-16 px-4 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6 text-[#316b9e]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sub - Themes
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore various CSR projects aimed at driving social and environmental impact.
        </motion.p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
