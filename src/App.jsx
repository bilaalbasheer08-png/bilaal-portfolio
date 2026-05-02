import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Snapshot from "./sections/Snapshot";
import About from "./sections/About";
import Message from "./sections/Message";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Gallery from "./sections/Gallery";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="pt-20">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Snapshot />
      <About />
      <Message />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;