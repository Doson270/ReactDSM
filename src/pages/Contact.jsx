import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

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
        <div className="card-hover" style={{ padding: "50px", background: "white" }}>
          <form ref={form} onSubmit={sendEmail} className="premium-form">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <input type="text" name="user_name" placeholder="Nom" required style={{ width: "100%" }} />
              <input type="text" name="user_firstname" placeholder="Prénom" required style={{ width: "100%" }} />
            </div>
            
            <input type="tel" name="user_phone" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" placeholder="Téléphone" required style={{ width: "100%" }} />
            
            <input type="email" name="user_email" placeholder="Adresse Email" required style={{ width: "100%" }} />
            
            <input type="text" name="user_adress" placeholder="Adresse des travaux (Optionnel)" style={{ width: "100%" }} />
            
            <textarea name="message" placeholder="Décrivez votre projet (ex: Taille de 20m de haie, Élagage chêne...)" required style={{ width: "100%", minHeight: "120px", resize: "none" }} />
            
            <button className="btn" style={{ width: "100%", marginTop: "20px" }}>Envoyer la demande</button>
          </form>
        </div>
      </section>

      {/* Infos complémentaires */}
      <section style={{ textAlign: "center", paddingBottom: "80px" }}>
        <p style={{ fontWeight: "600" }}>Ou contactez-nous directement :</p>
        <a href="tel:0776553370" style={{ fontSize: "1.5rem", color: "var(--primary)", textDecoration: "none", fontWeight: "700" }}>07 76 55 33 70</a>
      </section>

      <a href="tel:0776553370" className="call-btn" style={{position:"fixed", bottom:"30px", right:"30px", width:"60px", height:"60px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}}>📞</a>
    </div>
  );
}