import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";
import PourquoiNous from "./pages/PourquoiNous";
import Footer from "./components/Footer";
import Avis from "./pages/Avis";
import NotFound from "./components/NotFound";
import MentionsLegales from "./pages/MentionsLegales";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PourquoiNous" element={<PourquoiNous />} />
        <Route path="/Avis" element={<Avis />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </Router>
  );
}