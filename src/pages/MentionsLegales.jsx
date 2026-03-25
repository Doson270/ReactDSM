import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function MentionsLegales() {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Mentions Légales | DS Multiservices</title>
        <meta name="robots" content="noindex" /> {/* On ne veut pas que cette page soit la priorité sur Google */}
      </Helmet>
      <Navbar />
      
      <div style={{ maxWidth: "800px", margin: "80px auto", padding: "0 20px", color: "var(--primary)" }}>
        <h1 style={{ fontFamily: "Playfair Display", marginBottom: "40px" }}>Mentions Légales</h1>
        
        <section style={{ marginBottom: "30px" }}>
          <h3>1. Éditeur du site</h3>
          <p><strong>DS Multiservices</strong></p>
          <p>Entrepreneur Individuel (EI)</p>
          <p>SIRET : 93089723600012</p>
          <p>Siège social : 8, impasse de la Gare 33240 Cubzac-les-Ponts</p>
          <p>Directeur de la publication : Sarrailh Doson</p>
          <p>Téléphone : 07 76 55 33 70</p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>2. Hébergement</h3>
          <p>Le site est hébergé par Vercel Inc.</p>
          <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h3>3. Propriété intellectuelle</h3>
          <p>L'ensemble des textes, photos et logos présents sur ce site sont la propriété exclusive de DS Multiservices. Toute reproduction est interdite sans accord préalable.</p>
        </section>
      </div>
    </div>
  );
}