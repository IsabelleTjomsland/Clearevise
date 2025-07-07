import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [imageScaling, setImageScaling] = useState({ veronica: false, vegard: false });
  const [scrolled, setScrolled] = useState(false);  // Track scroll state for animation

  // Set up the intersection observer for Veronica's and Vegard's images
  const { ref: veronicaRef, inView: veronicaInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is in the viewport
  });

  const { ref: vegardRef, inView: vegardInView } = useInView({
    threshold: 0.2,
  });

  // Track scroll direction (up or down)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Check if the user is scrolling up or down
      if (window.scrollY < lastScrollY) {
        setIsScrollingUp(true); // Scrolling up
      } else {
        setIsScrollingUp(false); // Scrolling down
      }

      // Check if scrolled past a certain threshold for animation
      if (window.scrollY > 100) {  // Add condition to add scrolled class
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Trigger scaling effect if the images are in view and scroll up
      if (veronicaInView || vegardInView || isScrollingUp) {
        setImageScaling({
          veronica: veronicaInView || isScrollingUp,
          vegard: vegardInView || isScrollingUp,
        });
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [veronicaInView, vegardInView, isScrollingUp]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="overlay">
          <div className="prefix">Om</div>
          <h1>Vår berättelse </h1>
          <p>Vi gör det enklare att hitta rätt Systemlösning!</p>
        </div>
      </header>

      <section className="our-story">
        <img src="/brush.png" alt="About Us" className="brush-img" />
        <h1>Förenkla din resa med skräddarsydda systemlösningar!</h1>
        <p>
          På Clearevise brinner vi för att förenkla din resa mot rätt mjukvarulösningar. 
          Med över 20 års sammanlagd erfarenhet inom HRM-relaterade system, erbjuder våra specialister, 
          Veronica och Vegard Tjomsland, expertstöd genom hela processen – från rådgivning till implementering.
        </p>
      </section>

      <section className="Experterna">
        <h1> Möt våra experter</h1>
        <div className="expert-container">
          <div className="expert-box">
            <img
              ref={veronicaRef}
              className={`expert-img ${imageScaling.veronica ? 'scale-up' : ''}`}
              src="/Veronica.png"
              alt="Veronica"
            />
            <div className="name-box">
              <h3>Veronica Tjomsland </h3>
              <p>13 års erfarenhet i HR system</p>
            </div>
          </div>
          <div className="expert-box">
            <img
              ref={vegardRef}
              className={`expert-img ${imageScaling.vegard ? 'scale-up' : ''}`}
              src="/Vegard.png"
              alt="Vegard"
            />
            <div className="name-box">
              <h3>Vegard Tjomsland</h3>
              <p>7 års erfarenhet i HR system</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
