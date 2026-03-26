import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Style obligatoire pour les animations

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PourquoiNous from "./pages/PourquoiNous";
import Avis from "./pages/Avis";
import MentionsLegales from "./pages/MentionsLegales";

// Components
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
      once: true,     // L'animation ne se joue qu'une fois
      offset: 100,    // Déclenche l'animation 100px avant que l'élément soit visible
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PourquoiNous" element={<PourquoiNous />} />
        <Route path="/Avis" element={<Avis />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}