import React from "react";

const GuestDelegates = () => {
  const panelists = [
    {
      image: "/images/panelist26.jpg",
      name: "Prof.(Dr.) Ashish Ghosh",
      designation: "Director, IIIT, Bhubaneswar",
      category: "Chief Guest",
    },
    {
      image: "/images/panelist30.jpg",
      name: "Dr. Namrata Misra",
      designation: "CEO, Bhubaneswar City Knowledge Innovation Cluster Foundation (BCKIC)",
      category: "Guest of Honour",
    },
    {
      image: "/images/panelist15.jpg",
      name: "Mr. Subhadarshi Mishra",
      designation: "Managing Director, SPARC",
      category: "Guest of Honour",
    },
    {
      image: "/images/panelist2.jpg",
      name: "Prof. Samrat L. Sabat",
      designation: "CASEST, University of Hyderabad",
      category: "Panelist"
    },
    {
      image: "/images/panelist3.jpg",
      name: "Prof. Vijay Shankar Pasupureddi",
      designation: "Department of ECE, IIT Bhubaneswar",
      category: "Panelist"
    },
    {
      image: "/images/panelist4.jpg",
      name: "Mr. Pravin Kumar Gupta",
      designation: "Senior Director, ARF Design Pvt Ltd",
      category: "Panelist"
    },
    {
      image: "/images/panelist5.jpg",
      name: "Mr. Omkarnath Suprabhat Rath",
      designation: "Chief Operation Officer - Assam Startup, Ex PD-MeitY, Govt. of India",
      category: "Panelist"
    },
    {
      image: "/images/panelist27.jpg",
      name: "Mr. Suchitav Khadanga",
      designation: "CEO, RFIC Technologies, Bangalore",
      category: "Panelist"
    },
    {
      image: "/images/panelist7.jpg",
      name: "Mr. B. B. Mehta",
      designation: "Director (SLDC and Projects), OPTCL",
      category: "Panelist"
    },
    {
      image: "/images/panelist6.jpg",
      name: "Mr. Manoj Gupta",
      designation: "CEO, TP Renewable Microgrid Ltd., Mumbai",
      category: "Panelist"
    },
    
       {
      image: "/images/panelist9.jpg",
      name: "Mr. Mahesh Dash",
      designation: "Chief Project Manager, RE-GRIDCO Ltd, Odisha",
      category: "Panelist"
    },
    {
      image: "/images/panelist10.png",
      name: "Dr. Chandrasekhar Perumalla",
      designation: "School of Electrical and Computer Sciences, IIT Bhubaneswar",
      category: "Panelist"
    },
    {
      image: "/images/panelist11.jpg",
      name: "Mr. Bikash Mohanty",
      designation: "Manager Ele, Aarti Steels Ltd, Odisha",
      category: "Panelist"
    },
    {
      image: "/images/panelist12.png",
      name: "Mr. Sarthak Bhagat",
      designation: "CEO, White Shark Energy Pvt. Ltd, Odisha",
      category: "Panelist"
    },
    {
      image: "/images/panelist14.png",
      name: "Mr. P.K. Parida",
      designation: "Retired Senior Scientist, Odisha Space Application Center",
      category: "Panelist"
    },
    
    {
      image: "/images/panelist28.jpg",
      name: "Mr. Krishnendu Dasgupta",
      designation: "Head (Emerging Tech & Innovation), SPARC Pvt Ltd",
      category: "Panelist"
    },
    {
      image: "/images/panelist16.jpg",
      name: "Dr. Krushna Chandra Gouda",
      designation: "Senior Principal Scientist, CSIR Fourth Paradigm Institute",
      category: "Panelist"
    },
    {
      image: "/images/panelist18.png",
      name: "Dr. Debadatta Swain",
      designation: "School of Earth, Ocean, and Climate Sciences, IIT Bhubaneswar",
      category: "Panelist"
    },
    {
      image: "/images/panelist19.jpg",
      name: "Mr. Bodhisattwa Sanghapriya",
      designation: "Founder & CEO, IG Drones",
      category: "Panelist"
    },
    {
      image: "/images/panelist21.jpg",
      name: "Dr. Rabindra Narayan Behera",
      designation: "Member of Parliament, Jajpur, Odisha; Standing Committee Member of Communications and IT",
      category: "Panelist"
    },
    {
      image: "/images/panelist22.jpg",
      name: "Mr. Niladri Bihari Mohanty",
      designation: "Scientist-D and Joint Director (IT), National Informatics Center",
      category: "Panelist"
    },
      
    {
      image: "/images/panelist23.png",
      name: "Mr. Kali Prasad Sahani",
      designation: "Cyber Security Lead, VISA",
      category: "Panelist"
    },
    {
      image: "/images/panelist13.jpg",
      name: "Mr. Somen Das",
      designation: "Associate Director, Accenture",
      category: "Panelist"
    },
     
    {
      image: "/images/panelist24.jpg",
      name: "Mr. Amit Kumar Das",
      designation: "Chief Information Officer, CSM Technologies Pvt Ltd",
      category: "Panelist"
    },
    {
      image: "/images/panelist20.jpg",
      name: "Mr. Deepak Kumar Nath",
      designation: "CEO & Founder, Threatsys Technologies",
      category: "Panelist"
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
        name: "Prof. Abhaya Kumar Samal",
        designation: "Dean, School of Computing, Trident Academy of Technology",
      },
    ],
    conveners: [
      {
        image: "/images/coordinator1.jpg",
        name: "Dr. Sakuntala Mahapatra",
        designation: "Dean, School of Engineering and Dean (R & D), Trident Academy of Technology.",
      },
    ],
  };

  const chiefGuest = panelists.filter((p) => p.category === "Chief Guest");
  const guestOfHonour = panelists.filter((p) => p.category === "Guest of Honour");
  const panelMembers = panelists.filter((p) => p.category === "Panelist");

  return (
    <div id="panelists" className="container mx-auto p-6 space-y-12">
      <h2 className="text-3xl font-extrabold  text-center text-[#316b9e] mb-10">Our Esteemed Panelists</h2>
      {/* Chief Guest Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Chief Guest</h2>
        <div className="flex justify-center">
          {chiefGuest.map((guest, index) => (
            <div key={index} className="flex flex-col items-center text-center mx-4">
              <img src={guest.image} alt={guest.name} className="w-48 h-48 rounded-full shadow-lg mb-4" />
              <h3 className="text-xl font-semibold">{guest.name}</h3>
              <p className="text-gray-600">{guest.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guest of Honour Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Guests of Honour</h2>
        <div className="flex justify-center">
          {guestOfHonour.map((guest, index) => (
            <div key={index} className="flex flex-col items-center text-center mx-4">
              <img src={guest.image} alt={guest.name} className="w-40 h-40 rounded-full shadow-lg mb-4" />
              <h3 className="text-xl font-semibold">{guest.name}</h3>
              <p className="text-gray-600">{guest.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Panelists Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Panelists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {panelMembers.map((panelist, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={panelist.image} alt={panelist.name} className="w-32 h-32 rounded-full shadow-lg mb-4" />
              <h3 className="text-lg font-semibold">{panelist.name}</h3>
              <p className="text-gray-600">{panelist.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizing Committee Section */}
      <div className="container mx-auto p-6 space-y-12 bg-[#f0f8ff] mt-12">
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-10 text-[#316b9e] font-serif">Organizing Committee</h2>

          {/* Patrons Section */}
          <h3 className="text-2xl font-semibold mb-6">Patrons</h3>
          <div className="flex justify-center">
            {organizingCommittee.patrons.map((patron, index) => (
              <div key={index} className="flex flex-col items-center text-center mx-4">
                <img src={patron.image} alt={patron.name} className="w-32 h-32 rounded-full shadow-lg mb-4" />
                <h3 className="text-lg font-semibold">{patron.name}</h3>
                <p className="text-gray-600">{patron.designation}</p>
              </div>
            ))}
          </div>

          {/* Advisors Section */}
          <h3 className="text-2xl font-semibold mt-10 mb-6">Advisors</h3>
          <div className="flex justify-center">
            {organizingCommittee.advisors.map((advisor, index) => (
              <div key={index} className="flex flex-col items-center text-center mx-4">
                <img src={advisor.image} alt={advisor.name} className="w-32 h-32 rounded-full shadow-lg mb-4" />
                <h3 className="text-lg font-semibold">{advisor.name}</h3>
                <p className="text-gray-600">{advisor.designation}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestDelegates;
