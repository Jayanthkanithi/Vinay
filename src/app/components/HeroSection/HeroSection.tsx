import Image from 'next/image';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
      {/* import Image from 'next/image'; */}

        <Image src="/Profile.png" alt="me" width={160} height={160} className="hero__image" />

        <div>
          <h1>Hey, I&rsquo;m Yamini 👋</h1>
          <p>
            AI Enthusiast | Cloud Certified
          </p>
          <a href="/Yamini-Durga-Gudiganti-.pdf" download className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;