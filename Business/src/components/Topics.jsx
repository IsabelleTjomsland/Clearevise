// src/components/HomePage/Topics/Topics.jsx
import React from 'react';
import './Topics.css'; // Ensure you have the correct path for your CSS

const Topics = () => {
  return (
    <div className="topics-container">
      <div className="topics-content">
        <div className="topics-text">
          <h2>Få Expert Hjelp</h2>
          <p>
            Våra specialister, Vegard och Veronica Tjomsland, har tillsammans över 20 års erfarenhet inom HRM-relaterade system. 
            Veronica bidrar med 13 års expertis, medan Vegard har 7 års erfarenhet. 
            De hjälper er genom hela processen och kan även stödja er i implementeringen av det rätta systemet.
          </p>
        </div>
        <div className="topics-image">
          <img src="/Veronica.png" alt="Veronica" />
        </div>
      </div>
    </div>
  );
};

export default Topics;
