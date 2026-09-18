import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Filmography from "./components/Filmography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Filmography />
      <Contact />
      <Footer />
    </div>
  );
}
