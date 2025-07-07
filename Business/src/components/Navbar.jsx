import React, { useState } from "react";
import { Link } from "react-router-dom";
import Language from "./Language";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("sv");

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/Logo.png" alt="Clearevise Logo" className="logo" />
      </Link>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          {currentLanguage === "sv" ? "Om" : currentLanguage === "no" ? "Om Oss" : "About"}
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          {currentLanguage === "sv" ? "Tjänster" : currentLanguage === "no" ? "Tjenester" : "Services"}
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          {currentLanguage === "sv" ? "Kontakt" : currentLanguage === "no" ? "Kontakt" : "Contact"}
        </Link>
      </div>

      <Language currentLanguage={currentLanguage} changeLanguage={changeLanguage} />


      
      <Link to="/tryfree" onClick={() => setIsOpen(false)}>
        <button className="cta-button-nav">
          {currentLanguage === "sv" ? "Booka gratis möte" : currentLanguage === "no" ? "Book et gratis møte" : "Book a free meeting"}
        </button>
      </Link>
      <div></div>
    </nav>
   
     
    
  );
};

export default Navbar;
