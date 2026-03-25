import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Services() {
  const servicesList = [
    {
      title: "Élagage",
      desc: "Élagage d’arbres toutes tailles, sécuritaire et respectueux de l’environnement.",
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
        <title>Nos Services d'Exception - DS Multiservices</title>
      </Helmet>

      <Navbar />

      <header className="page-header" style={{
        background: "var(--primary)",
        color: "white",
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <span className="subtitle" style={{color: "var(--accent)", letterSpacing:"3px"}}>NOS EXPERTISES</span>
        <h1 style={{fontSize: "3rem", marginTop: "10px"}}>Entretien & Taille</h1>
      </header>

      <section style={{ padding: "80px 5%", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
          {servicesList.map((service) => (
            <div key={service.title} className="card-hover" style={{
              padding: "40px",
              width: "350px",
              borderTop: "4px solid var(--accent)" // Petit détail or en haut
            }}>
              <h3 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>{service.title}</h3>
              <p style={{ marginBottom: "25px", opacity: "0.8" }}>{service.desc}</p>
              <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: "2" }}>
                {service.items.map((item) => <li key={item} style={{listStyleType: "square", color: "var(--accent)"}}><span style={{color: "var(--text-dark)"}}>{item}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f4f4f4", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px" }}>Un projet spécifique en Gironde ?</h2>
        <a href="/contact" className="btn">Demander mon étude gratuite</a>
      </section>

      <a href="tel:0776553370" className="call-btn" style={{position:"fixed", bottom:"30px", right:"30px", width:"60px", height:"60px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}}>📞</a>
    </div>
  );
}