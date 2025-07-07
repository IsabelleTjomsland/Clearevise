import { motion, useAnimation } from 'framer-motion';  
import React, { useEffect, useState } from "react";
import Header from "../components/Header"; 
import { useTranslation } from 'react-i18next';
import "./Home.css"; 

const Home = () => {
  const { t } = useTranslation();
  const [touch, setTouch] = useState(false); // Track whether image is touched
  const [counter, setCounter] = useState(0); // State for counter
  
  // Animation controls for scroll
  const controls = useAnimation();

  // Scroll effect on text
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Adjust text movement based on scroll position
    controls.start({ opacity: scrollPosition > 100 ? 1 : 0, x: scrollPosition > 100 ? 0 : -100 });
  };

  // Hook to attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect for the counter
  useEffect(() => {
    if (counter < 20) {
      const timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 100); // Increase by 1 every 100ms
      return () => clearInterval(timer); // Clean up the interval on component unmount
    }
  }, [counter]);

  return (
    <div className="page-container">
      {/* Full-Page Background Video */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/Ice.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Home Content */}
      <div className="home-container">
        <Header />
      </div>

      {/* Counter and Experience Text */}
      <div className="experience-container">
        <h2>{counter} </h2>
        <p>Vi har 20 års kombinerad erfarenhet i HR-system!</p>
      </div>

      {/* Topics Section */}
      <div className="topics-container-background"></div>
      <div className="topics-container">
        <div className="topics-content">
          {/* Text to the left */}
          <motion.div
            className="topics-text"
            initial={{ opacity: 0, x: -100 }} // Start off screen
            animate={controls} // Control animation with scroll
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          >
            <h1>Din väg till rätt HRM-system!</h1>
            <p>Våra specialister, Vegard och Veronica Tjomsland, har över 20 års samlad erfarenhet av HRM-relaterade system. Veronica har 13 års expertis, medan Vegard har 7 års erfarenhet. De vägleder dig genom hela processen och kan även stödja dig i att implementera rätt system.</p>
          </motion.div>

          {/* Images to the right */}
          <div className="topics-image">
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, y: 50 }} // Start off screen
              animate={{ opacity: 1, y: 0 }} // Animate to visible
              transition={{ duration: 1.5, delay: 0.3 }} // Delay to stagger animation
              whileTap={{ scale: 1.1 }} // Scale up the image on touch
            >
              <img src="/Veronica.png" alt="Veronica" />
              <div className="name-box">
                <h3>Veronica Tjomsland</h3>
                <p>13 års erfarenhet i HR-system</p>
              </div>
            </motion.div>

            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, y: 50 }} // Start off screen
              animate={{ opacity: 1, y: 0 }} // Animate to visible
              transition={{ duration: 1.5, delay: 0.5 }} // Delay to stagger animation
              whileTap={{ scale: 1.1 }} // Scale up the image on touch
            >
              <img src="/Vegard.png" alt="Vegard" />
              <div className="name-box">
                <h3>Vegard Tjomsland</h3>
                <p>7 års erfarenhet i HR-system</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="services-section">
        <div className="services-intro">
          <h1>Varför välja Clearevise?</h1>
          <p>Prova våra olika tjänster för att se vad som passar dig bäst! <br/>
           Vi erbjuder en rad tjänster som är utformade för att möta dina behov.</p>
        </div>
      </section>
    
      <div className="services-boxes">
      <div className="service-box">
        <div className="prefix"></div>
        <p>1</p>
        <h3>Skräddarsydd rådgivning </h3>
        <p>Experterna erbjuder personliga möten och vägledning för att hitta den bästa mjukvarulösningen för dina behov.</p>
        <img className="service-image" src="/hi.png" alt="External" />
      </div>
      <div className="service-box">
        <div className="prefix"></div>
        <p>2</p>
        <h3>Kontakter med externa aktörer</h3>
        <p>Clearevise hjälper till att kontakta relevanta externa källor och resurser för att stödja lösningsvalet.</p>
        <img className="service-image" src="/kiko.png" alt="External" />
      </div>
      <div className="service-box">
        <div className="prefix"></div>
        <p>3</p>
        <h3>Hantering av hela processen</h3>
        <p>Clearevise kan ta ansvar för hela processen, från behovsanalys till implementering av den valda lösningen.</p>
        <img className="service-image" src="/fanta.png" alt="External" />
      </div>
    </div>
  </div>
  );
};

export default Home;
