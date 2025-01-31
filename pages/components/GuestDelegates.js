import React from "react";

const GuestDelegates = () => {
  const panelists = [
    {
      image: "/images/panelist1.jpg",
      name: "Mr. Jayanta Kumar Mohanty",
      designation: "Executive Vice President, Jindal Steel & Power",
    },
    {
      image: "/images/panelist2.jpg",
      name: "Dr. Pratyush Kumar Panda",
      designation: "Founder & CEO, CSRBOX",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Dr. Lopamudra Priyadarshini",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Dr Yusuf Ali Solanki",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr.Alok Kumar Pal",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. B K Mishra",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Pradeep Ghoshal",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Vinod Kumar Purohit",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Ms. Rupali Kar",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head Eastern Region - CSR, Adani Foundation",
    },
  ];

  const ngos = ["/images/ngo1.jpg", "/images/ngo2.jpg", "/images/ngo3.jpg"];

  const organizingCommittee = {
    patrons: [
      {
        image: "/images/patron1.jpg",
        name: "Smt. Smitarani Panigrahi",
        designation: "Chairperson, Dinabandhu Foundation",
      },
      {
        image: "/images/patron2.jpg",
        name: "Dr. B. B. Panigrahi",
        designation: "Chief Mentor, Trident Group of Institutions",
      },
    ],
    conveners: [
      {
        image: "/images/convener1.jpg",
        name: "Prof. Dr. D N Pattnaik",
        designation: "Principal, Trident Academy of Technology",
      },
      {
        image: "/images/convener2.png",
        name: "Prof. P. K. Mohanty",
        designation: "Dean, Business Administration",
      },
    ],
    coordinators: [
      {
        image: "/images/coordinator1.jpg",
        name: "Dr. Nargis Begum",
        designation: "HOD, Dept. of Business Administration",
      },
      {
        image: "/images/coordinator2.jpg",
        name: "Dr. Diptimayee Sahoo",
        designation: "Asso. Prof., Dept. of Business Administration",
      },
    ],
  };

  return (
    <div id="guest-&-delegates" className="container mx-auto p-6 space-y-12">
      {/* Panelists Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#316b9e]">Panelists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {panelists.map((panelist, index) => (
            <div key={index} className="text-center">
              <img
                src={panelist.image}
                alt={panelist.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="font-semibold">{panelist.name}</h3>
              <p className="text-sm text-gray-600">{panelist.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NGO Images Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#316b9e]">NGOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ngos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`NGO ${index + 1}`}
              className="w-48 h-48 object-cover rounded-xl shadow-md mx-auto"
            />
          ))}
        </div>
      </section>

      {/* Organizing Committee Section with background color and margin from top */}
      <div className="container mx-auto p-6 space-y-12 bg-[#f0f8ff] mt-12">
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-10 text-[#316b9e]">Organizing Committee</h2>

          <div className="flex flex-col items-center space-y-10">
            {/* Patrons */}
            {organizingCommittee.patrons && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6">Patrons</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {organizingCommittee.patrons.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"
                      />
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conveners */}
            {organizingCommittee.conveners && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6">Conveners</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {organizingCommittee.conveners.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"
                      />
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coordinators */}
            {organizingCommittee.coordinators && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6">Coordinators</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {organizingCommittee.coordinators.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"
                      />
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestDelegates;
