const Agenda = () => {
    return (
        <section id="agenda" className="py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#316b9e] mb-4">
                        Trident Academy of Technology
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                        Organizes
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#316b9e] mt-2 mb-4">
                        Conclave on
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-[#316b9e] italic">
                        CSR for Sustainability: Action to Impact
                    </h4>
                    <p className="text-lg md:text-xl text-gray-700 mt-4">
                        8th & 9th February 2025
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 mt-2">
                        In Collaboration with <span className="font-bold text-[#316b9e]">SACRED Foundation</span>
                    </p>
                </div>

                {/* Agenda Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl font-extrabold text-[#316b9e] mb-8 text-center">
                        Agenda
                    </h2>

                    {/* Link to Download/View the Agenda PDF */}
                    <div className="text-center mb-8">
                        <a
                            href="/pdfs/agenda.pdf"  // Replace with the actual path to your PDF file
                            className="inline-block text-white bg-[#316b9e] py-2 px-4 rounded-md hover:bg-[#2c4d66] transition-colors"
                            download
                        >
                            Download Agenda PDF
                        </a>
                    </div>
                                      
                </div>
            </div>
        </section>
    );
};

export default Agenda;
