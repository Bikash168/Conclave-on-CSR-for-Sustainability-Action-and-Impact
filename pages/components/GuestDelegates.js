import React from "react";

const GuestDelegates = () => {
  const panelists = [
    {
      image: "/images/panelist26.jpg",
      name: "Shri. Manas Ranjan Panda",
      designation: "Special Secretary to Government, E&IT Department,Government of Odisha & Managing Director OCAC",
    },
    {
      image: "/images/panelist15.jpg",
      name: "Mr. Subhadarshi Mishra",
      designation: "Managing Director, SPARC",
    },
 
    {
      image: "/images/panelist2.jpg",
      name: "Prof. Samrat L. Sabat",
      designation: "CASEST, University of Hyderabad",
    },
    {
      image: "/images/panelist3.jpg",
      name: "Prof. Vijay Shankar Pasupureddi",
      designation: "Department of ECE, IIT Bhubaneswar",
    },
    {
      image: "/images/panelist4.jpg",
      name: "Mr. Pravin Kumar Gupta",
      designation: "Senior Director, ARF Design Pvt Ltd",
    },
    {
      image: "/images/panelist5.jpg",
      name: "Mr. Omkarnath Suprabhat Rath",
      designation: "Chief Operation Officer - Assam Startup, Ex PD-MeitY, Govt. of India",
    },
    {
      image: "/images/panelist6.jpg",
      name: "Mr. Manoj Gupta",
      designation: "CEO, TP Renewable Microgrid Ltd., Delhi",
    },
    {
      image: "/images/panelist7.jpeg",
      name: "Mr. Asok K. Choudhury",
      designation: "Consultant-Renewables, TPCODL",
    },
    {
      image: "/images/panelist8.png",
      name: "Mr. Soumyaranjan Aich",
      designation: "Director Technical, OREDA",
    },
    {
      image: "/images/panelist9.jpg",
      name: "Mr. Mahesh Dash",
      designation: "Chief Project Manager, RE-GRIDCO Ltd, Odisha",
    },
    {
      image: "/images/panelist10.png",
      name: "Dr. Chandrasekhar Perumalla",
      designation: "School of Electrical and Computer Sciences, IIT Bhubaneswar",
    },
    {
      image: "/images/panelist11.jpg",
      name: "Mr. Bikash Mohanty",
      designation: "Manager Ele, Aarti Steels Ltd, Odisha",
    },
    {
      image: "/images/panelist12.png",
      name: "Mr. Sarthak Bhagat",
      designation: "CEO, White Shark Energy Pvt. Ltd, Odisha",
    },
    {
      image: "/images/panelist13.jpg",
      name: "Mr. Pradip Thaker",
      designation: "Country Head & VP, D-Matrix",
    },
    {
      image: "/images/panelist14.png",
      name: "Mr. P.K. Parida",
      designation: "Retired Senior Scientist, Odisha Space Application Center",
    },
  
    {
      image: "/images/panelist16.jpg",
      name: "Dr. Krushna Chandra Gouda",
      designation: "Senior Principal Scientist, CSIR Fourth Paradigm Institute",
    },
    {
      image: "/images/panelist17.png",
      name: "Dr. Gynendranath Mohapatra",
      designation: "Senior Principal Scientist, CSIR Fourth Paradigm Institute",
    },
    {
      image: "/images/panelist18.png",
      name: "Dr. Debadatta Swain",
      designation: "School of Earth, Ocean, and Climate Sciences, IIT Bhubaneswar",
    },
    {
      image: "/images/panelist19.jpg",
      name: "Mr. Bodhisattwa Sanghapriya",
      designation: "Founder & CEO, IG Drones",
    },
    {
      image: "/images/panelist20.jpg",
      name: "Mr. Deepak Kumar Nath",
      designation: "CEO & Founder, Threatsys Technologies",
    },
    {
      image: "/images/panelist21.jpg",
      name: "Dr. Rabindra Narayan Behera",
      designation: "Member of Parliament, Jajpur, Odisha; Standing Committee Member of Communications and IT",
    },
    {
      image: "/images/panelist22.jpg",
      name: "Mr. Niladri Bihari Mohanty",
      designation: "Scientist-D and Joint Director (IT), National Informatics Center",
    },
    {
      image: "/images/panelist23.png",
      name: "Mr. Kali Prasad Sahani",
      designation: "Cyber Security Lead, VISA",
    },
    {
      image: "/images/panelist24.jpg",
      name: "Mr. Amit Kumar Das",
      designation: "Chief Information Officer, CSM Technologies Pvt Ltd",
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
    advisors: [
      {
        image: "/images/convener1.jpg",
        name: "Prof. Dr. D N Pattanayak",
        designation: "Principal, Trident Academy of Technology",
      },
      {
        image: "/images/convener2.jpg",
        name: "Prof.  Abhaya Kumar Samal",
        designation: "Dean, School of Computing, Trident Academy of Technology",
      },
    ],
    conveners: [
      {
        image: "/images/coordinator1.jpg",
        name: "Dr. Sakuntala Mahapatra",
        designation: "Dean, School of Engineering and Dean (R & D),Trident Academy of Technology.",
      },
      
    ],
  };

  return (
    <div id="panelists" className="container mx-auto p-6 space-y-12">
      {/* Panelists Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#316b9e] font-serif">Panelists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {panelists.map((panelist, index) => (
            <div key={index} className="text-center">
              <img
                src={panelist.image}
                alt={panelist.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="font-semibold font-serif">{panelist.name}</h3>
              <p className="text-sm text-gray-600 font-serif">{panelist.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizing Committee Section with background color and margin from top */}
      <div className="container mx-auto p-6 space-y-12 bg-[#f0f8ff] mt-12">
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-10 text-[#316b9e] font-serif">Organizing Committee</h2>

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
                      <h3 className="font-semibold font-serif">{member.name}</h3>
                      <p className="text-sm text-gray-600 font-serif">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Conveners */}
            {organizingCommittee.conveners && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6 font-serif">Convener</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {organizingCommittee.conveners.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"
                      />
                      <h3 className="font-semibold font-serif">{member.name}</h3>
                      <p className="text-sm text-gray-600 font-serif">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coordinators */}
            {organizingCommittee.advisors && (
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-6">Advisors</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {organizingCommittee.advisors.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-md"
                      />
                      <h3 className="font-semibold font-serif">{member.name}</h3>
                      <p className="text-sm text-gray-600 font-serif">{member.designation}</p>
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
