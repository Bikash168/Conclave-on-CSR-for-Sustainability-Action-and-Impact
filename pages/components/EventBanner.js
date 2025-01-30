import Link from 'next/link';

const EventBanner = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/event-background.jpg)' }}>
      {/* Overlay for Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 bg-opacity-50 bg-black rounded-lg w-[90%] md:w-[70%] lg:w-[50%]">
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Trident Academy of Technology</h2>
        <p className="text-xl sm:text-2xl font-semibold mb-4">Organizes Conclave on</p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">CSR for Sustainability: Action and Impact</h3>
        <p className="text-lg sm:text-xl mb-4">On 8th & 9th February 2025</p>
        <div className="mb-4">
  <img 
    src="/images/sacred-foundation-logo.png" 
    alt="SACRED Foundation Logo" 
    className="mx-auto w-32 md:w-40 h-auto mb-4" 
  />
</div>

        <p className="text-base sm:text-lg mb-6">In collaboration with SACRED Foundation</p>

        {/* Registration Link */}
        <Link href="/register">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#316b9e] text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-[#214e70] transition-all duration-300">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventBanner;
