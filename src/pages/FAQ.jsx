import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";

const AccordionItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        marginBottom: "15px",
        border: "1px solid #ececec",
        borderRadius: "12px",
        backgroundColor: "white",
        overflow: "hidden",
        boxShadow: isOpen ? "0 10px 25px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: "100%", padding: "25px", textAlign: "left", border: "none",
          background: "none", cursor: "pointer", display: "flex",
          justifyContent: "space-between", alignItems: "center"
        }}
      >
        <span style={{
          fontWeight: "700",
          color: isOpen ? "#c5a358" : "#1a3c34",
          fontSize: "1.1rem",
          transition: "color 0.3s"
        }}>
          {question}
        </span>
        <span style={{
          color: "#c5a358",
          fontSize: "1.5rem",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
          fontWeight: "300"
        }}>{isOpen ? "✕" : "+"}</span>
      </button>

      <div style={{
        maxHeight: isOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: isOpen ? "0 25px 25px 25px" : "0 25px"
      }}>
        <p style={{ color: "#555", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      q: "Dans quelles zones de la Gironde intervenez-vous ?",
      a: "Basés à Bordeaux, nous couvrons un rayon de 100 km. Nous intervenons régulièrement à Mérignac, Pessac, Talence, mais aussi sur le Bassin d'Arcachon, le Libournais et le Médoc."
    },
    {
      q: "Le devis pour un élagage ou un abattage est-il gratuit ?",
      a: "Oui, totalement gratuit. Nous nous déplaçons systématiquement sur place pour évaluer la santé de l'arbre, les contraintes de sécurité et vous proposer un chiffrage précis sous 48h."
    },
    {
      q: "Proposez-vous l'évacuation des déchets verts ?",
      a: "C'est une partie intégrante de notre service. Nous broyons les branches sur place ou évacuons la totalité des résidus vers des centres de recyclage spécialisés pour laisser votre terrain impeccable."
    },
    {
      q: "Êtes-vous assuré pour les travaux dangereux ?",
      a: "Absolument. DS Multiservices possède une assurance Responsabilité Civile Professionnelle (RC Pro) spécifique aux métiers de l'élagage. Votre propriété et notre équipe sont 100% protégées."
    },
    {
      q: "Quelle est la meilleure période pour élaguer mes arbres ?",
      a: "Cela dépend de l'essence, mais en Gironde, la taille de sécurité se fait idéalement en période de repos végétatif (automne/hiver). Pour une taille de restructuration, le printemps est aussi possible."
    },
    {
      q: "Comment se passe le paiement ?",
      a: "Nous acceptons les virements bancaires et les chèques. Une facture détaillée vous est remise à la fin du chantier une fois que vous avez validé la propreté des lieux."
    }
  ];

  return (
    <div className="faq-page" style={{ background: "#fcfcfc", minHeight: "100vh" }}>
      <Helmet>
        <title>FAQ Élagage & Jardin Bordeaux | DS Multiservices Gironde</title>
        <meta name="description" content="Toutes les réponses à vos questions sur l'élagage d'arbres, l'abattage, la taille de haies et les tarifs en Gironde. Devis gratuit et intervention rapide." />
        <meta property="og:title" content="FAQ Élagage & Jardinage Bordeaux | DS Multiservices" />
        <meta property="og:description" content="Toutes les réponses à vos questions sur l'élagage, taille de haies et entretien de jardin à Bordeaux et en Gironde." />
        <meta property="og:url" content="https://dsmultiservices.vercel.app/faq" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.vercel.app/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        })}</script>
      </Helmet>

      <Navbar />

      <header style={{
        background: "linear-gradient(rgba(26,60,52,0.85), rgba(26,60,52,0.85)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000') center/cover",
        color: "white", padding: "140px 20px", textAlign: "center"
      }}>
        <div data-aos="fade-down">
          <span style={{ color: "#c5a358", letterSpacing: "3px", fontSize: "0.9rem", fontWeight: "700" }}>AIDE & CONSEILS</span>
          <h1 style={{ fontSize: "3.5rem", marginTop: "10px", fontFamily: "'Playfair Display', serif" }}>FAQ Élagage & Jardinage à Bordeaux</h1>
        </div>
      </header>

      <main style={{ maxWidth: "850px", margin: "80px auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }} data-aos="fade">
          <h2 style={{ color: "#1a3c34", fontSize: "2rem" }}>Questions Fréquentes</h2>
          <div style={{ width: "50px", height: "3px", background: "#c5a358", margin: "20px auto" }}></div>
          <p style={{ color: "#777" }}>Retrouvez ici les réponses aux interrogations les plus courantes de nos clients bordelais.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} index={i} />
          ))}
        </div>

        <div
          data-aos="zoom-in"
          style={{
            marginTop: "100px",
            padding: "60px 40px",
            background: "#1a3c34",
            borderRadius: "24px",
            textAlign: "center",
            color: "white",
            boxShadow: "0 20px 40px rgba(26, 60, 52, 0.2)"
          }}
        >
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", fontFamily: "'Playfair Display', serif" }}>Encore un doute ?</h2>
          <p style={{ marginBottom: "35px", opacity: 0.8, maxWidth: "600px", margin: "0 auto 35px" }}>
            Chaque jardin est unique. Contactez-nous pour obtenir un conseil personnalisé pour vos arbres ou vos espaces verts.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn" style={{ minWidth: "200px" }}>Nous écrire</a>
            <a href="tel:+33776553370" className="btn" style={{
              background: "transparent",
              border: "2px solid white",
              minWidth: "200px"
            }}>07 76 55 33 70</a>
          </div>
        </div>
      </main>

      <a href="tel:+33776553370" className="floating-call" aria-label="Appeler DS Multiservices">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>
    </div>
  );
}