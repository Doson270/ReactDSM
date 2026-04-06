import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Devis Gratuit - Élagage & Jardinage à Bordeaux | DS Multiservices</title>
        <meta name="description" content="Demandez votre devis gratuit pour l'entretien de jardin, taille de haies et élagage à Bordeaux et en Gironde. Réponse sous 24h. DS Multiservices." />
        <meta property="og:title" content="Devis Gratuit - Élagage & Jardinage à Bordeaux | DS Multiservices" />
        <meta property="og:description" content="Demandez votre devis gratuit pour l'entretien de jardin et élagage à Bordeaux. Réponse sous 24h." />
        <meta property="og:url" content="https://dsmultiservices.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dsmultiservices.vercel.app/contact" />
      </Helmet>

      <Navbar />

      <header style={{
        background: "var(--primary)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <span className="subtitle" style={{ color: "var(--accent)", letterSpacing: "3px" }}>CONTACT</span>
        <h1 style={{ fontSize: "3rem", marginTop: "10px" }}>Devis Gratuit - Élagage & Jardinage à Bordeaux</h1>
        <p style={{ opacity: 0.8, marginTop: "10px" }}>Réponse rapide sous 24h</p>
      </header>

      <section style={{ padding: "80px 20px", maxWidth: "700px", margin: "auto" }}>
        <ContactForm />
      </section>

      <section style={{ textAlign: "center", paddingBottom: "80px" }}>
        <p style={{ fontWeight: "600" }}>Ou contactez-nous directement :</p>
        <a href="tel:+33776553370" style={{ fontSize: "1.5rem", color: "var(--primary)", textDecoration: "none", fontWeight: "700" }}>
          07 76 55 33 70
        </a>
      </section>

      <a href="tel:+33776553370" className="floating-call" aria-label="Appeler DS Multiservices">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>

    </div>
  );
}