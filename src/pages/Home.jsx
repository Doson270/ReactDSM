import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Home() {
  const services = [
    { title: "Élagage", desc: "Taille de précision et mise en sécurité de vos arbres." },
    { title: "Taille de haies", desc: "Sculpture végétale pour un jardin structuré." },
    { title: "Entretien", desc: "Maintenance complète de vos espaces verts." }
  ];

  // URL corrigée pour la Gironde
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181053.3853174241!2d-0.7516886476562499!3d44.86370649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd535999e039130d%3A0x306640d7159f810!2sGironde!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr";

  return (
    <div className="home-container" style={{ fontFamily: "'Segoe UI', Roboto, sans-serif", color: "#333" }}>
      <Helmet>
        <title>DS Multiservices | Élagage & Taille de Prestige à Bordeaux</title>
        <meta name="description" content="Experts en élagage et entretien de parcs en Gironde. DS Multiservices sublime vos espaces verts avec un savoir-faire artisanal." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section" style={{
        background: "linear-gradient(rgba(26,60,52,0.8), rgba(26,60,52,0.8)), url('https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2000') center/cover",
        color: "white", textAlign: "center", padding: "160px 20px"
      }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", fontWeight: "700" }}>L'Art de l'Élagage</h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "40px", opacity: "0.9", fontWeight: "300" }}>Bordeaux & toute la Gironde — Travail d'exception</p>
        <a href="/contact" className="btn" style={{
            background: "#c5a358", color: "white", padding: "15px 35px", 
            textDecoration: "none", borderRadius: "5px", fontWeight: "bold",
            transition: "0.3s"
        }}>Demander un devis gratuit</a>
      </header>

      {/* Services Section */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "2.5rem" }}>Nos Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {services.map((s) => (
            <div key={s.title} style={{ 
                padding: "40px", width: "320px", textAlign: "center", 
                backgroundColor: "#fff", borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                borderBottom: "4px solid #c5a358"
            }}>
              <h3 style={{ color: "#c5a358", marginBottom: "15px", fontSize: "1.6rem" }}>{s.title}</h3>
              <p style={{ lineHeight: "1.6", color: "#666" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section - Zone d'intervention */}
      <section style={{ padding: "80px 0", background: "#fdfdfd", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#1a3c34" }}>Zone d'intervention</h2>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>Basés à Bordeaux, nous intervenons dans un rayon de 100km en Gironde.</p>
          </div>
          
          <div style={{ 
            width: "100%", 
            height: "500px", 
            borderRadius: "20px", 
            overflow: "hidden", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            border: "8px solid white" 
          }}>
            <iframe
              title="Carte Intervention Gironde"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Bouton d'appel flottant */}
      <a href="tel:0776553370" style={{
        position:"fixed", bottom:"30px", right:"30px", 
        width:"65px", height:"65px", borderRadius:"50%", 
        display:"flex", alignItems:"center", justifyContent:"center", 
        textDecoration:"none", color:"white", fontSize: "24px",
        background: "#1a3c34", boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        zIndex: 9999, transition: "transform 0.3s"
      }} 
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        📞
      </a>
    </div>
  );
}