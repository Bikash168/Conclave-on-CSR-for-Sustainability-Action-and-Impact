import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    course: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="admissions" className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold mb-6 text-[#316b9e] animate-pulse">ADMISSIONS OPEN 2024-25</h2>
        <p className="text-lg text-gray-700 mb-4">
          Engineering | Management | Biotechnology | Computer Applications
        </p>
        <p className="text-lg text-gray-700 mb-4">
          For inquiries, contact us at: <br />
          <span className="font-semibold">+91 98611 91195</span> <br />
          <span className="font-semibold">admissions@trident.ac.in</span>
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-6 transition-transform transform hover:scale-105 duration-300">
        <h3 className="text-2xl font-semibold mb-6">Admissions Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700" htmlFor="name">Student Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Student Name"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="email">Student Email Address *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter Student Email Address"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="whatsapp">Student WhatsApp Number *</label>
            <input
              type="tel"
              name="whatsapp"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="E.g. 9000000000"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="course">Select Course: *</label>
            <select
              name="course"
              id="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="" disabled>Select a Course</option>
              <option value="engineering">Engineering</option>
              <option value="management">Management</option>
              <option value="biotechnology">Biotechnology</option>
              <option value="computer-application">Computer Applications</option>
            </select>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <label htmlFor="consent" className="text-gray-700">
              I agree to receive communication from Trident Group of Institutions regarding my enquiry.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#316b9e] text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Links Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-transform transform hover:scale-110">
          <FaFacebookF size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 transition-transform transform hover:scale-110">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 transition-transform transform hover:scale-110">
          <FaInstagram size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 transition-transform transform hover:scale-110">
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Additional Content or Division */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700">
          Join us at Trident Group of Institutions to embark on a journey of knowledge and innovation.
        </p>
      </div>
    </section>
  );
};

export default Admissions;
