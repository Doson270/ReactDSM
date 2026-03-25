import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ReviewForm from "../components/ReviewForm";

export default function Avis() {
  const testimonials = [
    {
      name: "Jean-Pierre M.",
      location: "Bordeaux Caudéran",
      date: "Mars 2024",
      content: "Un travail d'orfèvre sur nos chênes centenaires. L'équipe de DS Multiservices allie technicité et respect de l'arbre. Le chantier a été rendu d'une propreté exemplaire.",
      rating: 5
    },
    {
      name: "Sophie de V.",
      location: "Saint-Émilion",
      date: "Février 2024",
      content: "DS Multiservices intervient pour l'entretien de notre parc chaque saison. Leur expertise en taille de haie structurée est incomparable en Gironde. Un vrai service premium.",
      rating: 5
    },
    {
      name: "Marc A.",
      location: "Mérignac",
      date: "Janvier 2024",
      content: "Élagage délicat à proximité de lignes électriques. Intervention rapide, sécurisée et très professionnelle. Le rapport qualité-prix est excellent pour cette qualité de prestation.",
      rating: 5
    },
    {
      name: "Hélène G.",
      location: "Pessac",
      date: "Décembre 2023",
      content: "Une équipe ponctuelle et passionnée. Ils ne se contentent pas de couper, ils conseillent sur la santé des végétaux. Je leur confie mon jardin les yeux fermés.",
      rating: 5
    }
  ];

  return (
    <div className="avis-page">
    <Helmet>
        <title>Avis Clients | DS Multiservices - Élagage de Confiance à Bordeaux</title>
        <meta name="description" content="Découvrez les témoignages de nos clients satisfaits en Gironde. DS Multiservices : l'excellence de l'élagage et de la taille de haie certifiée par ceux qui nous font confiance." />
        <meta name="keywords" content="avis elagage bordeaux, temoignage ds multiservices, expert paysagiste gironde" />
    </Helmet>
      <Navbar />

      {/* Header de la page */}
      <header className="hero-section" style={{
        background: "linear-gradient(rgba(26,60,52,0.9), rgba(26,60,52,0.9)), url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000') center/cover",
        color: "white", textAlign: "center", padding: "100px 20px"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Témoignages</h1>
        <p style={{ fontSize: "1.1rem", opacity: "0.8", letterSpacing: "1px", textTransform: "uppercase" }}>
          L'excellence confirmée par nos clients
        </p>
      </header>

      {/* Section Avis */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "40px" 
        }}>
          {testimonials.map((t, index) => (
            <div key={index} className="card-hover" style={{ 
              padding: "50px 40px", 
              position: "relative",
              borderTop: "4px solid var(--accent)" 
            }}>
              {/* Guillemet décoratif */}
              <span style={{ 
                position: "absolute", 
                top: "20px", 
                right: "30px", 
                fontSize: "4rem", 
                color: "var(--accent)", 
                opacity: "0.2",
                fontFamily: "Playfair Display" 
              }}>“</span>

              <div style={{ color: "var(--accent)", marginBottom: "20px", fontSize: "1.2rem" }}>
                {"★".repeat(t.rating)}
              </div>

              <p style={{ 
                fontStyle: "italic", 
                fontSize: "1.1rem", 
                marginBottom: "30px",
                color: "var(--text-dark)",
                lineHeight: "1.8"
              }}>
                "{t.content}"
              </p>

              <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
                <h4 style={{ margin: "0", color: "var(--primary)", fontSize: "1.2rem" }}>{t.name}</h4>
                <p style={{ margin: "0", fontSize: "0.8rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {t.location} • {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h3 style={{ marginBottom: "30px" }}>Vous avez un projet en Gironde ?</h3>
          <a href="/contact" className="btn">Rejoignez nos clients satisfaits</a>
        </div>
      </section>
        
        <ReviewForm />
        
      {/* Bouton d'appel flottant (déjà dans ton style) */}
      <a href="tel:0776553370" className="call-btn" style={{position:"fixed", bottom:"30px", right:"30px", width:"60px", height:"60px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}}>📞</a>
    </div>
  );

  
}