import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { VILLES_GIRONDE } from "../data/villes";

export default function ZonesIntervention() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("ALL");

  const alphabet = ["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const filteredVilles = VILLES_GIRONDE.filter(v => {
    const matchSearch = 
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      v.cp.includes(searchTerm);
    
    const matchLetter = selectedLetter === "ALL" || v.name.toUpperCase().startsWith(selectedLetter);

    return matchSearch && matchLetter;
  });

  return (
    <div style={{ background: "#fbfbfb", minHeight: "100vh", color: "#2c3e50", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Helmet>
        <title>Zones d'Intervention Élagage & Abattage en Gironde (33) | DS Multiservices</title>
        <meta name="description" content="Découvrez toutes les communes de Gironde (33) où DS Multiservices intervient pour l'élagage d'arbres, l'abattage et la taille de haies. Devis gratuit." />
        <link rel="canonical" href="https://dsmultiservices.fr/zones-intervention" />
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION RESPONSIVE --- */}
      <header style={{ 
        padding: "160px 20px 80px", 
        backgroundColor: "#1a3c34", 
        color: "white", 
        textAlign: "center",
        backgroundImage: "radial-gradient(circle at 50% 20%, rgba(197, 163, 88, 0.15) 0%, transparent 60%)"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ 
            display: "inline-block", 
            background: "rgba(197, 163, 88, 0.2)", 
            color: "#c5a358", 
            padding: "6px 16px", 
            borderRadius: "20px", 
            fontSize: "0.85rem", 
            fontWeight: "700", 
            letterSpacing: "1px", 
            textTransform: "uppercase",
            marginBottom: "20px",
            border: "1px solid rgba(197, 163, 88, 0.3)"
          }}>
            Couverture Départementale
          </span>
          
          <h1 style={{ 
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
            fontFamily: "'Playfair Display', serif", 
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Nos Zones d'Intervention en Gironde (33)
          </h1>
          
          <p style={{ 
            fontSize: "1.15rem", 
            lineHeight: "1.6", 
            opacity: 0.9, 
            marginBottom: "40px",
            maxWidth: "650px",
            marginInline: "auto"
          }}>
            Artisan élagueur de proximité, DS Multiservices se déplace dans plus de 500 communes pour prendre soin de vos arbres et espaces verts.
          </p>

          {/* Barre de recherche parfaitement centrée sur mobile et desktop */}
          <div style={{ position: "relative", width: "100%", maxWidth: "550px", margin: "0 auto", padding: "0 10px", boxSizing: "border-box" }}>
            <input
              type="text"
              placeholder="Rechercher une ville ou un code postal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "16px 20px 16px 48px",
                width: "100%",
                borderRadius: "50px",
                border: "2px solid rgba(197, 163, 88, 0.4)",
                fontSize: "0.95rem",
                outline: "none",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                color: "#1a3c34",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                boxSizing: "border-box",
                transition: "all 0.3s ease"
              }}
            />
            <span style={{ position: "absolute", left: "28px", top: "50%", transform: "translateY(-50%)", fontSize: "1.1rem", color: "#c5a358" }}>
              🔍
            </span>
          </div>
        </div>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main style={{ maxWidth: "1200px", margin: "-40px auto 80px", padding: "0 20px", position: "relative", zIndex: 2 }}>
        
        {/* Pôles principaux */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ marginBottom: "25px" }}>
            <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2rem", margin: 0 }}>
              Pôles d'intervention principaux
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem", margin: "5px 0 0 0" }}>
              Nos secteurs les plus dynamiques en Gironde
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {VILLES_GIRONDE.slice(0, 6).map(v => (
              <div key={v.slug} style={{ 
                background: "white", 
                padding: "25px", 
                borderRadius: "16px", 
                boxShadow: "0 10px 25px rgba(26,60,52,0.06)", 
                border: "1px solid #eaeaea"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#1a3c34", fontFamily: "'Playfair Display', serif" }}>{v.name}</h3>
                    <span style={{ fontSize: "0.85rem", color: "#888", fontWeight: "600" }}>Code postal : {v.cp}</span>
                  </div>
                  <span style={{ background: "rgba(197, 163, 88, 0.1)", color: "#c5a358", padding: "6px 12px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: "bold" }}>
                    33
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", paddingTop: "15px", borderTop: "1px solid #f0f2f1" }}>
                  <Link to={`/elagage/${v.slug}`} style={{ flex: 1, textAlign: "center", background: "#1a3c34", color: "white", padding: "10px", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600" }}>
                    Élagage
                  </Link>
                  <Link to={`/abattage/${v.slug}`} style={{ flex: 1, textAlign: "center", background: "rgba(197, 163, 88, 0.15)", color: "#1a3c34", padding: "10px", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600" }}>
                    Abattage
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Index Alphabétique */}
        <section style={{ background: "white", padding: "30px 20px", borderRadius: "20px", boxShadow: "0 15px 35px rgba(0,0,0,0.04)", border: "1px solid #eaeaea" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "30px" }}>
            <div>
              <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", margin: 0 }}>
                Toutes nos communes desservies
              </h2>
              <p style={{ color: "#666", fontSize: "0.95rem", margin: "5px 0 0 0" }}>
                {filteredVilles.length} commune{filteredVilles.length > 1 ? "s" : ""} disponible{filteredVilles.length > 1 ? "s" : ""}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "none",
                    background: selectedLetter === letter ? "#1a3c34" : "#f4f7f6",
                    color: selectedLetter === letter ? "white" : "#444",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "background 0.2s"
                  }}
                >
                  {letter === "ALL" ? "TOUTES" : letter}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "15px",
            maxHeight: "650px",
            overflowY: "auto",
            paddingRight: "5px"
          }}>
            {filteredVilles.length > 0 ? (
              filteredVilles.map(v => (
                <div key={v.slug} style={{ 
                  background: "#f9fbfa", 
                  padding: "15px 18px", 
                  borderRadius: "12px", 
                  border: "1px solid #eef2f1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <div style={{ fontWeight: "700", color: "#1a3c34", fontSize: "1rem" }}>{v.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#776", marginBottom: "10px" }}>Code postal : {v.cp}</div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "0.85rem", paddingTop: "8px", borderTop: "1px dashed #e2e8e6" }}>
                    <Link to={`/elagage/${v.slug}`} style={{ color: "#1a3c34", textDecoration: "none", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ color: "#c5a358" }}>•</span> Élagage
                    </Link>
                    <span>|</span>
                    <Link to={`/abattage/${v.slug}`} style={{ color: "#1a3c34", textDecoration: "none", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ color: "#c5a358" }}>•</span> Abattage
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "50px", color: "#666" }}>
                Aucune commune ne correspond à votre recherche. Essayez un autre nom ou code postal.
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}