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
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.img
          src="/logo.png"
          alt="TGI Logo"
          className="mx-auto mb-6 w-48 md:w-60 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
       
        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Trident Academy of Technology
        </motion.h3>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#316b9e] hover:text-blue-700 transition-all duration-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>

        {/* Google Map */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-4">Contact Information</h3>
            <p className="text-gray-700">
              <FaPhoneAlt className="inline-block text-blue-600 mr-2" /> Dr. Nargis Begum: +91-9437300099
            </p>
            <p className="text-gray-700">
              <FaPhoneAlt className="inline-block text-blue-600 mr-2" /> Dr. Diptimayee Sahoo: +91-9438331744
            </p>
            <p className="text-gray-700">
              <FaEnvelope className="inline-block text-blue-600 mr-2" />
              info@tat.ac.in
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-4">Address</h3>
            <p className="text-gray-700">
              <FaMapMarkerAlt className="inline-block text-blue-600 mr-2" />
              <span>Trident Academy of Technology</span><br></br>
              F-2, Chandaka Industrial Estate
              In front of Infocity, Infocity
              Chandrasekharpur, Bhubaneshwar
              Odisha - 751024
            </p>
            <a
              href="https://www.tat.ac.in"
              className="text-blue-600 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.tat.ac.in
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-[#316b9e] mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6 p-6">
              {[FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-2xl text-gray-600 hover:text-[#316b9e] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
      {/* Footer */}
      <footer className="bg-[#316b9e] text-white text-center py-4 mt-12">
        <p>© {new Date().getFullYear()} Trident Group of Institutions. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;