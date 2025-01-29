import Link from 'next/link';

const EventBanner = () => {
  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/event-background.jpg)' }}>
      {/* Overlay for Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 bg-opacity-50 bg-black rounded-lg">
        <h2 className="text-4xl font-bold mb-2">Trident Academy of Technology</h2>
        <p className="text-2xl font-semibold mb-4">Organizes Conclave on</p>
        <h3 className="text-3xl font-bold mb-2">CSR for Sustainability: Action and Impact</h3>
        <p className="text-xl mb-4">On 8th & 9th February 2025</p>
        <p className="text-lg mb-6">In collaboration with SACRED Foundation</p>
        
        {/* Registration Link */}
        <Link href="/register">
          <button className="px-8 py-3 bg-[#316b9e] text-white text-xl font-semibold rounded-full hover:bg-[#214e70] transition-all duration-300">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventBanner;
