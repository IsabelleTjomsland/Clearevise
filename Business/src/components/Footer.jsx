import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Text och knapp längst upp */}
      <div className="footer-top">
        <a href="/TryFree" className="footer-button">
          Booka gratis möte!
        </a>
        <a href="/Contact" className="tryfree-button">
          Kontakta oss!
        </a>
      </div>

      {/* Logo och företagsnamn */}
      <div className="Kom-igång">
        <p> Vi hjälper dig hitta den rätta systemlösningen! </p>
      </div>
      <div className="footer-logo">
        <img src="/Logo.svg" alt="Clearevise Logo" />
        <div className="follow-us">
          <p>Följ oss:</p>
        </div> 
        {/* LinkedIn-logo som en klickbar knapp */}
        <a href="https://www.linkedin.com/in/isabelle-tjomsland-0710b2301/?originalSubdomain=no" target="_blank" rel="noopener noreferrer">
          <div className="linkedin-logo">
            <img src="/linkedin.png" alt="LinkedIn Logo" />
          </div>
        </a>
      </div>

      {/* Copyright och länkar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clearevise</p>
        <div className="footer-links">
          {["About", "Services", "Contact"].map((text) => (
            <a key={text} href={`/${text.toLowerCase()}`}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
