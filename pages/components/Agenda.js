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
                        CSR for Sustainability: Action and Impact
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
                    
                    {/* 8th February 2025 */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">8th February 2025</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">10:00 AM - 11:00 AM</h4>
                                <p className="text-gray-700">
                                    Launching of Exhibition on “Together for a Resilient Planet”  
                                    <br />
                                    <span className="font-bold">A Student Initiative</span>
                                    <br />
                                    Chief Guest: Hon’ble Chief Minister of Odisha, Shri Mohan Charan Majhi
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">11:00 AM - 12:00 PM</h4>
                                <p className="text-gray-700">
                                    Conclave Inaugural Ceremony  
                                    <br />
                                    Chief Guest: Hon’ble Chief Minister of Odisha, Shri Mohan Charan Majhi  
                                    <br />
                                    Guest of Honor: Hon’ble Energy Minister of Odisha, Shri Kanak Vardhan Singh Deo
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">12:00 PM - 12:30 PM</h4>
                                <p className="text-gray-700">
                                    Registration | Tea & Snacks  
                                    <br />
                                    Networking Opportunity
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">12:30 PM - 1:30 PM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 1: Development of Acceptable Professional Project Proposals Suited to the Targeted CSR Funders  
                                    <br />
                                    Panelists: Senior CSR Consultants, Fund Managers, and Project Formulation Experts
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">1:30 PM - 2:30 PM</h4>
                                <p className="text-gray-700">Lunch</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">2:30 PM - 4:00 PM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 2: Use of Technology for Transparent Real-time Monitoring of Progress  
                                    <br />
                                    Panelists: Tech Experts, Government Representatives, and CSR Managers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 9th February 2025 */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">9th February 2025</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">10:00 AM - 11:30 AM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 3: Guidance to CSR Implementing Agencies on Formulating Efficient and Productive CSR Project Plans  
                                    <br />
                                    Panelists: Public Health Experts, NGO Representatives, and Government Officials
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">11:30 AM - 12:30 PM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 4: Leveraging CSR Grants for Promoting Education  
                                    <br />
                                    Panelists: Educationists, CSR Grant Administrators, and Social Entrepreneurs
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">12:30 PM - 1:30 PM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 5: Better Utilization of CSR Grants for Setting Up Homes and Hostels for Women and Orphans, Senior Citizens’ Facilities  
                                    <br />
                                    Panelists: Social Workers, CSR Grant Experts, and Leaders from Nonprofits
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">1:30 PM Onwards</h4>
                                <p className="text-gray-700">
                                    Networking Lunch  
                                    <br />
                                    Final Networking Opportunity to Discuss Collaborations and Partnerships
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[#316b9e]">2:30 PM - 4:00 PM</h4>
                                <p className="text-gray-700">
                                    Panel Discussion 6: CSR Funding for Ensuring Environmental Sustainability  
                                    <br />
                                    Panelists: Environmental Scientists, CSR Representatives from Corporate Sector, and Policy Makers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
