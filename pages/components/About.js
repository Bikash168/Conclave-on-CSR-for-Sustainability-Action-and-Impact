const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
            {/* First Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/images/path-to-your-image.jpg" // Update with correct path
                            alt="Empowering Minds Through Education"
                            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#316b9e] mb-4">
                            EMPOWERING MINDS THROUGH THE POWER OF EDUCATION
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Trident Academy of Technology was established in 2005 in the state capital Bhubaneswar. The MBA programme was launched in 2008. It is affiliated to Biju Patnaik University of Technology (BPUT), Rourkela and approved by AICTE, New Delhi. It offers various specializations in Sustainability Management, International Business, Marketing, Finance, System Management (IT), and Human Resource Management. Trident Academy of Technology offers various courses in engineering, management, computer applications, and biotechnology.
                        </p>
                    </div>
                </div>
            </div>

            {/* About the Conclave Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-white rounded-xl shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl font-extrabold text-[#316b9e] mb-6">
                        About the Conclave
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Corporate Social Responsibility (CSR) is a transformative force in tackling today's global challenges. As climate change, resource depletion, and social inequalities intensify, CSR offers businesses a unique opportunity to create meaningful impact through innovation, collaboration, and responsibility.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        The one-day summit on CSR for Sustainability aims to explore actionable strategies and real-world success stories that demonstrate the power of CSR in building a resilient and sustainable future.
                    </p>
                    {/* Image Added */}
                    <div className="w-full md:w-2/3 mx-auto mb-6">
                        <img
                            src="/images/conclave-image.png" // Update with correct path to your image
                            alt="CSR Conclave"
                            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
