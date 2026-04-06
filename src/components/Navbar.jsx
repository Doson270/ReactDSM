import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gallery/logo-dsm.png"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (!open) {
        navRef.current.setAttribute("inert", "");
      } else {
        navRef.current.removeAttribute("inert");
      }
    }
  }, [open]);

  return (
    <nav className="navbar">
      {/* --- LOGO --- */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="DS Multiservices - Élagage et paysage à Bordeaux" style={{ height: "45px" }} />
        <div className="logo-text">
          <span className="brand-name">DS MULTISERVICES</span>
          <span className="brand-sub">ÉLAGAGE & PAYSAGE</span>
        </div>
      </Link>

      {/* --- LIENS DE NAVIGATION --- */}
      <ul ref={navRef} className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/pourquoi-nous" onClick={closeMenu}>Expertise</Link></li>
        <li><Link to="/avis" onClick={closeMenu}>Avis</Link></li>
        <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
        <li className="nav-btn-container">
          <Link to="/contact" className="nav-btn" onClick={closeMenu}>
            Devis Gratuit
          </Link>
        </li>
      </ul>

      {/* --- BOUTON BURGER --- */}
      <div
        className={open ? "hamburger toggle" : "hamburger"}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        role="button"
        aria-expanded={open}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          padding: 0 5%;
          background: #ffffff;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 9999;
          border-bottom: 1px solid #e0e0e0;
          box-sizing: border-box;
        }

        .nav-logo { display: flex; align-items: center; text-decoration: none; gap: 10px; }
        .logo-text { display: flex; flex-direction: column; line-height: 1.2; }
        .brand-name { font-weight: 900; color: #1a3c34; font-size: 1.1rem; }
        .brand-sub { color: #c5a358; font-size: 0.65rem; font-weight: bold; }

        .nav-links { display: flex; list-style: none; gap: 25px; align-items: center; margin: 0; padding: 0; }
        .nav-links li a { 
            text-decoration: none; 
            color: #333 !important; 
            font-weight: 600; 
            text-transform: uppercase; 
            font-size: 0.85rem; 
            transition: 0.3s;
        }

        .nav-btn { 
            background: #c5a358; 
            color: white !important; 
            padding: 10px 20px; 
            border-radius: 5px; 
            display: inline-block;
        }

        .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 6px; }
        .hamburger div { width: 28px; height: 3px; background: #1a3c34; transition: 0.4s; }

        @media screen and (max-width: 1024px) {
          .hamburger { display: flex; z-index: 10001; }

          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            background: #ffffff;
            flex-direction: column;
            justify-content: center;
            transform: translateX(100%);
            transition: transform 0.5s ease-in-out;
            z-index: 10000;
          }

          .nav-links.open { transform: translateX(0); }

          .nav-links li { margin: 20px 0; }
          .nav-links li a { font-size: 1.2rem; }

          .nav-btn-container { margin-top: 20px; }

          .toggle .line1 { transform: rotate(-45deg) translate(-6px, 7px); }
          .toggle .line2 { opacity: 0; }
          .toggle .line3 { transform: rotate(45deg) translate(-6px, -7px); }
        }
      `}</style>
    </nav>
  );
}