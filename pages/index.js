import Head from 'next/head';
import NavBar from '../pages/components/NavBar'; // Adjusted import path
import EventBanner from './components/EventBanner'; // Adjusted import path
import About from '../pages/components/About'; // Adjusted import path
import Theme from './components/Theme'; // Adjusted import path
import Agenda from '../pages/components/Agenda'; // Adjusted import path
import Contact from '../pages/components/Contact'; // Adjusted import path
import GuestDelegates from '../pages/components/GuestDelegates'; // Adjusted import path

export default function Home() {
  return (
    <div className="text-gray-800">
      <Head>
        <title>Trident Academy of Technology- Conclave on CSR for Sustainability: Action to Impact</title>
        <meta name="description" content="Trident Group - Innovative Education for Future Leaders" />
      </Head>

      {/* Navbar */}
      <NavBar />

      {/* Home Section with Event Carousel */}
      <section id="home" className="overflow-hidden">
        <EventBanner />
      </section>

      {/* About Section */}
      <section id="about" className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <About />
      </section>

      {/* Theme Section */}
      <section id="theme" className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <Theme />
      </section>

      {/* Guest Delegates Section */}
      <section id="guestdelegates" className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <GuestDelegates />
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <Agenda />
      </section>

      {/* Contact Section */}
      <section id="contact" className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>
    </div>
  );
}
