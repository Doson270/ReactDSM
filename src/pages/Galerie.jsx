import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

// --- IMPORTATION DES IMAGES (Méthode 1) ---
// Change les noms de fichiers ici pour qu'ils correspondent aux tiens
import img1 from "../assets/gallery/abattage-arbre-dangereux-33.webp";
import img2 from "../assets/gallery/elagage-en-securité.webp";
import img3 from "../assets/gallery/evacuation-dechets-verts-propre.webp";
import img4 from "../assets/gallery/taille-haie-rectiligne-gironde.webp";
import img5 from "../assets/gallery/taille-arbre-fruitier.webp";
// import img6 from "../assets/gallery/chantier6.jpg";

export default function Galerie() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Tableau associant les imports aux titres pour le SEO et l'affichage
  const photos = [
    { src: img1, title: "Abattage arbre dangereux - Bordeaux" },
    { src: img2, title: "Elagage en sécurité - Gironde" },
    { src: img3, title: "Evacuation et broyage de déchets verts - Gironde" },
    { src: img4, title: "Taille de haie de prestige - Gironde" },
    { src: img5, title: "Soin aux arbres fruitiers - Médoc" },
    // { src: img6, title: "Soin aux arbres fruitiers" },
  ];

  return (
    <div className="galerie-page" style={{ background: "#fcfcfc", minHeight: "100vh" }}>
      <Helmet>
        <title>Galerie Photos Élagage & Jardin | DS Multiservices Bordeaux</title>
        <meta name="description" content="Découvrez nos réalisations en images : élagage, abattage d'arbres et entretien de jardins en Gironde. Travail propre et sécurisé." />
      </Helmet>
      
      <Navbar />

      {/* Header de la page */}
      <header style={{ 
        background: "linear-gradient(rgba(26,60,52,0.8), rgba(26,60,52,0.8)), url(" + img1 + ") center/cover", 
        color: "white", padding: "120px 20px", textAlign: "center" 
      }}>
        <div data-aos="fade-down">
          <h1 style={{ fontSize: "3.5rem", fontFamily: "'Playfair Display', serif" }}>Nos Réalisations</h1>
          <p style={{ color: "#c5a358", letterSpacing: "2px", fontWeight: "bold" }}>L'EXCELLENCE AU SERVICE DE VOS ARBRES</p>
        </div>
      </header>

      {/* Grille de photos */}
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
              onClick={() => setSelectedImg(photo.src)}
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

      {/* --- MODAL LIGHTBOX (Agrandissement au clic) --- */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{ 
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
            background: "rgba(0,0,0,0.9)", zIndex: 9999, 
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" 
          }}
        >
          <img 
            src={selectedImg} 
            alt="Réalisation DS Multiservices" 
            style={{ maxWidth: "100%", maxHeight: "90%", borderRadius: "8px", boxShadow: "0 0 30px rgba(0,0,0,0.5)" }} 
          />
          <button style={{ 
            position: "absolute", top: "20px", right: "30px", background: "none", 
            border: "none", color: "white", fontSize: "40px", cursor: "pointer" 
          }}>&times;</button>
        </div>
      )}

      {/* Footer CTA */}
      <section style={{ background: "#1a3c34", padding: "60px 20px", textAlign: "center", color: "white", marginTop: "80px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Un projet pour votre jardin ?</h3>
          <p style={{ opacity: 0.8, marginBottom: "30px" }}>Intervention rapide et devis gratuit sur toute la Gironde.</p>
          <a href="/contact" className="btn">Obtenir mon devis</a>
      </section>

      <a href="tel:0776553370" className="floating-call">📞</a>
    </div>
  );
}