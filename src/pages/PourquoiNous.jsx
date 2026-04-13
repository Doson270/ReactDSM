import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PourquoiNous() {
  const argumentsCles = [
    { title: "Expertise locale", desc: "Une connaissance parfaite des sols et essences de la région bordelaise." },
    { title: "Équipe Pro", desc: "Matériel de pointe et personnel assuré pour une sécurité totale." },
    { title: "Réactivité", desc: "Intervention rapide et respect strict des délais annoncés." },
    { title: "Engagement Eco", desc: "Valorisation des déchets verts et respect de la biodiversité." }
  ];

  return (
    <div className="expert-page">
      <Helmet>
        <title>Pourquoi Nous Choisir - Élagage & Jardinage Bordeaux | DS Multiservices</title>
        <meta name="description" content="Découvrez pourquoi DS Multiservices est le spécialiste de l'élagage et de l'entretien de jardin en Gironde. Expertise locale, équipe assurée, intervention rapide." />
        <meta property="og:title" content="Pourquoi Choisir DS Multiservices | Élagage Bordeaux" />
        <meta property="og:description" content="Expertise locale, équipe assurée RC Pro, réactivité et engagement écologique. Élagueur professionnel à Bordeaux et en Gironde." />
        <meta property="og:url" content="https://dsmultiservices.fr/pourquoi-nous" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.fr/pourquoi-nous" />
      </Helmet>
      <Navbar />

      <header style={{ background: "var(--primary)", color: "white", padding: "100px 20px", textAlign: "center" }}>
        <div data-aos="zoom-out">
          <h1 style={{ fontSize: "3rem" }}>Pourquoi Choisir DS Multiservices à Bordeaux</h1>
          <p style={{ color: "var(--accent)", textTransform: "uppercase", letterSpacing: "2px" }}>Qualité, Rapidité, Confiance</p>
        </div>
      </header>

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", padding: "80px 5%" }}>
        {argumentsCles.map((arg, index) => (
          <div key={arg.title}
               data-aos="fade-right"
               data-aos-delay={index * 200}
               style={{ padding: "40px", width: "280px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "15px" }}>{arg.title}</h3>
            <p style={{ fontSize: "0.95rem" }}>{arg.desc}</p>
          </div>
        ))}
      </section>

      <section data-aos="fade-up" style={{ background: "var(--primary)", color: "white", padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>Prêt à transformer votre jardin ?</h2>
        <Link to="/contact" className="btn" style={{ border: "1px solid white" }}>Contactez un expert</Link>
      </section>

<a 
  href="tel:+33776553370" 
  className="floating-call" 
  aria-label="Appeler DS Multiservices"
  onClick={() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18085079647/vELTCOrkhpscEN_U0a9D'
      });
    }
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
</a>
    </div>
  );
}