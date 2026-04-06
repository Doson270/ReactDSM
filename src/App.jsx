import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PourquoiNous from "./pages/PourquoiNous";
import Avis from "./pages/Avis";
import FAQ from "./pages/FAQ";
import Galerie from "./pages/Galerie";
import MentionsLegales from "./pages/MentionsLegales";

import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pourquoi-nous" element={<PourquoiNous />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}