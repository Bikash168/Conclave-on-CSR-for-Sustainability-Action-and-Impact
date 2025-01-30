import React from "react";
import { motion } from "framer-motion";

const GuestDelegates = () => {
  const runningImages = [
    "/path-to-ngo-image1.jpg",
    "/path-to-ngo-image2.jpg",
    "/path-to-ngo-image3.jpg",
    // Add more image paths as needed
  ];

  return (
    <div className="container mx-auto p-6 space-y-12">
      {/* Guest Delegates Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Guest Delegates</h2>
        <motion.div
          className="flex space-x-4 overflow-hidden"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {runningImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Running NGO ${index + 1}`}
              className="w-48 h-48 object-cover rounded-xl shadow-md"
            />
          ))}
        </motion.div>
      </section>

      {/* Organizing Committee Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Organizing Committee</h2>

        {/* Patrons */}
        <div>
          <h3 className="text-2xl font-semibold">Patrons</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Smt. Smitarani Panigrahi</strong> - Chairperson, Dinabandhu Foundation for
              Educational Research and Socio-Economic Development
            </li>
            <li>
              <strong>Dr. B. B. Panigrahi</strong> - Chief Mentor, Trident Group of Institutions
            </li>
          </ul>
        </div>

        {/* Conveners */}
        <div>
          <h3 className="text-2xl font-semibold">Conveners</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Prof. Dr. D N Pattnaik</strong> - Principal, Trident Academy of Technology
            </li>
            <li>
              <strong>Prof. P. K. Mohanty</strong> - Dean, Department of Business Administration
            </li>
          </ul>
        </div>

        {/* Co-ordinators */}
        <div>
          <h3 className="text-2xl font-semibold">Co-ordinators</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Dr. Nargis Begum</strong> - HOD, Dept. of Business Administration
            </li>
            <li>
              <strong>Dr. Diptimayee Sahoo</strong> - Asso. Prof., Dept. of Business Administration
            </li>
          </ul>
        </div>

        {/* Guest List */}
        <div>
          <h3 className="text-2xl font-semibold">List of Guests</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dr. Prashant Kumar Hota</strong> - Executive Vice President, & Group Head CSR & Education, Jindal Steel & Power, Odisha</li>
            <li><strong>Mr. Bhowmik Shah</strong> - Founder & CEO, CSRBOX</li>
            <li><strong>Mr. Jayanta Kumar Mohanty</strong> - Head Eastern Region - CSR, Adani Foundation</li>
            <li><strong>Dr. Pratyush Kumar Panda</strong> - Chief Executive Officer - One Stage, MD - CPF</li>
            <li><strong>Ms. Munmun Mittra</strong> - GM CSR, RSP SAIL</li>
            <li><strong>Mr. Dilip Kumar Mohanty</strong> - Group Head HR, Jayswal Neco Industries Ltd</li>
            <li><strong>Mr. Ambika Prasad Nanda</strong> - Head CSR, Tata Steel, Odisha</li>
            <li><strong>Mr. Prasanta Biswal</strong> - Head CSR & Corporate Relations, JSW Group, Odisha</li>
            <li><strong>Mr. Debasis Satapathy</strong> - CGM - HR, CSR Head, NBCC (India) Limited (Govt of India)</li>
            <li><strong>Mr. Ashutosh Das</strong> - Sr Manager CSR, TATA Steel</li>
            <li><strong>Ms. Abha Mishra</strong> - Head of Office, UNDP, Odisha</li>
            <li><strong>Dr. Lopamudra Priyadarshini</strong> - Assistant Vice President, Hindalco Industries Limited, Odisha</li>
            <li><strong>Dr. Yusuf Ali Solanki</strong> - GM - HR, EMAMI PAPER MILLS LIMITED</li>
            <li><strong>Mr. Alok Kumar Pal</strong> - Director (HR), Odisha Mining Corporation (OMC)</li>
            <li><strong>Mr. B K Mishra</strong> - President, Odisha CSR Forum</li>
            <li><strong>Mr. Bibhudendu Panda</strong> - Associate Vice President & Head CSR, Vedanta</li>
            <li><strong>Mr. Ashok Kumar Gupta</strong> - CEO, Dalmia Bharat Foundation</li>
            <li><strong>Ms. Shaifalika Panda</strong> - Trusty & CEO, BIPF, Imfa Group</li>
            <li><strong>Ms. Gayatri Mishra Oleti</strong> - CSR Head, L & T Trust, Mumbai</li>
            <li><strong>Mr. Anurag Pratap</strong> - VP CSR, Capgemini, Mumbai</li>
            <li><strong>Mr. Barun Varun Kumar</strong> - CSR Head Esten Region, HDFC, Kolkata</li>
            <li><strong>Mr. Matilda</strong> - CSR Head, Yes Bank, Mumbai</li>
            <li><strong>Mr. Aswini Saxena</strong> - CEO, Gvk Varalakshmi Foundation, New Delhi</li>
            <li><strong>Mr. Pradeep Ghosal</strong> - Head CSR, TPCODL</li>
            <li><strong>Dr. Pradeep Harichandan</strong> - Project Director, CED, Bhubaneswar</li>
            <li><strong>Ms. Suparna Nanda</strong> - Head Corporate Affairs, ArcelorMittal Nippon Steel India, Bhubaneswar</li>
            <li><strong>Dr. Tapas Kumar Pattanayak</strong> - Director, HR, Nalco, Bhubaneswar</li>
            <li><strong>Dr. Niladri Bhusan Parhi</strong> - Deputy Executive Director Social Relations-HR & Corporate, Dalmia Cement, Rajgangpur</li>
            <li><strong>Shri A.B. Pradhan</strong> - Director - HR, HAL, Bangalore</li>
            <li><strong>Mr. Bichitrananda Behera</strong> - GM(CSR), MCL, Burla</li>
            <li><strong>Ms. Gayatri Mishra Oleti</strong> - CSR-Head, L&T Trust, Mumbai</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GuestDelegates;
