import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(open){
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [open]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">DS <span>Multiservices</span></Link>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/PourquoiNous" onClick={() => setOpen(false)}>Expertise</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li><Link to="/avis" onClick={() => setOpen(false)}>Avis</Link></li>
      </ul>

      <div className={`burger ${open ? "toggle" : ""}`} onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}