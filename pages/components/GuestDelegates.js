import React from "react";

const GuestDelegates = () => {
  const panelists = [
    {
      image: "/images/panelist1.jpg",
      name: "Mr. Jayanta Kumar Mohanty",
      designation: "Head Eastern Region - CSR, Adani Foundation at Adani Group",
    },
    {
      image: "/images/panelist2.jpg",
      name: "Dr. Pratyush Kumar Panda",
      designation: "Chief Executive Officer-One Stage,  MD- CPF, New Delhi",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Mr. Ambika Prasad Nanda",
      designation: "Head CSR - CSR, Tata Steel, Kalinga Nagar, Odisha",
    },
    {
      image: "/images/panelist4.jpg",
      name: "Dr. Lopamudra Priyadarshini",
      designation: "Assistant Vice President, Hindalco Industries Limited,Rayagada, Odisha",
    },
    {
      image: "/images/panelist5.jpg",
      name: "Dr. Yusuf Ali Solanki",
      designation: "GM (HR), EMAMI PAPER MILLS LIMITED, Balasore",
    },
    {
      image: "/images/panelist6.jpg",
      name: "Mr.Alok Kumar Pal",
      designation: "Director (HR), Odisha Mining Corporation (OMC), Bhubaneswar",
    },
    {
      image: "/images/panelist7.jpg",
      name: "Mr. B K Mishra",
      designation: "Chairman, Odisha CSR Forum, Bhubaneswar",
    },
    {
      image: "/images/panelist8.jpg",
      name: "Mr. Pradeep Ghoshal",
      designation: "Head-CSR, TPCODL, Bhubaneswar",
    },
    {
      image: "/images/panelist9.jpg",
      name: "Mr. Vinod Kumar Purohit",
      designation: "Chief Land & Legal Matters, Vedanta Aluminium, Vedanta Limited",
    },
    {
      image: "/images/panelist10.jpg",
      name: "Ms. Rupali Kar",
      designation: "Head, Corporate Affairs, JSW,Bhubaneswar",
    },
    {
      image: "/images/panelist11.jpg",
      name: "Dr. P.K.Sahu",
      designation: "GM HR, RSP SAIL , Rourkela",
    },
    {
      image: "/images/panelist12.jpg",
      name: "Dr. Dilip Kumar Mohanty",
      designation: "Group Head(HR), Jayswal Neco Industries Ltd, Nagpur",
    },
    {
      image: "/images/panelist13.png",
      name: "Mr. Ashutosh Das",
      designation: "Area Manager CSR, TATASTEEL, Dhenkanal",
    },
    {
      image: "/images/panelist14.jpg",
      name: "Ms. Abha Mishra",
      designation: "Head of Office-Odisha, UNDP, Bhubaneswar",
    },
    {
      image: "/images/panelist15.jpg",
      name: "Mr. Anurag Pratap",
      designation: "VP CSR, Capgemini, Mumbai",
    },
    {
      image: "/images/panelist16.jpg",
      name: "Mr. Abhijit Mohanty",
      designation: "AGM and Head, JSW, Paradeep",
    },
    {
      image: "/images/panelist17.png",
      name: "Mr. Ratan Kumar Naik",
      designation: "Programme Manager, HDFC Bank, Odisha",
    },
    {
      image: "/images/panelist18.jpg",
      name: "Dr. Prashant Kumar Hota",
      designation: "Executive Vice President, & Group Head CSR & Education, Jindal Steel & Power, Angul, Odisha",
    },
    {
      image: "/images/panelist19.jpg",
      name: "Mr. Bhowmik Shah",
      designation: "Founder & CEO, CSRBOX",
    },
    {
      image: "/images/panelist21.jpg",
      name: "Dr. Tapas Kumar Pattanayak",
      designation: "Director, HR, NALCO, Bhubaneswar",
    },
    {
      image: "/images/panelist22.jpg",
      name: "Dr. Niladri Bhusan Parhi",
      designation: "Deputy Executive Director-HR & Corporate Social Relations, Dalmia Cement, Rajgangpur",
    },
    {
      image: "/images/panelist23.jpeg",
      name: "Sri Manish Yadav",
      designation: "Manager (Environment), CMPDIL(Coal India subsidiary)",
    },
    {
      image: "/images/panelist24.jpeg",
      name: "Prof. Sutapa Pati",
      designation: "Dean, School of Sustainability XIM University",
    },
  ];



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
        name: "Prof. Dr. D N Patnaik",
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
    <div id="panelist" className="container mx-auto p-6 space-y-12">
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
