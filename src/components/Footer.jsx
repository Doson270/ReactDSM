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
            Experts en élagage et abattage en Gironde depuis plus de 10 ans. 
            Nous mettons notre savoir-faire au service de la santé de vos arbres et de la beauté de vos jardins.
          </p>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link to="/" style={{ color: "white" }}>Accueil</Link></li>
            <li><Link to="/services" style={{ color: "white" }}>Nos Services</Link></li>
            <li><Link to="/PourquoiNous" style={{ color: "white" }}>L'Expertise</Link></li>
            <li><Link to="/faq" style={{ color: "white" }}>FAQ</Link></li>
            <li><Link to="/contact" style={{ color: "white" }}>Contact & Devis</Link></li>
            <li><Link to="/mentionslegales" style={{ color: "white" }}>Mentions légales</Link></li>

          </ul>
        </div>

        {/* Colonne 3 : SEO Local (Villes) */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Zone d'intervention</h4>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "10px" }}>Nous intervenons en Gironde (33) :</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {villes.map(v => (
              <span key={v} style={{ fontSize: "0.8rem", background: "rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: "4px" }}>{v}</span>
            ))}
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>...et alentours</span>
          </div>
        </div>

        {/* Colonne 4 : Contact */}
        <div className="footer-section">
          <h4 style={{ color: "#c5a358", marginBottom: "20px" }}>Contact</h4>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>📞 07 76 55 33 70</p>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>📍 Bordeaux & Gironde</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Disponible du Lundi au Samedi</p>
        </div>

      </div>

      <div className="footer-bottom" style={{ textAlign: "center", marginTop: "60px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", opacity: 0.6 }}>
        <p>© {new Date().getFullYear()} DS Multiservices - <Link to="/mentionslegales" style={{ color: "white" }}>Mentions Légales</Link></p>
      </div>
    </footer>
  );
}