import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import TryFree from "./Pages/TryFree";
import Policy from "./Pages/Policy"; // Import Policy

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tryfree" element={<TryFree />} />
            <Route path="/policy" element={<Policy />} /> {/* Lägg till denna rad */}
          </Routes>
        </div>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
