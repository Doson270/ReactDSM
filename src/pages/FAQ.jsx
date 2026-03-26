import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

// Composant pour chaque ligne de la FAQ
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
        <meta name="keywords" content="faq élagage bordeaux, tarif abattage arbre 33, entretien jardin questions, devis élagueur gironde" />
      </Helmet>

      <Navbar />

      {/* Header Section */}
      <header style={{ 
        background: "linear-gradient(rgba(26,60,52,0.85), rgba(26,60,52,0.85)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000') center/cover", 
        color: "white", padding: "140px 20px", textAlign: "center" 
      }}>
        <div data-aos="fade-down">
            <span style={{ color: "#c5a358", letterSpacing: "3px", fontSize: "0.9rem", fontWeight: "700" }}>AIDE & CONSEILS</span>
            <h1 style={{ fontSize: "3.5rem", marginTop: "10px", fontFamily: "'Playfair Display', serif" }}>Vos Questions</h1>
        </div>
      </header>

      {/* Accordion Section */}
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

        {/* Contact CTA Block */}
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
            <a href="tel:0776553370" className="btn" style={{ 
                background: "transparent", 
                border: "2px solid white", 
                minWidth: "200px" 
            }}>07 76 55 33 70</a>
          </div>
        </div>
      </main>

      {/* Floating Action Button (CSS class defined in App.css) */}
      <a href="tel:0776553370" className="floating-call">📞</a>
    </div>
  );
}