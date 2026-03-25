import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Home() {
  const services = [
    { title: "Élagage", desc: "Taille de précision et mise en sécurité de vos arbres." },
    { title: "Taille de haies", desc: "Sculpture végétale pour un jardin structuré." },
    { title: "Entretien", desc: "Maintenance complète de vos espaces verts." }
  ];

  return (
    <div className="home-container">
    <Helmet>
        <title>DS Multiservices | Élagage & Taille de Prestige à Bordeaux</title>
        <meta name="description" content="Experts en élagage et entretien de parcs en Gironde. DS Multiservices sublime vos espaces verts avec un savoir-faire artisanal. Devis gratuit sous 48h." />
    </Helmet>
      <Navbar />

      <header className="hero-section" style={{
        background: "linear-gradient(rgba(26,60,52,0.8), rgba(26,60,52,0.8)), url('https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2000') center/cover",
        color: "white", textAlign: "center", padding: "150px 20px"
      }}>
        <h1 style={{ fontSize: "3.5em", marginBottom: "20px" }}>L'Art de l'Élagage</h1>
        <p style={{ fontSize: "1.2em", marginBottom: "40px", opacity: "0.9" }}>Bordeaux & Gironde — Travail d'exception</p>
        <a href="/contact" className="btn">Demander un devis gratuit</a>
      </header>

      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "2.5rem" }}>Nos Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {services.map((s) => (
            <div key={s.title} className="card-hover" style={{ padding: "40px", width: "320px", textAlign: "center" }}>
              <h3 style={{ color: "#c5a358", marginBottom: "15px" }}>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <a href="tel:0776553370" className="call-btn" style={{position:"fixed", bottom:"30px", right:"30px", width:"60px", height:"60px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}}>📞</a>
    </div>
  );
}