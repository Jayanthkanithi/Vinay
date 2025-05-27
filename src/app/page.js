import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ContactForm from "./components/Contact/Contact";
import Education from "./components/Education/Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Education />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  );
}
