import React, { useState } from "react";
import "./Language.css";

const languages = [
  { code: "sv", label: "Swedish", shortLabel: "SV" },
  { code: "no", label: "Norwegian", shortLabel: "NO" },
  { code: "en", label: "English", shortLabel: "EN" },
];

const Language = ({ currentLanguage, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="language-dropdown">
      <button className="language-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage?.shortLabel} ▾
      </button>
      {isOpen && (
        <ul className="language-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={currentLanguage === lang.code ? "active" : ""}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
