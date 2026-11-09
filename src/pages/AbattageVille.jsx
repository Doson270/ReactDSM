import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { VILLES_GIRONDE, VILLE_PAR_DEFAUT, SECTEURS_GIRONDE } from "../data/villes";

export default function AbattageVille() {
  const { villeSlug } = useParams();
  const ville = VILLES_GIRONDE.find((v) => v.slug === villeSlug) || VILLE_PAR_DEFAUT;

  // Maillage géographique
  let communesVoisines = VILLES_GIRONDE.filter(
    (v) => v.secteur === ville.secteur && v.slug !== ville.slug
  );
  if (communesVoisines.length < 5) {
    const complement = VILLES_GIRONDE.filter(
      (v) => v.slug !== ville.slug && !communesVoisines.some((cv) => cv.slug === v.slug)
    );
    communesVoisines = [...communesVoisines, ...complement];
  }
  communesVoisines = communesVoisines.slice(0, 5);

  const nomSecteur = SECTEURS_GIRONDE[ville.secteur] || "Gironde";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `https://dsmultiservices.fr/abattage/${ville.slug}/#business`,
        "name": `DS Multiservices - Abattage d'arbres à ${ville.name}`,
        "image": "https://dsmultiservices.fr/logo-dsm.png",
        "url": `https://dsmultiservices.fr/abattage/${ville.slug}`,
        "telephone": "+33776553370",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": ville.name,
          "postalCode": ville.cp,
          "addressRegion": "Gironde",
          "addressCountry": "FR"
        },
        "description": `Intervention d'abattage d'arbres dangereux et démontage par rétention à ${ville.name} (${ville.cp}). Devis gratuit et intervention d'urgence.`
      }
    ]
  };

  return (
    <div className="home-container" style={{ background: "#fdfdfd", color: "#2c3e50" }}>
        <Helmet>
            {/* Titre corrigé avec backticks pour bien évaluer les variables */}
            <title>{`Abattage & Démontage d'Arbres à ${ville.name}${ville.cp} | DS Multiservices`}</title>

            {/* Meta description avec fallback sécurisé */}
            <meta 
            name="description" 
            content={`Entreprise spécialisée dans l'abattage d'arbres complexes, démontage avec rétention et mise en sécurité à ${ville.name}${ville.cp}. Devis gratuit.`} 
            />

            {/* URL canonique stricte */}
            <link rel="canonical" href={`https://dsmultiservices.fr/abattage/${ville.slug}`}/>

            {/* Schema JSON-LD */}
            {schemaData && (
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
            )}
        </Helmet>

      <Navbar />

      {/* Fil d'Ariane */}
      <div style={{ background: "#f4f7f6", borderBottom: "1px solid #e0e0e0", padding: "12px 0", marginTop: "70px" }}>
        <nav aria-label="Fil d'Ariane" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", fontSize: "0.9rem" }}>
          <ol style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px", padding: 0, margin: 0, color: "#666" }}>
            <li><Link to="/" style={{ color: "#1a3c34", textDecoration: "none", fontWeight: "600" }}>Accueil</Link></li>
            <li>/</li>
            <li><Link to="/zones-intervention" style={{ color: "#1a3c34", textDecoration: "none", fontWeight: "600" }}>Zones d'intervention</Link></li>
            <li>/</li>
            <li style={{ color: "#c5a358", fontWeight: "bold" }}>Abattage {ville.name}</li>
          </ol>
        </nav>
      </div>

      {/* Hero Header */}
      <header style={{ color: "white", textAlign: "center", padding: "90px 20px", backgroundColor: "#1a3c34" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#c5a358", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Intervention Sécurisée - {nomSecteur}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Playfair Display', serif", margin: "15px 0 20px" }}>
            Abattage & Démontage d'Arbres à {ville.name} ({ville.cp})
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.6", opacity: 0.9, marginBottom: "30px" }}>
            Suppression d'arbres dangereux, malades ou gênants sur la commune de {ville.name}. Démontage minutieux par rétention en milieu contraint.
          </p>
          <a href="tel:+33776553370" style={{ background: "#c5a358", color: "white", padding: "14px 30px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
            Demander un Devis Abattage à {ville.name}
          </a>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        
        {/* Contenu Spécifique Abattage */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px" }}>
            Spécialiste de l’abattage délicat à {ville.name}
          </h2>
          <p style={{ lineHeight: "1.7", color: "#444", fontSize: "1.05rem", marginBottom: "20px" }}>
            Lorsque l'emplacement d'un arbre ne permet pas un abattage direct au sol (proximité de maisons, lignes électriques, vérandas à {ville.name}), nous utilisons la technique du <strong>démontage avec rétention</strong>. Les branches et sections de trône sont coupées puis descendues délicatement au cordage sans aucun risque pour vos infrastructures.
          </p>
        </section>

        {/* 3 piliers d'intervention */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px", marginBottom: "60px" }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderLeft: "4px solid #c5a358" }}>
            <h3 style={{ color: "#1a3c34", fontSize: "1.2rem", marginBottom: "10px" }}>Abattage Direct</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Chute contrôlée au pied de l'arbre lorsque l'espace disponible à {ville.name} le permet en toute sécurité.</p>
          </div>
          <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderLeft: "4px solid #1a3c34" }}>
            <h3 style={{ color: "#1a3c34", fontSize: "1.2rem", marginBottom: "10px" }}>Démontage par Rétention</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Découpe tronçon par tronçon avec système de poulies et cordages au-dessus des zones sensibles.</p>
          </div>
          <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderLeft: "4px solid #c5a358" }}>
            <h3 style={{ color: "#1a3c34", fontSize: "1.2rem", marginBottom: "10px" }}>Dessouchage & Grignotage</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Rogneuse de souche pour éliminer les racines et remettre le terrain au propre après abattage.</p>
          </div>
        </section>

        {/* Maillage géographique */}
        <section style={{ background: "#f4f7f6", padding: "40px 20px", borderRadius: "16px" }}>
          <h3 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", textAlign: "center" }}>
            Services d'abattage aux alentours de {ville.name}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
            {communesVoisines.map((voisine) => (
              <Link 
                key={voisine.slug} 
                to={`/abattage/${voisine.slug}`}
                style={{ background: "white", padding: "10px 20px", borderRadius: "25px", color: "#1a3c34", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", border: "1px solid #eaeaea" }}
              >
                Abattage {voisine.name} ({voisine.cp})
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}