import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ReviewForm() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Tes IDs sont maintenant bien intégrés
    emailjs.sendForm('service_dsm', 'contact_templates_dsm', form.current, 'GqDOtQPpBTuSlnCFA')
      .then(() => {
        setStatus("success");
      }, (error) => {
        setStatus("error");
        console.log(error.text);
      });
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--primary)" }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: "2rem" }}>Merci pour votre confiance.</h3>
        <p>Votre témoignage a été transmis avec succès.</p>
      </div>
    );
  }

  return (
    <section style={{ padding: "80px 20px", background: "white" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Laisser un avis</h2>
        
        <form ref={form} onSubmit={sendEmail} className="premium-form">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <input type="text" name="user_name" placeholder="Nom complet" required />
            <input type="text" name="user_city" placeholder="Ville (ex: Bordeaux)" required />
          </div>
          
          <select name="rating" style={{ 
            width: "100%", border: "none", borderBottom: "1px solid #e0e0e0", 
            padding: "15px 0", marginBottom: "25px", background: "transparent" 
          }}>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★☆ - Très bien</option>
            <option value="3">★★★☆☆ - Satisfaisant</option>
            <option value="2">★★☆☆☆ - Moyen</option>
            <option value="1">★☆☆☆☆ - Peu satisfaisant</option>
          </select>

          <textarea name="message" placeholder="Votre message..." rows="4" required></textarea>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button 
              type="submit" 
              className="btn" 
              disabled={status === "sending"}
              style={{
                opacity: status === "sending" ? "0.7" : "1",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "220px",
                justifyContent: "center"
              }}
            >
              {status === "sending" ? (
                <>
                  <span className="loader"></span>
                  Envoi en cours...
                </>
              ) : (
                "Publier mon avis"
              )}
            </button>
          </div>
          
          {status === "error" && (
            <p style={{ color: "red", textAlign: "center", marginTop: "15px" }}>
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </form> {/* <--- La fermeture manquante était ici */}
      </div>
    </section>
  );
}