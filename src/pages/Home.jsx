import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import imgaccueil from "../assets/gallery/acceuil.webp";
import imgaccueil3 from "../assets/gallery/accueil3.webp";
import imgjardin from "../assets/gallery/avant-apres-jardin.webp";
import imgserre from "../assets/gallery/avant-apres-serre.webp";

export default function Home() {
  const services = [
    { title: "Élagage & Taille", desc: "Taille de restructuration, mise en sécurité et soins aux arbres." },
    { title: "Abattage Délicat", desc: "Démontage d'arbres dangereux avec rétention en zones urbaines." },
    { title: "Taille de Haies", desc: "Entretien régulier pour des clôtures végétales denses et esthétiques." },
    { title: "Entretien Parcs", desc: "Gestion complète de vos espaces verts et évacuation des déchets." }
  ];

  const galleryPreview = [imgjardin, imgserre, imgaccueil3];

  const galleryAlt = [
    "Élagage d'arbres à Bordeaux - DS Multiservices",
    "Taille de haies en Gironde - DS Multiservices",
    "Entretien jardin Bordeaux - DS Multiservices"
  ];

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d181139.38072064563!2d-0.7516597793574136!3d44.86370643729864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca3d%3A0x406659744c33090!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr";

  return (
    <div className="home-container" style={{ background: "#fdfdfd" }}>
      <Helmet>
        <title>DS Multiservices | Élagage, Abattage & Taille de Haies à Bordeaux (33)</title>
        <meta name="description" content="Expert élagueur en Gironde. Devis gratuit sous 48h. Travaux assurés RC Pro, évacuation des déchets verts. Intervention rapide à Bordeaux et alentours." />
        <meta property="og:title" content="DS Multiservices | Élagage & Jardinage à Bordeaux" />
        <meta property="og:description" content="Expert élagueur en Gironde. Devis gratuit sous 48h. Travaux assurés RC Pro, évacuation des déchets verts." />
        <meta property="og:url" content="https://dsmultiservices.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dsmultiservices.fr/logo-dsm.png" />
        <link rel="canonical" href="https://dsmultiservices.fr/" />
        {/* Préchargement de l'image LCP pour la vitesse */}
        <link rel="preload" as="image" href={imgaccueil} />
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="hero-section" style={{
        background: `linear-gradient(rgba(26,60,52,0.7), rgba(26,60,52,0.7)), url(${imgaccueil}) center/cover`,
        color: "white", textAlign: "center", padding: "160px 20px"
      }}>
        <div data-aos="fade-down">
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", marginBottom: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>Espaces Verts</h1>
          <p style={{ fontSize: "1.3rem", marginBottom: "40px", opacity: 0.9, maxWidth: "800px", margin: "0 auto 40px" }}>Intervention rapide & Urgence 7j/7. Devis Gratuit sous 48h à Bordeaux et alentours.</p>
          
          <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            <a 
              href="tel:+33776553370" 
              className="btn" 
              style={{ 
                padding: "15px 40px", 
                fontSize: "1.1rem",
                width: "100%",
                maxWidth: "320px",
                textAlign: "center",
                boxSizing: "border-box"
              }}
              onClick={(e) => {
                if (window.gtag) {
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-18085079647/vELTCOrkhpscEN_U0a9D',
                    'event_callback': () => console.log("Signal envoyé")
                  });
                }
              }}
            >
              Appeler pour un Devis Gratuit
            </a>

            <span style={{ fontSize: "0.9rem", fontWeight: "bold", opacity: 0.8, margin: "5px 0", fontFamily: "sans-serif" }}>OU</span>

            <Link 
              to="/contact" 
              className="btn" 
              style={{ 
                padding: "15px 40px", 
                fontSize: "1.1rem",
                width: "100%",
                maxWidth: "320px",
                textAlign: "center",
                boxSizing: "border-box"
              }}
            >
              Demander mon devis en ligne
            </Link>
          </div>

          <p style={{ marginTop: "25px", fontSize: "1rem", color: "#c5a358", fontWeight: "bold" }}>
            <span style={{ color: "#ffc107" }}>★★★★★</span> +50 clients satisfaits en 2025
          </p>
        </div>
      </header>

      {/* --- TRUSTBAR --- */}
      <section style={{
        background: "white", padding: "40px 20px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        borderRadius: "15px", maxWidth: "1100px", margin: "-60px auto 60px auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px", position: "relative", zIndex: "10"
      }} data-aos="fade-up">
        {[
          { label: "Assurance RC Pro", sub: "Travaux 100% sécurisés", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> },
          { label: "Devis sous 48h", sub: "Réactivité garantie", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg> },
          { label: "Chantier Propre", sub: "Évacuation des déchets", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M17 8C8 10 5.9 16.17 3.82 21H5.71C7.38 17.07 11.07 13 17 13v5l7-7-7-7v3z"/></svg> },
          { label: "Expert Local", sub: "Basé en Gironde", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> }
        ].map((item, i, arr) => (
          <div key={i} style={{ textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid #f0f0f0" : "none" }}>
            <div style={{ marginBottom: "10px" }}>{item.icon}</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>{item.label}</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>{item.sub}</p>
          </div>
        ))}
      </section>

      {/* --- SERVICES --- */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 data-aos="fade-up" style={{ fontSize: "2.8rem", color: "#1a3c34", fontFamily: "'Playfair Display', serif" }}>Nos Prestations</h2>
          <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {services.map((s, index) => (
            <div key={s.title} data-aos="fade-up" data-aos-delay={index * 100} style={{ padding: "40px", width: "280px", textAlign: "center", backgroundColor: "#fff", borderBottom: "4px solid #c5a358", boxShadow: "0 5px 15px rgba(0,0,0,0.02)" }}>
              <h3 style={{ color: "#c5a358", marginBottom: "15px", fontSize: "1.4rem" }}>{s.title}</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALERIE --- */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f4f7f6" }}>
        <h2 data-aos="fade-up" style={{ color: "#1a3c34", fontSize: "2.5rem", marginBottom: "15px", fontFamily: "'Playfair Display', serif" }}>Derniers Chantiers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto 50px auto" }}>
          {galleryPreview.map((url, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 200} style={{ height: "250px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", background: "#eee" }}>
              <img 
                src={url} 
                alt={galleryAlt[i]} 
                loading="lazy" 
                width="400" 
                height="250" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
          ))}
        </div>
        <Link to="/galerie" className="btn" style={{ background: "#1a3c34", color: "#ffffff" }}>Voir toutes nos réalisations</Link>
      </section>

      {/* --- CARTE --- */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container" data-aos="zoom-in">
          <div style={{ maxWidth: "1100px", margin: "0 auto", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.12)", border: "12px solid white", background: "#f0f0f0" }}>
            <iframe
              title="Carte zone d'intervention"
              src={mapUrl}
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* BOUTON FLOTTANT */}
      <a href="tel:+33776553370" className="floating-call" aria-label="Appeler DS Multiservices">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
      </a>
    </div>
  );
}