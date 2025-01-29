import Head from 'next/head';
import NavBar from '../pages/components/NavBar'; // Adjusted import path
import EventBanner from './components/EventBanner'; // Adjusted import path
import About from '../pages/components/About'; // Adjusted import path
import Theme from './components/Theme'; // Adjusted import path
import Admissions from '../pages/components/Admissions'; // Adjusted import path
import Contact from '../pages/components/Contact'; // Adjusted import path

export default function Home() {
  return (
    <div className="text-gray-800">
      <Head>
        <title>Trident Academy of Technology- Conclave on
          CSR for Sustainability: Action and Impact
        </title>
        <meta name="description" content="Trident Group - Innovative Education for Future Leaders" />
      </Head>

      <NavBar />

      {/* Home Section with Event Carousel */}
      <section id="home" className="overflow-hidden">
        <EventBanner />
      </section>

      {/* About Section */}
      <section id="about" className="overflow-hidden">
        <About />
      </section>

      {/* Courses Section */}
      <section id="courses" className="overflow-hidden">
        <Theme />
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="overflow-hidden">
        <Contact />
      </section>


    </div>
  );
}
