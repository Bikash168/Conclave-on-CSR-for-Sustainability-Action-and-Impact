const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 font-serif">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* First Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-justify">
                    {/* Image */}
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/images/event-background.jpg" 
                            alt="Empowering Minds Through Education"
                            className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#316b9e] mb-6">
                            About Us
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Trident Academy of Technology (TAT), established in 2005, has emerged as a premier institution offering UG, PG, and Ph.D. programs across diverse domains such as Engineering, Management, Biotechnology, Computer Applications, Public Health, Environmental Science, and Social Welfare. The institute is distinguished by its quality accreditations from NBA, NAAC, and DSIR (DST), Government of India.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                        The School of Engineering of TAT offers six undergraduate programs in ETC, EEE, Mechanical, Civil, Biotechnology, and Electronics (VLSI Design), along with postgraduate programs in ETC and VLSI Design. Complementing this, the School of Computing of TAT provides five cutting-edge undergraduate programs in CSE, CST, CS-AI-ML, CSIT, and Data Science, and postgraduate programs in CSE and CS-AIML.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                        With a steadfast commitment to excellence, the institute focuses on fostering innovation, research, and skill development to empower students for global competitiveness in emerging technologies and multidisciplinary areas. Its industry-aligned co-curricular focus, state-of-the-art infrastructure, and strong academic ethos ensure holistic development, making it a hub for future leaders and innovators.
                        </p>
                    </div>
                </div>
            </div>

            {/* CSR Section */}
            <div className="bg-white rounded-xl shadow-lg max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 mt-12 text-justify">
                <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#316b9e] mb-6">
                            About the Driving Force of Technology
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            The convergence of Energy, Semiconductors, Cybersecurity, and Artificial Intelligence (AI) is driving a technological revolution with profound global implications. The energy sector is rapidly evolving with advancements in renewable sources, battery storage, and smart grids, ensuring sustainable and efficient power distribution. Semiconductors, the backbone of modern electronics, are crucial for developing high-performance computing, AI applications, and next-generation communication networks.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                            As digitalization accelerates, cybersecurity plays a critical role in safeguarding sensitive data, infrastructure, and national security against cyber threats. Meanwhile, AI is transforming industries by enabling automation, predictive analytics, and intelligent decision-making. The synergy among these fields is shaping a future driven by innovation, security, and sustainability, unlocking new opportunities for economic growth and societal advancement.
                        </p>
                    </div>
                </div>
            </div>

            {/* About the Conclave Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 text-justify">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 transition-shadow duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#316b9e] mb-6">
                        About the Conclave
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    The institute is hosting ESCA-2025, a National Conclave on Energy, Semiconductors, Cybersecurity, and Artificial Intelligence, scheduled for 14th-15th February 2025. This prestigious event will bring together policymakers, industry leaders, and academic experts to explore recent trends and advancements in these transformative fields. 
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Through four focused panel sessions, participants will engage with eminent panelists in insightful discussions on leveraging these technologies to drive sustainable human development. ESCA-2025 aims to foster collaboration, innovation, and actionable strategies to address pressing challenges and opportunities, ensuring a brighter future for the stakeholders through the integration of cutting-edge solutions for societal and economic progress. 
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    This conclave is organized by TAT in partnership with ARF Design, VLSI Society of India, IEEE student chapter, SACRED FOUNDATION and ThreatSys & SPARC (P) Ltd..
                    </p>

                    {/* Image */}
                    <div className="w-full md:w-2/3 mx-auto mt-6 overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/images/Head With Ai Chip.jpg" 
                            alt="CSR Conclave"
                            className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
