import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";

export default function MentionsLegales() {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Mentions Légales | DS Multiservices</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      
      {/* On ajoute 120px de padding pour que la Navbar fixe ne cache pas le titre */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "120px 20px 80px", color: "#1a3c34", lineHeight: "1.6" }}>
        <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.5rem", marginBottom: "40px", borderBottom: "2px solid #c5a358", display: "inline-block" }}>
            Mentions Légales
        </h1>
        
        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#c5a358" }}>1. Éditeur du site</h3>
          <p><strong>DS Multiservices</strong></p>
          <p>Entrepreneur Individuel (EI)</p>
          <p>SIRET : 93089723600012</p>
          <p>Siège social : 8, impasse de la Gare, 33240 Cubzac-les-Ponts</p>
          <p>Directeur de la publication : Sarrailh Doson</p>
          <p>Téléphone : 07 76 55 33 70</p>
          <p>Email : [Ton Email Pro Ici]</p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#c5a358" }}>2. Hébergement</h3>
          <p>Le site est hébergé par Vercel Inc.</p>
          <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Site web : https://vercel.com</p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#c5a358" }}>3. Propriété intellectuelle</h3>
          <p>L'ensemble des textes, photos et logos présents sur ce site sont la propriété exclusive de DS Multiservices. Toute reproduction, même partielle, est interdite sans accord préalable écrit.</p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#c5a358" }}>4. Protection des données (RGPD)</h3>
          <p>Les informations recueillies via le formulaire de contact (Nom, Téléphone, Email, Adresse) sont utilisées uniquement pour répondre à vos demandes de devis. Elles ne sont jamais cédées à des tiers et sont conservées pendant une durée maximale de 3 ans.</p>
          <p>Conformément à la loi « Informatique et Libertés », vous pouvez exercer votre droit d'accès et de rectification aux données vous concernant en nous contactant par téléphone.</p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ color: "#c5a358" }}>5. Médiation de la consommation</h3>
          <p>En cas de litige non résolu avec notre entreprise, vous avez le droit de recourir gratuitement à un médiateur de la consommation. Vous pouvez contacter le médiateur rattaché à votre secteur d'activité (ex: CM2C ou Médicys).</p>
        </section>
      </div>
    </div>
  );
}