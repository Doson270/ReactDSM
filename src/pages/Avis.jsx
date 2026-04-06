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
        <meta property="og:url" content="https://dsmultiservices.vercel.app/avis" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.vercel.app/avis" />
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

      <header data-aos="fade" className="hero-section" style={{ background: "linear-gradient(rgba(26,60,52,0.9), rgba(26,60,52,0.9)), url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000') center/cover", color: "white", textAlign: "center", padding: "100px 20px" }}>
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
    </div>
  );
}