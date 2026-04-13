import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const servicesList = [
    {
      title: "Élagage",
      desc: "Élagage d'arbres toutes tailles, sécuritaire et respectueux de l'environnement.",
      items: ["Débroussaillage", "Élagage sécurisé", "Arbres malades"]
    },
    {
      title: "Taille de haies",
      desc: "Haies esthétiques et harmonieuses, entretien régulier ou ponctuel.",
      items: ["Formes personnalisées", "Gestion des déchets", "Toutes hauteurs"]
    },
    {
      title: "Entretien de jardin",
      desc: "Nettoyage complet, tonte, désherbage et plantation pour un rendu impeccable.",
      items: ["Tonte & Fertilisation", "Massifs floraux", "Nettoyage de saison"]
    }
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>Élagage, Taille de Haies & Entretien Jardin Bordeaux | DS Multiservices</title>
        <meta name="description" content="DS Multiservices propose l'élagage, la taille de haies et l'entretien de jardin à Bordeaux et en Gironde. Devis gratuit, intervention rapide." />
        <meta property="og:title" content="Services Élagage & Jardinage Bordeaux | DS Multiservices" />
        <meta property="og:description" content="Élagage, taille de haies et entretien de jardin à Bordeaux et en Gironde. Devis gratuit." />
        <meta property="og:url" content="https://dsmultiservices.fr/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.fr/services" />
      </Helmet>

      <Navbar />

      <header className="page-header" style={{
        background: "var(--primary)",
        color: "white",
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <div data-aos="fade-down">
          <span className="subtitle" style={{ color: "var(--accent)", letterSpacing: "3px" }}>NOS EXPERTISES</span>
          <h1 style={{ fontSize: "3rem", marginTop: "10px" }}>Élagage, Taille de Haies & Entretien de Jardin à Bordeaux</h1>
        </div>
      </header>

      <section style={{ padding: "80px 5%", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
          {servicesList.map((service, index) => (
            <div
              key={service.title}
              className="card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{
                padding: "40px",
                width: "350px",
                borderTop: "4px solid var(--accent)"
              }}
            >
              <h2 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>{service.title}</h2>
              <p style={{ marginBottom: "25px", opacity: "0.8" }}>{service.desc}</p>
              <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: "2" }}>
                {service.items.map((item) => (
                  <li key={item} style={{ listStyleType: "square", color: "var(--accent)" }}>
                    <span style={{ color: "var(--text-dark)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        data-aos="zoom-in"
        style={{ background: "#f4f4f4", padding: "80px 20px", textAlign: "center" }}
      >
        <h2 style={{ marginBottom: "30px" }}>Un projet spécifique en Gironde ?</h2>
        <Link to="/contact" className="btn">Demander mon étude gratuite</Link>
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