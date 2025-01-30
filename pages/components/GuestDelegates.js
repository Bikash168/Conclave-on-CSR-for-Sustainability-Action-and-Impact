import React from "react";

const GuestDelegates = () => {
  const runningNgoImages = [
    "/path-to-ngo-image1.jpg",
    "/path-to-ngo-image2.jpg",
    "/path-to-ngo-image3.jpg",
    // Add more NGO image paths as needed
  ];

  const guestData = [
    {
      image: "/path-to-guest-image1.jpg",
      name: "Dr. Prashant Kumar Hota",
      designation: "Executive Vice President, & Group Head CSR & Education, Jindal Steel & Power, Odisha"
    },
    {
      image: "/path-to-guest-image2.jpg",
      name: "Mr. Bhowmik Shah",
      designation: "Founder & CEO, CSRBOX"
    },
    {
      image: "/path-to-guest-image3.jpg",
      name: "Mr. Jayanta Kumar Mohanty",
      designation: "Head Eastern Region - CSR, Adani Foundation"
    },
    // Add more guest objects as needed
  ];

  const organizingCommittee = [
    {
      image: "/path-to-patron1.jpg",
      name: "Smt. Smitarani Panigrahi",
      designation: "Chairperson, Dinabandhu Foundation for Educational Research and Socio-Economic Development"
    },
    {
      image: "/path-to-patron2.jpg",
      name: "Dr. B. B. Panigrahi",
      designation: "Chief Mentor, Trident Group of Institutions"
    },
    {
      image: "/path-to-convener1.jpg",
      name: "Prof. Dr. D N Pattnaik",
      designation: "Principal, Trident Academy of Technology"
    },
    {
      image: "/path-to-convener2.jpg",
      name: "Prof. P. K. Mohanty",
      designation: "Dean, Department of Business Administration"
    },
    {
      image: "/path-to-coordinator1.jpg",
      name: "Dr. Nargis Begum",
      designation: "HOD, Dept. of Business Administration"
    },
    {
      image: "/path-to-coordinator2.jpg",
      name: "Dr. Diptimayee Sahoo",
      designation: "Asso. Prof., Dept. of Business Administration"
    },
    // Add more committee members as needed
  ];

  return (
    <div className="container mx-auto p-6 space-y-12">

      {/* Guest Delegates Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Running Guest Delegates</h2>
        <div className="flex space-x-4 overflow-hidden animate-marquee">
          {guestData.map((guest, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={guest.image}
                alt={`Guest ${index + 1}`}
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">{guest.name}</span>
                <span className="text-sm text-gray-600">{guest.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* NGO Images Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Running NGO Images</h2>
        <div className="flex space-x-4 overflow-hidden animate-marquee">
          {runningNgoImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Running NGO ${index + 1}`}
              className="w-48 h-48 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </section>

      

      {/* Organizing Committee Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Organizing Committee</h2>
        <div className="flex space-x-4 overflow-hidden animate-marquee">
          {organizingCommittee.map((member, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={member.image}
                alt={`Committee Member ${index + 1}`}
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">{member.name}</span>
                <span className="text-sm text-gray-600">{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuestDelegates;
