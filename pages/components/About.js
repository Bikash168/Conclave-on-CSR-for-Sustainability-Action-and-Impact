const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* First Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/images/path-to-your-image.jpg" // Update with correct path
                            alt="Empowering Minds Through Education"
                            className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-[#316b9e] mb-6">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                        Trident Academy of Technology was established in 2005 in the state capital Bhubaneswar. The MBA programme was launched in 2008. It is affiliated to Biju Patnaik University of Technology (BPUT). Rourkela and approved by AICTE, New Delhi. It offers various specialization in Sustainability Management, International Business, Marketing, Finance, System management (IT) and Human Resource Management. Trident Academy of Technology offers various courses in engineering, management, computer applications and bio- technology.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* CSR Section */}
            <div className="bg-white rounded-xl shadow-lg max-w-7xl mx-auto px-6 py-16 mt-12">
                <div className="grid grid-cols-1 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-[#316b9e] mb-6">
                            About Corporate Social Responsibility (CSR)
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                        Corporate Social Responsibility (CSR) is a company’s commitment to conducting business ethically while contributing to society and protecting the environment. It involves sustainable practices like reducing waste, using renewable resources, and lowering carbon emissions. Ethical business operations, such as fair wages, responsible sourcing, and transparency, ensure that companies act with integrity. CSR also includes community initiatives that support education, healthcare, and disaster relief, helping to improve lives. Many organizations invest in employee well-being by promoting diversity, providing a safe workplace, and encouraging social engagement. Philanthropy, such as charitable donations and social welfare programs, is another key part of CSR. By following these principles, businesses build trust, support social progress, and achieve long-term success.
                        </p>
                    </div>
                </div>
            </div>

            {/* About the Conclave Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-white rounded-xl shadow-lg p-10 transition-shadow duration-300 hover:shadow-2xl">
                    <h2 className="text-4xl font-extrabold text-[#316b9e] mb-6">
                        About the Conclave
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        CSR is a transformative force in tackling global challenges such as climate change, resource depletion, and social inequalities. Businesses can drive meaningful change through innovation and responsibility.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        The Two-day summit on CSR for Sustainability explores real-world strategies and success stories that demonstrate CSR's impact in building a resilient future.
                    </p>
                    {/* Image */}
                    <div className="w-full md:w-2/3 mx-auto mt-6 overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/images/conclave-image.png" // Update with correct path
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