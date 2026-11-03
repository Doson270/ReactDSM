import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import imgaccueil from "../assets/gallery/acceuil.webp";
import imgjardin from "../assets/gallery/avant-apres-jardin.webp";
import imgarbre from "../assets/gallery/arbre-tombé.webp";
import imgmap from "../assets/gallery/imgmaps.webp";
import tailledehaie from "../assets/gallery/taille-de-haie.webp";

export default function Home() {
  const services = [
    { 
      title: "Élagage & Taille", 
      desc: "Taille de restructuration, mise en sécurité et soins aux arbres. Nous intervenons sur tous types d'arbres pour préserver leur santé et votre sécurité à Bordeaux, Libourne et en Gironde." 
    },
    { 
      title: "Abattage Délicat", 
      desc: "Démontage d'arbres dangereux avec rétention en zones urbaines. Notre équipe gère l'abattage d'arbres en toute sécurité, même dans des espaces contraints en Gironde." 
    },
    { 
      title: "Taille de Haies", 
      desc: "Entretien régulier pour des clôtures végétales denses et esthétiques. Taille de haies de toutes essences à Bordeaux, Libourne et alentours." 
    },
    { 
      title: "Entretien Parcs", 
      desc: "Gestion complète de vos espaces verts et évacuation des déchets verts incluse. Interventions régulières pour particuliers et professionnels en Gironde." 
    }
  ];

  const galleryPreview = [imgjardin, imgarbre, tailledehaie];

  const galleryAlt = [
    "Élagage & abattage d'arbres en Gironde - DS Multiservices",
    "Taille de haies à Bordeaux et Libourne - DS Multiservices",
    "Entretien jardin et espaces verts en Gironde - DS Multiservices"
  ];

  const temoignages = [
    { nom: "Jean-Pierre M.", ville: "Libourne", note: "★★★★★", texte: "Intervention rapide pour l'abattage d'un grand pin dangereux à Libourne. Travail soigné, chantier propre. Je recommande vivement DS Multiservices." },
    { nom: "Sophie L.", ville: "Bordeaux", note: "★★★★★", texte: "Excellente taille de haies à Bordeaux, devis reçu en 24h et équipe très professionnelle. Prix honnête pour la qualité du travail rendu." },
    { nom: "Marc D.", ville: "Pessac", note: "★★★★★", texte: "Élagage de plusieurs arbres dans mon jardin. Résultat impeccable, équipe sérieuse et ponctuelle. Merci DS Multiservices !" }
  ];

  const faqs = [
    {
      q: "Intervenez-vous en urgence pour l'abattage d'un arbre dangereux en Gironde ?",
      r: "Oui, DS Multiservices intervient 7j/7 pour tout abattage d'arbre en urgence à Bordeaux, Libourne et dans toute la Gironde. Contactez-nous par téléphone au 07 76 55 33 70 pour une intervention rapide."
    },
    {
      q: "Quel est le prix d'un élagage en Gironde (33) ?",
      r: "Le tarif d'un élagage dépend de la taille de l'arbre, de son accessibilité et du type de travaux à réaliser. Nous proposons un devis élagage gratuit sous 48h, sans engagement."
    },
    {
      q: "Dans quelles communes de Gironde intervenez-vous ?",
      r: "Nous intervenons sur l'ensemble du département de la Gironde (33) : Bordeaux Métropole, le Libournais, le Bassin d'Arcachon et toutes les communes environnantes."
    },
    {
      q: "L'évacuation des déchets verts est-elle comprise ?",
      r: "Oui, nous assurons le broyage et l'évacuation complète des branches et déchets végétaux après chaque intervention d'élagage, d'abattage ou de taille de haies."
    }
  ];

  // Données structurées Schema.org JSON-LD pour la Home Page
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://dsmultiservices.fr/#organization",
        "name": "DS Multiservices - Élagage & Paysage Gironde",
        "url": "https://dsmultiservices.fr/",
        "telephone": "+33776553370",
        "priceRange": "€€",
        "image": "https://dsmultiservices.fr/logo-dsm.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Libourne",
          "postalCode": "33300",
          "addressRegion": "Gironde",
          "addressCountry": "FR"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Gironde (33)"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "24",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.r
          }
        }))
      }
    ]
  };

  return (
    <div className="home-container" style={{ background: "#fdfdfd" }}>
      <Helmet>
        <title>DS Multiservices | Élagage, Abattage & Taille de Haies à Bordeaux & Gironde (33)</title>
        <meta name="description" content="Expert élagueur à Bordeaux, Libourne et toute la Gironde (33). Devis gratuit sous 48h. Travaux assurés RC Pro, évacuation des déchets verts. Intervention rapide 7j/7." />
        <meta property="og:title" content="DS Multiservices | Élagage, Abattage & Taille de Haies en Gironde" />
        <meta property="og:description" content="Artisan élagueur paysagiste en Gironde (33). Devis gratuit sous 48h. Élagage, abattage délicat et taille de haies." />
        <meta property="og:url" content="https://dsmultiservices.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dsmultiservices.fr/logo-dsm.png" />
        <link rel="canonical" href="https://dsmultiservices.fr/" />
        <link rel="preload" as="image" href={imgaccueil} fetchPriority="high" />

        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="hero-section" style={{
        position: "relative",
        color: "white",
        textAlign: "center",
        padding: "160px 20px",
        backgroundColor: "#1a3c34",
        overflow: "hidden"
      }}>
        <img
          src={imgaccueil}
          alt="Élagage et abattage d'arbres en Gironde DS Multiservices"
          fetchPriority="high"
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover", zIndex: 1, opacity: 0.3
          }}
        />

        <div data-aos="fade-down" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 7vw, 3.8rem)", marginBottom: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>
            Élagage, Abattage & Taille de Haie en Gironde
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "40px", opacity: 0.9, maxWidth: "800px", margin: "0 auto 40px" }}>
            Intervention rapide & Urgence 7j/7 sur Bordeaux, Libourne et toute la Gironde (33). Devis gratuit sous 48h.
          </p>

          <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            <a
              href="tel:+33776553370"
              className="btn"
              style={{ padding: "15px 40px", fontSize: "1.1rem", width: "100%", maxWidth: "320px", textAlign: "center", boxSizing: "border-box" }}
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'conversion', { 'send_to': 'AW-18085079647/vELTCOrkhpscEN_U0a9D' });
                }
              }}
            >
              Appeler pour un Devis Gratuit
            </a>

            <span style={{ fontSize: "0.9rem", fontWeight: "bold", opacity: 0.8, margin: "5px 0", fontFamily: "sans-serif" }}>OU</span>

            <Link
              to="/contact"
              className="btn"
              style={{ padding: "15px 40px", fontSize: "1.1rem", width: "100%", maxWidth: "320px", textAlign: "center", boxSizing: "border-box" }}
            >
              Demander mon devis en ligne
            </Link>
          </div>

          <p style={{ marginTop: "25px", fontSize: "1rem", color: "#c5a358", fontWeight: "bold" }}>
            <span style={{ color: "#ffc107" }}>★★★★★</span> +50 clients satisfaits en Gironde
          </p>
        </div>
      </header>

      {/* --- TRUSTBAR --- */}
      <section style={{
        background: "white", padding: "40px 20px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        borderRadius: "15px", maxWidth: "1100px", margin: "-60px auto 60px auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px", position: "relative", zIndex: "10"
      }} data-aos="fade-up">
        {[
          { label: "Assurance RC Pro", sub: "Travaux 100% sécurisés", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> },
          { label: "Devis sous 48h", sub: "Réactivité garantie", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg> },
          { label: "Chantier Propre", sub: "Évacuation des déchets", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M17 8C8 10 5.9 16.17 3.82 21H5.71C7.38 17.07 11.07 13 17 13v5l7-7-7-7v3z"/></svg> },
          { label: "Expert Gironde", sub: "Bordeaux, Libourne & 33", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a3c34"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> }
        ].map((item, i, arr) => (
          <div key={i} style={{ textAlign: "center", borderRight: i < arr.length - 1 && window.innerWidth > 768 ? "1px solid #f0f0f0" : "none" }}>
            <div style={{ marginBottom: "10px" }}>{item.icon}</div>
            <h4 style={{ margin: "0", color: "#1a3c34", fontSize: "1.1rem", fontWeight: "700" }}>{item.label}</h4>
            <p style={{ fontSize: "0.85rem", color: "#777", marginTop: "5px" }}>{item.sub}</p>
          </div>
        ))}
      </section>

      {/* --- BLOC TEXTE SEO --- */}
      <section data-aos="fade-up" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto 20px auto" }}>
        <h2 style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
          Élagueur paysagiste professionnel en Gironde (33)
        </h2>
        <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "0 auto 30px auto" }}></div>
        <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "20px" }}>
          DS Multiservices est votre entreprise spécialisée en <strong>élagage, abattage d'arbres et taille de haies à Bordeaux, Libourne</strong> et dans l'ensemble de la Gironde.
          Que vous ayez besoin d'un <strong>élagueur professionnel</strong> pour un arbre menaçant, d'un <strong>abattage délicat par rétention</strong> en secteur résidentiel
          ou d'un entretien régulier de vos haies, nous intervenons avec réactivité et équipements sécurisés.
        </p>
        <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "20px" }}>
          Nous établissons des <strong>devis gratuits sous 48h</strong> pour l'ensemble de vos travaux d'espaces verts en Gironde.
          Toutes nos prestations sont couvertes par une <strong>assurance Responsabilité Civile Professionnelle</strong> et incluent le broyage ainsi que l'évacuation complète des rémanents végétaux.
        </p>
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <a
            href="tel:+33776553370"
            className="btn"
            style={{ padding: "15px 40px", fontSize: "1rem" }}
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'conversion', { 'send_to': 'AW-18085079647/vELTCOrkhpscEN_U0a9D' });
              }
            }}
          >
            Appeler pour un Devis Gratuit
          </a>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 data-aos="fade-up" style={{ fontSize: "2.8rem", color: "#1a3c34", fontFamily: "'Playfair Display', serif" }}>
            Nos Prestations en Gironde
          </h2>
          <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {services.map((s, index) => (
            <div key={s.title} data-aos="fade-up" data-aos-delay={index * 100} style={{ padding: "40px", width: "280px", textAlign: "center", backgroundColor: "#fff", borderBottom: "4px solid #c5a358", boxShadow: "0 5px 15px rgba(0,0,0,0.02)" }}>
              <h3 style={{ color: "#c5a358", marginBottom: "15px", fontSize: "1.4rem" }}>{s.title}</h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALERIE --- */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f4f7f6" }}>
        <h2 data-aos="fade-up" style={{ color: "#1a3c34", fontSize: "2.5rem", marginBottom: "15px", fontFamily: "'Playfair Display', serif" }}>
          Derniers Chantiers
        </h2>
        <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 40px auto", fontSize: "1rem" }}>
          Aperçu de nos interventions d'élagage, d'abattage et de taille de haies réalisées en Gironde.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto 50px auto" }}>
          {galleryPreview.map((url, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 200} style={{ height: "250px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", background: "#eee" }}>
              <img
                src={url}
                alt={galleryAlt[i]}
                loading="lazy"
                width="400"
                height="250"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <Link to="/galerie" className="btn" style={{ background: "#1a3c34", color: "#ffffff" }}>Voir toutes nos réalisations</Link>
      </section>

      {/* --- TÉMOIGNAGES --- */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 data-aos="fade-up" style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "15px" }}>
            Témoignages de nos clients
          </h2>
          <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "0 auto 50px auto" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {temoignages.map((t, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} style={{
                background: "#f4f7f6", borderRadius: "12px", padding: "35px 30px",
                textAlign: "left", borderBottom: "4px solid #c5a358"
              }}>
                <p style={{ color: "#ffc107", fontSize: "1.2rem", marginBottom: "12px" }}>{t.note}</p>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "20px", fontStyle: "italic" }}>
                  "{t.texte}"
                </p>
                <p style={{ color: "#1a3c34", fontWeight: "700", fontSize: "0.9rem", margin: 0 }}>
                  {t.nom} — <span style={{ color: "#c5a358" }}>{t.ville}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SEO --- */}
      <section style={{ padding: "80px 20px", background: "#f4f7f6" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 data-aos="fade-up" style={{ color: "#1a3c34", fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", marginBottom: "15px", textAlign: "center" }}>
            Questions fréquentes
          </h2>
          <div style={{ width: "60px", height: "4px", background: "#c5a358", margin: "0 auto 50px auto" }}></div>
          {faqs.map((item, i) => (
            <div key={i} data-aos="fade-up" style={{ marginBottom: "25px", background: "white", borderRadius: "10px", padding: "25px 30px", boxShadow: "0 3px 10px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "#1a3c34", fontSize: "1.05rem", marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
              <p style={{ color: "#666", margin: 0, fontSize: "0.95rem", lineHeight: "1.7" }}>{item.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CARTE & ZONES --- */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#1a3c34", marginBottom: "15px", fontFamily: "'Playfair Display', serif", fontSize: "2.2rem" }}>
            Zone d'intervention : Toute la Gironde (33)
          </h2>
          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 20px auto", fontSize: "1rem" }}>
            Basés en Gironde, nous intervenons rapidement sur Bordeaux, Libourne et dans plus de 500 communes pour vos travaux d'élagage, abattage et entretien de jardins.
          </p>
          <div style={{ marginBottom: "35px" }}>
            <Link to="/zones-intervention" style={{ color: "#c5a358", fontWeight: "bold", textDecoration: "underline", fontSize: "1.05rem" }}>
              Découvrir nos 535 communes d'intervention →
            </Link>
          </div>
          <a
            href="https://www.google.com/maps/place/DSMultiservices/@44.9549377,-0.4702343,88900m/data=!3m1!1e3!4m14!1m7!3m6!1s0xd552d007d27fe2b:0xe016444afb83cf1e!2sDSMultiservices!8m2!3d44.9724389!4d-0.459054!16s%2Fg%2F11w41x9zt4!3m5!1s0xd552d007d27fe2b:0xe016444afb83cf1e!8m2!3d44.9724389!4d-0.459054!16s%2Fg%2F11w41x9zt4?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          >
            <img
              src={imgmap}
              alt="Zone d'intervention DS Multiservices Gironde"
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
            <div style={{
              position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
              background: "rgba(26, 60, 52, 0.9)", color: "white",
              padding: "10px 20px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "bold"
            }}>
              Voir la zone d'intervention sur Google Maps
            </div>
          </a>
        </div>
      </section>

      {/* BOUTON FLOTTANT APPEL */}
      <a href="tel:+33776553370" className="floating-call" aria-label="Appeler DS Multiservices">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
      </a>
    </div>
  );
}