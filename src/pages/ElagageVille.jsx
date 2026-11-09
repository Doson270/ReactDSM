import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { VILLES_GIRONDE, VILLE_PAR_DEFAUT, SECTEURS_GIRONDE } from "../data/villes";

export default function ElagageVille() {
  const { villeSlug } = useParams();
  const ville = VILLES_GIRONDE.find((v) => v.slug === villeSlug) || VILLE_PAR_DEFAUT;

  // 1. Maillage géographique par secteur (minimum 5 communes proches)
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

  // 2. Variateur dynamique de texte selon l'ID / longueur de la ville (Evite le duplicate content)
  const isOdd = ville.name.length % 2 === 0;
  const nomSecteur = SECTEURS_GIRONDE[ville.secteur] || "Gironde";

  const accrocheTexte = isOdd
    ? `Besoin d'un élagueur grimpeur qualifié à ${ville.name} ? DS Multiservices intervient rapidement pour la taille douce, l'éclaircissage et l'entretien de vos grands arbres dans le secteur du ${nomSecteur}.`
    : `Pour la préservation et la sécurité de vos espaces verts à ${ville.name} (${ville.cp}), notre équipe réalise tous travaux d'élagage délicat et de soins aux arbres avec du matériel professionnel.`;

  // 3. FAQ Dynamique (Rich Snippets SEO)
  const faqList = [
    {
      q: `Quelle est la meilleure période pour élaguer un arbre à ${ville.name} ?`,
      a: `L'élagage en période de repos végétatif (en hiver) est idéal pour la plupart des essences à ${ville.name}. Cependant, la taille en vert (au printemps ou en été) peut être réalisée sur certaines espèces pour limiter la repousse.`
    },
    {
      q: `Quel est le prix d'un élagage d'arbre à ${ville.name} (${ville.cp}) ?`,
      a: `Le tarif dépend de la hauteur de l'arbre, de son accessibilité et du type de taille à effectuer. Nous proposons des devis gratuits et personnalisés sur toute la commune de ${ville.name} et ses alentours.`
    },
    {
      q: `Est-ce que DS Multiservices s'occupe de l'évacuation des branches à ${ville.name} ?`,
      a: `Oui, absolument. Après chaque chantier d'élagage à ${ville.name}, nous assurons le broyage des branches et le nettoyage complet du terrain.`
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `https://dsmultiservices.fr/elagage/${ville.slug}/#business`,
        "name": `DS Multiservices - Élagage à ${ville.name}`,
        "image": "https://dsmultiservices.fr/logo-dsm.png",
        "url": `https://dsmultiservices.fr/elagage/${ville.slug}`,
        "telephone": "+33776553370",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": ville.name,
          "postalCode": ville.cp,
          "addressRegion": "Gironde",
          "addressCountry": "FR"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${ville.name} (${ville.cp})`
        },
        "description": accrocheTexte
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqList.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="home-container" style={{ background: "#fdfdfd", color: "#2c3e50" }}>
      <Helmet>
        <title>Élagage d'Arbres à {ville.name} ({ville.cp}) | Devis Gratuit | DS Multiservices</title>
        <meta name="description" content={accrocheTexte} />
        <link rel="canonical" href={`https://dsmultiservices.fr/elagage/${ville.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
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
            <li style={{ color: "#c5a358", fontWeight: "bold" }}>Élagage {ville.name}</li>
          </ol>
        </nav>
      </div>

      {/* Hero Header */}
      <header style={{ color: "white", textAlign: "center", padding: "90px 20px", backgroundColor: "#1a3c34" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#c5a358", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Secteur {nomSecteur}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Playfair Display', serif", margin: "15px 0 20px" }}>
            Élagage & Entretien d'Arbres à {ville.name} ({ville.cp})
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.6", opacity: 0.9, marginBottom: "30px" }}>
            {accrocheTexte}
          </p>
          <a href="tel:+33776553370" style={{ background: "#c5a358", color: "white", padding: "14px 30px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
            Demander un Devis Gratuit à {ville.name}
          </a>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        
        {/* Section Explicative Retaillée */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px" }}>
            Pourquoi faire appel à un élagueur professionnel à {ville.name} ?
          </h2>
          <p style={{ lineHeight: "1.7", color: "#444", fontSize: "1.05rem", marginBottom: "20px" }}>
            À {ville.name}, la végétation et le climat de la Gironde nécessitent un entretien régulier pour prévenir les risques de chute de branches lors des intempéries et préserver la santé des arbres. Que ce soit pour une <strong>taille de formation</strong>, un <strong>éclaircissage de crown</strong> ou l'émondage de branches gênantes à proximité des habitations ou des lignes électriques, DS Multiservices garantit une intervention sécurisée.
          </p>
        </section>

        {/* Grille de Prestations */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", marginBottom: "30px", textAlign: "center" }}>
            Nos interventions sur mesure à {ville.name}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderTop: "4px solid #c5a358" }}>
              <h3 style={{ color: "#1a3c34", fontSize: "1.25rem", marginBottom: "12px" }}>Taille Raisonnée & Douce</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>Respect de la physiologie de l'arbre sans mutilation pour maintenir son port naturel à {ville.name}.</p>
            </div>
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderTop: "4px solid #1a3c34" }}>
              <h3 style={{ color: "#1a3c34", fontSize: "1.25rem", marginBottom: "12px" }}>Taille de Sécurité</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>Suppression du bois mort et des branches menaçantes au-dessus des toitures ou des clôtures à {ville.name}.</p>
            </div>
            <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderTop: "4px solid #c5a358" }}>
              <h3 style={{ color: "#1a3c34", fontSize: "1.25rem", marginBottom: "12px" }}>Taille de Haies & Arbustes</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>Entretien régulier ou rabattage de haies (thuyas, lauriers, cyprès) sur tout le secteur {ville.cp}.</p>
            </div>
          </div>
        </section>

        {/* Section FAQ (Génération d'accordéon SEO) */}
        <section style={{ background: "white", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "60px", border: "1px solid #eee" }}>
          <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", marginBottom: "30px" }}>
            Questions fréquentes sur l'élagage à {ville.name}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqList.map((item, index) => (
              <div key={index} style={{ borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                <h3 style={{ color: "#1a3c34", fontSize: "1.1rem", marginBottom: "8px" }}>{item.q}</h3>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maillage interne localisé */}
        <section style={{ background: "#f4f7f6", padding: "40px 20px", borderRadius: "16px" }}>
          <h3 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", textAlign: "center" }}>
            Élagage d'arbres dans les communes proches de {ville.name}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
            {communesVoisines.map((voisine) => (
              <Link 
                key={voisine.slug} 
                to={`/elagage/${voisine.slug}`}
                style={{ background: "white", padding: "10px 20px", borderRadius: "25px", color: "#1a3c34", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem", border: "1px solid #eaeaea" }}
              >
                Élagage {voisine.name} ({voisine.cp})
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}