import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

// Importation statique pour la page d'accueil (critique pour la vitesse d'affichage initiale / LCP)
import Home from "./pages/Home";

// Importations paresseuses (lazy loading) pour alléger le bundle principal JS
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

// Hook personnalisé pour charger le script Google global (gtag) en différé
function useDeferredGtag(tagId) {
  useEffect(() => {
    const loadTag = () => {
      if (window.tagLoaded || !tagId) return;
      window.tagLoaded = true;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", tagId);
    };

    // Charge le script après 3 secondes ou à la première interaction pour ne pas bloquer le LCP
    const timer = setTimeout(loadTag, 3000);
    const interactionEvents = ["scroll", "mousemove", "touchstart", "keydown"];
    
    const triggerLoader = () => {
      loadTag();
      interactionEvents.forEach((event) => window.removeEventListener(event, triggerLoader));
      clearTimeout(timer);
    };

    interactionEvents.forEach((event) =>
      window.addEventListener(event, triggerLoader, { passive: true })
    );

    return () => {
      clearTimeout(timer);
      interactionEvents.forEach((event) =>
        window.removeEventListener(event, triggerLoader)
      );
    };
  }, [tagId]);
}

export default function App() {
  // Injection de ton ID Google Ads officiel de manière optimisée
  useDeferredGtag("AW-18085079647");

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