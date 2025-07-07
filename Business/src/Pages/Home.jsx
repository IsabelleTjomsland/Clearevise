import { motion, useAnimation } from 'framer-motion';  
import React, { useEffect, useState } from "react";
import Header from "../components/Header"; 
import { useTranslation } from 'react-i18next';
import "./Home.css"; 

const Home = () => {
  const { t } = useTranslation();
  const [touch, setTouch] = useState(false);
  const [counter, setCounter] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    controls.start({ opacity: scrollPosition > 100 ? 1 : 0, x: scrollPosition > 100 ? 0 : -100 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (counter < 20) {
      const timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 100);
      return () => clearInterval(timer);
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
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          >
            <h1>Din väg till rätt HRM-system!</h1>
            <p>Vår specialist, Vegard Tjomsland, har 7 års erfarenhet av HRM-relaterade system. Han vägleder dig genom hela processen och kan även stödja dig i att implementera rätt system.</p>
          </motion.div>

          {/* Only Vegard shown in center */}
          <div className="topics-image single-image">
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              whileTap={{ scale: 1.1 }}
            >
              <img src="/Vegard.png" alt="Vegard" className="larger-image" />
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
