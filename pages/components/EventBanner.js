import Link from 'next/link';

const EventBanner = () => {
  return (
    <div
      className="relative w-full h-[70vh] sm:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/event-background.jpg)' }}
    >
      {/* Overlay for Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-opacity-50 bg-black rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
          Trident Academy of Technology
        </h2>
        <p className="text-lg sm:text-xl font-medium mb-4">
          Organizes Conclave on
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
          CSR for Sustainability: Action to Impact
        </h3>
        <p className="text-base sm:text-lg mb-4">On 8th & 9th February 2025</p>

        {/* Logo Section */}
        <div className="mb-4">
          <p className="text-sm sm:text-base mb-6">
            In Association with

            <img
              src="/images/sacred-foundation-logo.png"
              alt="SACRED Foundation Logo"
              className="mx-auto w-28 sm:w-32 md:w-40 h-auto mb-4"
            />
          </p>
        </div>

        {/* Registration Link */}
        <Link href="https://forms.gle/YCkAm4XtJDdSqqAD7" passHref>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#316b9e] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#214e70] transition-all duration-300">
            Register Now
          </button>
        </Link>

      </div>
    </div>
  );
};

export default EventBanner;
