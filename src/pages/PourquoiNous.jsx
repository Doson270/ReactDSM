import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

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
          <title>Notre Expertise | DS Multiservices Élagage</title>
      </Helmet>
      <Navbar />

      <header style={{ background: "var(--primary)", color: "white", padding: "100px 20px", textAlign: "center" }}>
        <div data-aos="zoom-out">
            <h1 style={{ fontSize: "3rem" }}>Notre Vision</h1>
            <p style={{ color: "var(--accent)", textTransform: "uppercase", letterSpacing: "2px" }}>Qualité, Rapidité, Confiance</p>
        </div>
      </header>

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", padding: "80px 5%" }}>
        {argumentsCles.map((arg, index) => (
          <div key={arg.title} 
               data-aos="fade-right" 
               data-aos-delay={index * 200}
               style={{ padding: "40px", width: "280px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "15px" }}>{arg.title}</h2>
            <p style={{ fontSize: "0.95rem" }}>{arg.desc}</p>
          </div>
        ))}
      </section>

      <section data-aos="fade-up" style={{ background: "var(--primary)", color: "white", padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>Prêt à transformer votre jardin ?</h2>
        <a href="/contact" className="btn" style={{border: "1px solid white"}}>Contactez un expert</a>
      </section>

      <a href="tel:0776553370" className="floating-call">📞</a>
      
    </div>
  );
}