import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

// Importation statique pour la page d'accueil (critique pour la vitesse d'affichage initiale)
import Home from "./pages/Home";

// Importations paresseuses (lazy loading) pour alléger le bundle principal
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const PourquoiNous = lazy(() => import("./pages/PourquoiNous"));
const Avis = lazy(() => import("./pages/Avis"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Galerie = lazy(() => import("./pages/Galerie"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const ZonesIntervention = lazy(() => import("./pages/ZonesIntervention"));
const ElagageVille = lazy(() => import("./pages/ElagageVille"));
const AbattageVille = lazy(() => import("./pages/AbattageVille"));

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
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Chargement...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pourquoi-nous" element={<PourquoiNous />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/elagage/:villeSlug" element={<ElagageVille />} />
          <Route path="/abattage/:villeSlug" element={<AbattageVille />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}