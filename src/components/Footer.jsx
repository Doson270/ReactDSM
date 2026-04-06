import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const villes = ["Bordeaux", "Mérignac", "Pessac", "Talence", "Villenave-d'Ornon", "Saint-Médard-en-Jalles", "Bègles", "Le Bouscat", "Gradignan", "Libourne", "Arcachon"];

  return (
    <footer className="main-footer" style={{ background: "#1a3c34", color: "white", padding: "80px 5% 40px" }}>
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Colonne 1 : À Propos */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>DS Multiservices</h4>
          <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: "1.8" }}>
            Experts en entretien de jardin, taille de haies et élagage en Gironde. 
            Nous mettons notre savoir-faire au service de la beauté de vos espaces verts.
          </p>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link to="/" style={{ color: "white" }}>Accueil</Link></li>
            <li><Link to="/services" style={{ color: "white" }}>Nos Services</Link></li>
            <li><Link to="/pourquoi-nous" style={{ color: "white" }}>L'Expertise</Link></li>
            <li><Link to="/faq" style={{ color: "white" }}>FAQ</Link></li>
            <li><Link to="/contact" style={{ color: "white" }}>Contact & Devis</Link></li>
            <li><Link to="/mentions-legales" style={{ color: "white" }}>Mentions légales</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : SEO Local (Villes) */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Zone d'intervention</h4>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "10px" }}>Nous intervenons en Gironde (33) :</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {villes.map(v => (
              <Link 
                key={v} 
                to="/contact" 
                style={{ 
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.8rem", 
                  background: "rgba(255,255,255,0.1)", 
                  padding: "2px 8px", 
                  borderRadius: "4px" 
                }}
              >
                {v}
              </Link>
            ))}
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>...et alentours</span>
          </div>
        </div>

        {/* Colonne 4 : Contact */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Contact</h4>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            <a href="tel:+33776553370" style={{ color: "white", textDecoration: "none" }}>
              07 76 55 33 70
            </a>
          </p>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>Bordeaux & Gironde</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Disponible du Lundi au Samedi</p>
        </div>

      </div>

      <div className="footer-bottom" style={{ textAlign: "center", marginTop: "60px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", opacity: 0.6 }}>
        <p>© {new Date().getFullYear()} DS Multiservices - <Link to="/mentions-legales" style={{ color: "white" }}>Mentions Légales</Link></p>
      </div>
    </footer>
  );
}