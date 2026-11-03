import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { VILLES_GIRONDE } from "../data/villes";

export default function ZonesIntervention() {
  const [search, setSearch] = useState("");

  const filteredVilles = VILLES_GIRONDE.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.cp.includes(search)
  );

  return (
    <div style={{ background: "#fdfdfd", minHeight: "100vh" }}>
      <Helmet>
        <title>Nos Zones d'Intervention | Élagage & Abattage en Gironde (33)</title>
        <meta
          name="description"
          content="Découvrez toutes les communes de Gironde où DS Multiservices intervient pour l'élagage, l'abattage d'arbres et la taille de haies. Trouvez votre ville !"
        />
        <link rel="canonical" href="https://dsmultiservices.fr/zones-intervention" />
      </Helmet>

      <Navbar />

      <header style={{ backgroundColor: "#1a3c34", color: "white", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontFamily: "'Playfair Display', serif", marginBottom: "15px" }}>
          Nos Zones d'Intervention en Gironde (33)
        </h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.9, fontSize: "1.1rem" }}>
          DS Multiservices intervient dans l'ensemble des communes du département pour vos travaux d'élagage, d'abattage et d'entretien d'espaces verts.
        </p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Barre de recherche interactive */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Rechercher votre ville ou code postal (ex: Libourne, 33330)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "15px 20px",
              fontSize: "1rem",
              borderRadius: "30px",
              border: "2px solid #1a3c34",
              outline: "none",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}
          />
          <p style={{ marginTop: "10px", color: "#666", fontSize: "0.9rem" }}>
            {filteredVilles.length} communes disponibles
          </p>
        </div>

        {/* Grille des liens de villes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "15px"
          }}
        >
          {filteredVilles.map((ville) => (
            <Link
              key={ville.slug}
              to={`/elagage/${ville.slug}`}
              style={{
                background: "white",
                padding: "15px 20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                borderLeft: "4px solid #c5a358",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#1a3c34",
                fontWeight: "600",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
            >
              <span>{ville.name}</span>
              <span style={{ fontSize: "0.85rem", color: "#777", background: "#f4f7f6", padding: "2px 6px", borderRadius: "4px" }}>
                {ville.cp}
              </span>
            </Link>
          ))}
        </div>

        {filteredVilles.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: "40px", fontSize: "1.1rem" }}>
            Aucune commune ne correspond à votre recherche. Contactez-nous directement pour votre projet !
          </p>
        )}
      </main>
    </div>
  );
}