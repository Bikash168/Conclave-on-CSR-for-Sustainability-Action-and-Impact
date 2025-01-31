import React from "react";

const GuestDelegates = () => {
  const panelists = [
    {
      image: "/images/panelist1.jpg",
      name: "Dr. Prashant Kumar Hota",
      designation: "Executive Vice President, Jindal Steel & Power"
    },
    {
      image: "/images/panelist2.jpg",
      name: "Mr. Bhowmik Shah",
      designation: "Founder & CEO, CSRBOX"
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Jayanta Kumar Mohanty",
      designation: "Head Eastern Region - CSR, Adani Foundation"
    }
  ];

  const ngos = [
    "/images/ngo1.jpg",
    "/images/ngo2.jpg",
    "/images/ngo3.jpg"
  ];

  const organizingCommittee = {
    patrons: [
      {
        image: "/images/patron1.jpg",
        name: "Smt. Smitarani Panigrahi",
        designation: "Chairperson, Dinabandhu Foundation"
      },
      {
        image: "/images/patron2.jpg",
        name: "Dr. B. B. Panigrahi",
        designation: "Chief Mentor, Trident Group of Institutions"
      }
    ],
    conveners: [
      {
        image: "/images/convener1.jpg",
        name: "Prof. Dr. D N Pattnaik",
        designation: "Principal, Trident Academy of Technology"
      },
      {
        image: "/images/convener2.png",
        name: "Prof. P. K. Mohanty",
        designation: "Dean, Business Administration"
      }
    ],
    coordinators: [
      {
        image: "/images/coordinator1.jpg",
        name: "Dr. Nargis Begum",
        designation: "HOD, Dept. of Business Administration"
      },
      {
        image: "/images/coordinator2.jpg",
        name: "Dr. Diptimayee Sahoo",
        designation: "Asso. Prof., Dept. of Business Administration"
      }
    ]
  };

  return (
    <div className="container mx-auto p-6 space-y-12">
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

    {/* Organizing Committee Section */}
<section className="text-center">
  <h2 className="text-3xl font-bold mb-6 text-[#316b9e]">Organizing Committee</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {Object.entries(organizingCommittee).map(([title, members], index) => (
      <div key={index} className="text-center">
        <h3 className="text-2xl font-semibold mb-4">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        {members.map((member, idx) => (
          <div key={idx} className="mb-6">
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
    ))}
  </div>
</section>

    </div>
  );
};

export default GuestDelegates;
