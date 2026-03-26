import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    { title: "Élagage & Taille", desc: "Taille de restructuration, mise en sécurité et soins aux arbres." },
    { title: "Abattage Délicat", desc: "Démontage d'arbres dangereux avec rétention en zones urbaines." },
    { title: "Taille de Haies", desc: "Entretien régulier pour des clôtures végétales denses et esthétiques." },
    { title: "Entretien Parcs", desc: "Gestion complète de vos espaces verts et évacuation des déchets." }
  ];

  // URLs d'aperçu (Pense à les remplacer par tes images locales plus tard)
  const galleryPreview = [
    "https://images.unsplash.com/photo-1592150621744-aca64f48394a",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200"
  ];

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181040.2335447781!2d-0.7428114671875024!3d44.84759600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca3d%3A0x406651748138de0!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1710434567890!5m2!1sfr!2sfr";

  return (
    <div className="home-container" style={{ background: "#fdfdfd" }}>
      <Helmet>
        <title>DS Multiservices | Élagage, Abattage & Taille de Haies à Bordeaux (33)</title>
        <meta name="description" content="Expert élagueur en Gironde. Devis gratuit sous 48h. Travaux assurés RC Pro, évacuation des déchets verts. Intervention rapide à Bordeaux et alentours." />
        <meta name="keywords" content="élagage bordeaux, abattage arbre gironde, taille de haie bordeaux, jardinier 33, ds multiservices, entretien jardin gironde" />
        <link rel="canonical" href="https://votre-site-final.fr/" />
      </Helmet>
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="hero-section" style={{
        background: "linear-gradient(rgba(26,60,52,0.7), rgba(26,60,52,0.7)), url('https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2000') center/cover",
        color: "white", textAlign: "center", padding: "160px 20px"
      }}>
        <div data-aos="fade-down">
            <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", marginBottom: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>L'Art de l'Élagage</h1>
            <p style={{ fontSize: "1.3rem", marginBottom: "40px", opacity: 0.9, maxWidth: "800px", margin: "0 auto 40px" }}>Bordeaux & Gironde — Taille de précision et mise en sécurité de vos arbres</p>
            
            <div style={{ marginBottom: "20px" }}>
                <Link to="/contact" className="btn" style={{ padding: "15px 40px", fontSize: "1.1rem" }}>Demander mon devis gratuit</Link>
                <p style={{ marginTop: "25px", fontSize: "1rem", color: "#c5a358", fontWeight: "bold" }}>
                    <span style={{ color: "#ffc107" }}>★★★★★</span> +50 clients satisfaits en 2025
                </p>
            </div>
        </div>
      </header>

      {/* --- BARRE DE RÉASSURANCE (TRUSTBAR) --- */}
      <section style={{ 
        background: "white", 
        padding: "40px 20px", 
        boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        borderRadius: "15px",
        maxWidth: "1100px",
        margin: "-60px auto 60px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        position: "relative",
        zIndex: "10"
      }} data-aos="fade-up">
        <div style={{ textAlign: "center", borderRight: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🛡️</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>Assurance RC Pro</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>Travaux 100% sécurisés</p>
        </div>
        <div style={{ textAlign: "center", borderRight: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>⏱️</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>Devis sous 48h</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>Réactivité garantie</p>
        </div>
        <div style={{ textAlign: "center", borderRight: "1px solid #f0f0f0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🍃</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>Chantier Propre</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>Évacuation des déchets</p>
        </div>
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>📍</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>Expert Local</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>Basé en Gironde</p>
        </div>
      </section>

      {/* --- SECTION SERVICES --- */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 data-aos="fade-up" style={{ fontSize: "2.8rem", color: "#1a3c34", fontFamily: "'Playfair Display', serif" }}>Nos Prestations</h2>
            <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {services.map((s, index) => (
            <div key={s.title} 
                 data-aos="fade-up" 
                 data-aos-delay="0"
                 data-aos-duration="400"
                 className="card-hover"
                 style={{ 
                    padding: "40px", width: "280px", textAlign: "center", 
                    backgroundColor: "#fff", borderBottom: "4px solid #c5a358",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.02)"
                }}>
              <h3 style={{ color: "#c5a358", marginBottom: "15px", fontSize: "1.4rem" }}>{s.title}</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- APERÇU GALERIE (CORRIGÉ) --- */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f4f7f6" }}>
        <h2 data-aos="fade-up" style={{ color: "#1a3c34", fontSize: "2.5rem", marginBottom: "15px", fontFamily: "'Playfair Display', serif" }}>Derniers Chantiers</h2>
        <p style={{ color: "#777", marginBottom: "40px" }}>Aperçu de nos interventions récentes en Gironde</p>
        
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "20px", 
            maxWidth: "1100px", 
            margin: "0 auto 50px auto" 
        }}>
            {galleryPreview.map((url, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 200} style={{ height: "250px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                    <img src={url} alt={`Chantier ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            ))}
        </div>

        {/* Bouton avec contraste élevé */}
        <Link 
            to="/galerie" 
            className="btn" 
            style={{ 
                background: "#1a3c34", 
                color: "#ffffff", 
                border: "none",
                display: "inline-block",
                boxShadow: "0 10px 20px rgba(26, 60, 52, 0.15)"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#c5a358"}
            onMouseOut={(e) => e.currentTarget.style.background = "#1a3c34"}
        >
            Voir toutes nos réalisations
        </Link>
      </section>

      {/* --- SECTION CARTE --- */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container" data-aos="zoom-in">
          <div style={{ textAlign: "center", marginBottom: "50px", padding: "0 20px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#1a3c34", fontFamily: "'Playfair Display', serif" }}>Zone d'intervention</h2>
            <p style={{ color: "#666", marginTop: "10px" }}>Nous nous déplaçons gratuitement dans toute la Gironde (33).</p>
          </div>
          <div style={{ 
            maxWidth: "1100px", margin: "0 auto", height: "450px", 
            borderRadius: "24px", overflow: "hidden", 
            boxShadow: "0 25px 50px rgba(0,0,0,0.12)", border: "12px solid white" 
          }}>
            <iframe
              title="Carte Intervention" 
              src={mapUrl}
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* BOUTON D'APPEL FLOTTANT DORÉ */}
      <a href="tel:0776553370" className="floating-call">📞</a>
    </div>
  );
}