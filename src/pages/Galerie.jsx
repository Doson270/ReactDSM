import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";

import img1 from "../assets/gallery/abattage-arbre-dangereux-33.webp";
import img2 from "../assets/gallery/elagage-en-securité.webp";
import img3 from "../assets/gallery/evacuation-dechets-verts-propre.webp";
import img4 from "../assets/gallery/taille-haie-rectiligne-gironde.webp";
import img5 from "../assets/gallery/taille-arbre-fruitier.webp";

export default function Galerie() {
  const [selected, setSelected] = useState(null);

  const photos = [
    { src: img1, title: "Abattage arbre dangereux - Bordeaux" },
    { src: img2, title: "Elagage en sécurité - Gironde" },
    { src: img3, title: "Evacuation et broyage de déchets verts - Gironde" },
    { src: img4, title: "Taille de haie de prestige - Gironde" },
    { src: img5, title: "Soin aux arbres fruitiers - Médoc" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="galerie-page" style={{ background: "#fcfcfc", minHeight: "100vh" }}>
      <Helmet>
        <title>Galerie Photos Élagage & Jardin | DS Multiservices Bordeaux</title>
        <meta name="description" content="Découvrez nos réalisations en images : élagage, abattage d'arbres et entretien de jardins en Gironde. Travail propre et sécurisé." />
        <meta property="og:title" content="Galerie Élagage & Jardinage Bordeaux | DS Multiservices" />
        <meta property="og:description" content="Découvrez nos réalisations en images : élagage, abattage d'arbres et entretien de jardins en Gironde." />
        <meta property="og:url" content="https://dsmultiservices.vercel.app/galerie" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dsmultiservices.fr/logo-dsm.png" />
        <link rel="canonical" href="https://dsmultiservices.fr/galerie" />
      </Helmet>

      <Navbar />

      <header style={{
        background: "linear-gradient(rgba(26,60,52,0.8), rgba(26,60,52,0.8)), url(" + img1 + ") center/cover",
        color: "white", padding: "120px 20px", textAlign: "center"
      }}>
        <div data-aos="fade-down">
          <h1 style={{ fontSize: "3.5rem", fontFamily: "'Playfair Display', serif" }}>Galerie - Élagage & Jardinage à Bordeaux</h1>
          <p style={{ color: "#c5a358", letterSpacing: "2px", fontWeight: "bold" }}>L'EXCELLENCE AU SERVICE DE VOS ARBRES</p>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "80px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }} data-aos="fade">
          <h2 style={{ color: "#1a3c34" }}>Aperçu de nos chantiers</h2>
          <div style={{ width: "50px", height: "3px", background: "#c5a358", margin: "15px auto" }}></div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "25px"
        }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelected(photo)}
              style={{
                height: "300px", borderRadius: "15px", overflow: "hidden", cursor: "pointer",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)", position: "relative",
                border: "1px solid #eee"
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                padding: "20px", color: "white"
              }}>
                <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: "500" }}>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            background: "rgba(0,0,0,0.9)", zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"
          }}
        >
          <img
            src={selected.src}
            alt={selected.title}
            style={{ maxWidth: "100%", maxHeight: "90%", borderRadius: "8px", boxShadow: "0 0 30px rgba(0,0,0,0.5)" }}
          />
          <button
            onClick={() => setSelected(null)}
            aria-label="Fermer"
            style={{
              position: "absolute", top: "20px", right: "30px", background: "none",
              border: "none", color: "white", fontSize: "40px", cursor: "pointer"
            }}
          >&times;</button>
        </div>
      )}

      <section style={{ background: "#1a3c34", padding: "60px 20px", textAlign: "center", color: "white", marginTop: "80px" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Un projet pour votre jardin ?</h3>
        <p style={{ opacity: 0.8, marginBottom: "30px" }}>Intervention rapide et devis gratuit sur toute la Gironde.</p>
        <a href="/contact" className="btn">Obtenir mon devis</a>
      </section>

      <a href="tel:+33776553370" className="floating-call" aria-label="Appeler DS Multiservices">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>
    </div>
  );
}