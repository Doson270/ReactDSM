import React from "react";
import Navbar from "../components/Navbar";
import ReviewForm from "../components/ReviewForm";
import { Helmet } from "react-helmet-async";

export default function Avis() {
  const testimonials = [
    { name: "Jean-Pierre M.", location: "Bordeaux Caudéran", content: "Un travail d'orfèvre sur nos chênes centenaires...", rating: 5 },
    { name: "Sophie de V.", location: "Saint-Émilion", content: "Leur expertise en taille de haie est incomparable...", rating: 5 },
    { name: "Marc A.", location: "Mérignac", content: "Intervention rapide, sécurisée et très professionnelle...", rating: 5 },
    { name: "Hélène G.", location: "Pessac", content: "Ils conseillent sur la santé des végétaux. Je recommande.", rating: 5 }
  ];

  return (
    <div className="avis-page">
      <Helmet>
        <title>Avis Clients - Élagage & Jardinage à Bordeaux | DS Multiservices</title>
        <meta name="description" content="Découvrez les avis de nos clients sur nos services d'entretien de jardin, taille de haies et élagage à Bordeaux et en Gironde. Laissez votre témoignage." />
        <meta property="og:title" content="Avis Clients - DS Multiservices | Jardinage Bordeaux" />
        <meta property="og:description" content="Découvrez les avis de nos clients sur nos services d'entretien de jardin et élagage à Bordeaux." />
        <meta property="og:url" content="https://dsmultiservices.fr/avis" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.fr/avis" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "DS Multiservices",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "4"
          },
          "review": testimonials.map(t => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": t.name },
            "reviewRating": { "@type": "Rating", "ratingValue": t.rating },
            "reviewBody": t.content
          }))
        })}</script>
      </Helmet>
      <Navbar />

      <header data-aos="fade" className="hero-section-avis" style={{ background: "linear-gradient(rgba(26, 62, 54, 0.9), rgba(26,60,52,0.9)), url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000') center/cover", color: "white", textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "3rem" }}>Avis Clients - Élagage & Jardinage à Bordeaux</h1>
        <p>L'excellence confirmée par nos clients en Gironde</p>
      </header>

      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
          {testimonials.map((t, index) => (
            <div key={index}
                 data-aos="flip-left"
                 data-aos-delay={index * 100}
                 className="card-hover"
                 style={{ padding: "40px", borderTop: "4px solid var(--accent)" }}>
              <div style={{ color: "var(--accent)", marginBottom: "15px" }}>{"★".repeat(t.rating)}</div>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>"{t.content}"</p>
              <h4 style={{ margin: "0", color: "var(--primary)" }}>{t.name}</h4>
              <small>{t.location}</small>
            </div>
          ))}
        </div>
        <div data-aos="fade-up"><ReviewForm /></div>
      </section>
<a 
  href="tel:+33776553370" 
  className="floating-call" 
  aria-label="Appeler DS Multiservices"
  onClick={(e) => {
    // Étape 1 : On vérifie dans la console que le clic fonctionne
    console.log("Clic sur le bouton d'appel détecté");

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18085079647/vELTCOrkhpscEN_U0a9D',
        'event_callback': () => console.log("Signal de conversion envoyé à Google avec succès !")
      });
    } else {
      console.warn("Attention : window.gtag n'est pas défini. Vérifiez index.html");
    }
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
</a>
    </div>
  );
}