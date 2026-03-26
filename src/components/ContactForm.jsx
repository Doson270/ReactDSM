import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
    }, (error) => {
      setStatus("error");
      console.log(error.text);
    });
  };

  if (status === "success") {
    return (
      <div style={{ 
        textAlign: "center", 
        padding: "80px 20px",  
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        background: "white"
      }}>
        <h3 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "2.2rem", 
          color: "#1a3c34",
          marginBottom: "15px" 
        }}>
          Merci pour votre message.
        </h3>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Votre demande de devis a été transmise avec succès. <br/>
          Nous reviendrons vers vous sous 48h.
        </p>
      </div>
    );
  }

  return (
    <section style={{ padding: "40px 0", background: "transparent" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        
        <form ref={form} onSubmit={sendEmail} className="premium-form">
          {/* Ligne 1 : Nom et Téléphone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <input type="text" name="user_name" placeholder="Nom complet" required />
            <input type="tel" name="user_phone" placeholder="Téléphone" required />
          </div>
          
          {/* Ligne 2 : Adresse ou Ville (AJOUTÉ) */}
          <input 
            type="text" 
            name="user_address" 
            placeholder="Adresse du chantier ou Ville (ex: Bordeaux, 33000)" 
            required 
            style={{ width: "100%", marginTop: "20px" }} 
          />

          {/* Ligne 3 : Email */}
          <input 
            type="email" 
            name="user_email" 
            placeholder="Votre adresse Email" 
            required 
            style={{ width: "100%", marginTop: "20px" }} 
          />

          {/* Ligne 4 : Message */}
          <textarea 
            name="message" 
            placeholder="Détails de votre projet (Nombre d'arbres, hauteur, accès...)" 
            rows="5" 
            required 
            style={{ marginTop: "20px" }}
          ></textarea>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button 
              type="submit" 
              className="btn" 
              disabled={status === "sending"}
              style={{
                background: "#c5a358",
                color: "white",
                border: "none",
                padding: "15px 40px",
                borderRadius: "5px",
                fontWeight: "bold",
                opacity: status === "sending" ? "0.7" : "1",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "250px",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              {status === "sending" ? (
                <>
                  <span className="loader"></span>
                  Envoi en cours...
                </>
              ) : (
                "Demander mon devis gratuit"
              )}
            </button>
          </div>
          
          {status === "error" && (
            <p style={{ color: "#d9534f", textAlign: "center", marginTop: "15px", fontWeight: "bold" }}>
              Désolé, une erreur est survenue. Veuillez nous contacter par téléphone.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}