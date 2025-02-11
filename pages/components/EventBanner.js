import Link from 'next/link';
import { motion } from 'framer-motion';

const EventBanner = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden bg-blue-900">
      {/* Animated Black Pixel Overlay */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 bg-gray-300 opacity-70 rotate-45 shadow-lg"
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%', opacity: 0 }}
            animate={{ y: ['0%', '100%'], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: Math.random() * 8 + 4, repeat: Infinity, ease: 'linear' }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Overlay for Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-opacity-60 bg-black rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight font-serif">
          Trident Academy of Technology
        </h2>
        <p className="text-lg sm:text-xl font-medium mb-4 font-sans">
          Organizes A National Conclave on
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight font-mono">
          Energy, Semicon, Cybersecurity and AI
        </h3>
        <p className="text-base sm:text-lg mb-4 font-sans">On 14th & 15th February 2025</p>

        {/* Logo Section */}
        <div className="mb-4">
          <p className="text-sm sm:text-base mb-6 font-sans">In Association with</p>
          <img
            src="/images/sacred-foundation-logo.png"
            alt="SACRED Foundation Logo"
            className="mx-auto w-591 sm:w-591 md:w-591 h-auto mb-4"
          />
        </div>

        {/* Registration Link */}
        <Link href="https://forms.gle/YCkAm4XtJDdSqqAD7" passHref>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#316b9e] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#214e70] transition-all duration-300 font-serif">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventBanner;