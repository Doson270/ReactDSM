import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
        () => alert("Message envoyé avec succès ✅"),
        (error) => alert("Erreur lors de l'envoi ❌: " + error.text)
    );
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact & Devis Gratuit - DS Multiservices Bordeaux</title>
        <meta name="description" content="Contactez DS Multiservices pour vos devis d'élagage et entretien de jardin à Bordeaux." />
      </Helmet>

      <Navbar />

      <header style={{
        background: "var(--primary)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <span className="subtitle" style={{color: "var(--accent)", letterSpacing:"3px"}}>CONTACT</span>
        <h1 style={{fontSize: "3rem", marginTop: "10px"}}>Demander un Devis</h1>
        <p style={{opacity: 0.8, marginTop: "10px"}}>Réponse rapide sous 24h</p>
      </header>

      <section style={{ padding: "80px 20px", maxWidth: "700px", margin: "auto" }}>
          <ContactForm />
      </section>

      {/* Infos complémentaires */}
      <section style={{ textAlign: "center", paddingBottom: "80px" }}>
        <p style={{ fontWeight: "600" }}>Ou contactez-nous directement :</p>
        <a href="tel:0776553370" style={{ fontSize: "1.5rem", color: "var(--primary)", textDecoration: "none", fontWeight: "700" }}>07 76 55 33 70</a>
      </section>

      <a href="tel:0776553370" className="floating-call">📞</a>
      
    </div>
  );
}