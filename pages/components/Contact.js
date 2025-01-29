import React from 'react';
import Link from 'next/link';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-8 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center mb-12">
                {/* TGI Logo */}
                <img src="/logo.png" alt="TGI Logo" className="mx-auto mb-6 w-48 md:w-60 transition-transform duration-300 transform hover:scale-110" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#316b9e] transition-all duration-300 hover:text-blue-700">Contact Us</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                    For more updates, share your email with us!
                </p>
                <form className="max-w-md mx-auto mb-8">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#316b9e] text-white font-semibold py-2 rounded-md hover:bg-[#316b9e] transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>

                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31144.175952423004!2d85.83170889999999!3d20.296059999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c7c05d6e1db7%3A0x4190e3de632915c8!2sTrident%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1663601596228!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    ></iframe>
                </div>

                {/* Contact Information and Other Sections */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact Information */}
                    <div className="text-left transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Contact Information</h3>
                        <address className="text-base md:text-lg text-gray-700 not-italic mb-6">
                            <div className="mb-1">
                                <span>
                                    Trident Group of Institutions,
                                    <br />
                                    F2, Chandaka Industrial Estate,
                                    <br />
                                    Technology Corridor, Infocity Area,
                                    <br />
                                    Chandrasekharpur, Bhubaneswar,
                                    <br />
                                    Odisha, India. 751024
                                </span>
                            </div>
                            <div className="flex items-center mb-1">
                                <FaPhoneAlt className="mr-1 text-gray-600 text-xl" /> {/* Increased size */}
                                +91 98611 91195
                            </div>
                            <div className="flex items-center mb-1">
                                <FaEnvelope className="mr-1 text-gray-600 text-xl" /> {/* Increased size */}
                                info@trident.ac.in
                            </div>
                        </address>
                    </div>

                    {/* About Us Section */}
                    <div className="text-left transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">About Us</h3>
                        <p className="text-base md:text-lg text-gray-700">
                            Established in 1998, Trident Group of Institutions is a leader in education and research in Odisha. With over two decades of operation, it has transformed the lives of more than 20,000 students.
                        </p>
                    </div>

                    {/* Trident Group Websites Section */}
                    <div className="text-left transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Trident Group Websites</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://tat.ac.in/" className="text-gray-700 block hover:text-blue-600">
                                    Trident Academy of Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="https://tact.ac.in/" className="text-gray-700 block hover:text-blue-600">
                                    Trident Academy of Creative Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="https://taps.ac.in/" className="text-gray-700 block hover:text-blue-600">
                                    Trident Academy of Professional Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dfgroup.in/" className="text-gray-700 block hover:text-blue-600">
                                    The DF Group
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="text-blue-600 hover:text-blue-700 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-blue-500 hover:text-blue-600 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="text-blue-600 hover:text-blue-700 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube className="text-red-600 hover:text-red-700 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="text-green-600 hover:text-green-700 transition duration-300 text-2xl" /> {/* Increased size */}
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer or Additional Content */}
            <footer className="bg-[#316b9e] text-white text-center py-4 ">
                <p>© {new Date().getFullYear()} Trident Group of Institutions. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
