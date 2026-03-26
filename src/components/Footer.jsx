import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>DS Multiservices</h4>
          <p>L'excellence de l'élagage et de l'entretien paysager en Gironde. Travail soigné et respect de l'environnement.</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/" style={{color: 'white'}}>Accueil</Link></li>
            <li><Link to="/services" style={{color: 'white'}}>Nos Services</Link></li>
            <li><Link to="/PourquoiNous" style={{color: 'white'}}>L'Expertise</Link></li>
            <li><Link to="/contact" style={{color: 'white'}}>Contact & Devis</Link></li>
            <li><Link to="/mentionslegales" style={{color: 'white'}}> Mentions Légales</Link></li> 
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Bordeaux et alentours (33)</p>
          <p>📞 07 76 55 33 70</p>
          <p>⏰ Lun - Sam : 08:00 - 19:00</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DS Multiservices - Tous droits réservés.</p>
      </div>
    </footer>
  );
}