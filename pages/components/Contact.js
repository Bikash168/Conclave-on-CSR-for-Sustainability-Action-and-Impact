import React from "react";
import Link from "next/link";
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
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        {/* TGI Logo */}
        <motion.img
          src="/logo.png"
          alt="TGI Logo"
          className="mx-auto mb-6 w-48 md:w-60"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-[#316b9e] hover:text-blue-700 transition-all duration-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-6 text-[#316b9e] hover:text-blue-700 transition-all duration-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Trident Academy of Technology
        </motion.h3>

        {/* Google Map */}
        <motion.div
          className="mt-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          ></iframe>
        </motion.div>
        
        {/* Contact Information and Other Sections */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Contact Information */}
          <div className="text-left bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Contact Information</h3>
            <address className="text-base md:text-lg text-gray-700 not-italic mb-6">
              <div className="mb-4">
                <strong>Further Details Contact:</strong>
                <br />
                Dr. Nargis Begum - <FaPhoneAlt className="inline-block text-gray-600" /> +91-9437300099
                <br />
                Dr. Diptimayee Sahoo - <FaPhoneAlt className="inline-block text-gray-600" /> +91-9438331744
              </div>
              <div className="mb-1">
                <span>
                  Trident Academy of Technology,
                  <br />
                  F-2, Chandaka Industrial Estate,
                  <br />
                  In front of Infocity,
                  <br />
                  Chandrasekharpur, Bhubaneswar,
                  <br />
                  Odisha, India. 751024
                </span>
              </div>
              <div className="mb-1">
                <a
                  href="https://www.tat.ac.in"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.tat.ac.in
                </a>
              </div>
            </address>
          </div>

        

         
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl text-[#316b9e] font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-blue-600 hover:text-blue-700 transition duration-300 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300 text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:text-pink-600 transition duration-300 text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-blue-600 hover:text-blue-700 transition duration-300 text-2xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-red-600 hover:text-red-700 transition duration-300 text-2xl" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-green-600 hover:text-green-700 transition duration-300 text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <footer className="bg-[#316b9e] text-white text-center py-4">
        <p>© {new Date().getFullYear()} Trident Group of Institutions. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
