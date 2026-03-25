import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        textAlign: "center",
        padding: "20px",
        background: "var(--bg-light)"
      }}>
        <h1 style={{ 
          fontSize: "8rem", 
          margin: "0", 
          color: "var(--primary)", 
          opacity: "0.1",
          fontFamily: "Playfair Display" 
        }}>404</h1>
        
        <div style={{ marginTop: "-60px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Page introuvable</h2>
          <p style={{ 
            maxWidth: "500px", 
            margin: "0 auto 40px", 
            color: "#666",
            fontSize: "1.1rem" 
          }}>
            Il semble que le chemin vers cette page ait été élagué un peu trop court. 
            Laissez-nous vous raccompagner vers nos services.
          </p>
          
          <Link to="/" className="btn">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}