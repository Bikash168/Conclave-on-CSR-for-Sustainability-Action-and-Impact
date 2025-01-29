// components/Courses.js
import ProjectProposal from './projects/ProjectProposal';
import TechnologyMonitoring from './projects/GuidanceCSR';
import GuidanceCSR from './projects/GuidanceCSR';
import EducationCSR from './projects/EducationCSR';
import UtilisationCSR from './projects/UtilisationCSR';
import EnvironmentalSustainability from './projects/EnvironmentalSustainability';

const Theme = () => {
  return (
    <section id="theme" className="py-1 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold mb-6 text-[#316b9e]">Theme</h2>
        <p className="text-lg text-gray-700 mb-4">
          Explore various CSR projects aimed at driving social and environmental impact.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Project Cards with Animation */}
        {[ 
          { Component: ProjectProposal, key: 'project-proposal' },
          { Component: TechnologyMonitoring, key: 'technology-monitoring' },
          { Component: GuidanceCSR, key: 'guidance-csr' },
          { Component: EducationCSR, key: 'education-csr' },
          { Component: UtilisationCSR, key: 'utilisation-csr' },
          { Component: EnvironmentalSustainability, key: 'environmental-sustainability' },
        ].map(({ Component, key }, index) => (
          <div 
            key={key}
            className={`bg-white rounded-lg shadow-md p-6 transform transition-transform duration-500 ease-in-out opacity-0 translate-y-4 animate-fadeIn`}
            style={{ animationDelay: `${index * 100}ms` }} // Stagger animation
          >
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Theme;
