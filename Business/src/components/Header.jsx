import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Header = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="white-header-text">
          <motion.h5 variants={textVariant} initial="hidden" animate="visible" custom={0}>
            Din partner för skräddarsydda mjukvarulösningar!
          </motion.h5>
          <motion.p variants={textVariant} initial="hidden" animate="visible" custom={1}>
            Våra specialister arbetar nära våra kunder för att skräddarsy lösningar som optimerar affärsprocesser och driver tillväxt.
          </motion.p>
          <motion.button
            className="cta-button"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            onClick={() => navigate("/tryfree")} // Navigate to TryFree page
          >
            Booka gratis möte
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
