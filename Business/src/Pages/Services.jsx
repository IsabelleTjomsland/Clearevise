import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  // State to track which texts are in view
  const [isInView, setIsInView] = useState({
    offerTitle: false,
    offerDescription: false,
    guideTitle: false,
    guideDescription: false,
  });

  // Create a ref for each text element you want to animate
  const offerTitleRef = React.createRef();
  const offerDescriptionRef = React.createRef();
  const guideTitleRef = React.createRef();
  const guideDescriptionRef = React.createRef();

  // Using IntersectionObserver to detect when elements are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Update state to trigger animation
          setIsInView((prevState) => ({
            ...prevState,
            [entry.target.dataset.name]: true,
          }));
        }
      },
      {
        threshold: 0.2, // When 20% of the element is in view, trigger the animation
      }
    );

    // Observe each of the text elements
    observer.observe(offerTitleRef.current);
    observer.observe(offerDescriptionRef.current);
    observer.observe(guideTitleRef.current);
    observer.observe(guideDescriptionRef.current);

    return () => observer.disconnect(); // Clean up observer when component unmounts
  }, []);

  return (
    <div className="services-container">
      <header className="services-header">
        <div className="overlay">
          <div className="prefix">Tjänster</div>
          <h1
            ref={offerTitleRef}
            data-name="offerTitle"
            className={`scroll-text ${isInView.offerTitle ? "scroll-animate" : ""}`}
          >
            Vad vi har att erbjuda!
          </h1>
          <p
            ref={offerDescriptionRef}
            data-name="offerDescription"
            className={`scroll-text ${isInView.offerDescription ? "scroll-animate" : ""}`}
          >
            Vi hjälper dig hitta den rätta systemlösningen
          </p>
        </div>
      </header>

      <div className="intro-section">
        <h1
          ref={guideTitleRef}
          data-name="guideTitle"
          className={`scroll-text ${isInView.guideTitle ? "scroll-animate" : ""}`}
        >
          Din guide till rätt Systemlösning
        </h1>
        <p
          ref={guideDescriptionRef}
          data-name="guideDescription"
          className={`scroll-text ${isInView.guideDescription ? "scroll-animate" : ""}`}
        >
          Letar du efter den perfekta mjukvarulösningen men vet inte var du ska börja? Clearevise experter finns här för att hjälpa dig! Vi erbjuder skräddarsydd rådgivning genom personliga möten, sköter kontakten med externa aktörer och kan till och med ta hand om hela processen – från idé till färdig lösning. Med Clearevise vid din sida blir vägen till rätt mjukvara både enklare och smidigare.
        </p>
      </div>

      <div className="services-background">
        <div className="services-cards">
          <div className="service-card">
            <img className="service-image" src="/hr.png" alt="HR" />
            <h2>Skräddarsydd rådgivning</h2>
            <p>Experterna erbjuder personliga möten och vägledning för att hitta den bästa mjukvarulösningen för dina behov.</p>
          </div>
          <div className="service-card">
            <img className="service-image" src="/calling.png" alt="Calling" />
            <h2>Kontakter med externa aktörer</h2>
            <p>Clearevise hjälper till att kontakta relevanta externa källor och resurser för att stödja lösningsvalet.</p>
          </div>
          <div className="service-card">
            <img className="service-image" src="/note.png" alt="Note" />
            <h2>Hantering av hela processen</h2>
            <p>Clearevise kan ta ansvar för hela processen, från behovsanalys till implementering av den valda lösningen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
