import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function PourquoiNous() {
  const argumentsCles = [
    { title: "Expertise locale", desc: "Une connaissance parfaite des sols et essences de la région bordelaise." },
    { title: "Équipe Pro", desc: "Matériel de pointe et personnel assuré pour une sécurité totale sur vos chantiers." },
    { title: "Réactivité", desc: "Intervention rapide et respect strict des délais annoncés." },
    { title: "Engagement Eco", desc: "Valorisation des déchets verts et respect de la biodiversité." }
  ];

  return (
    <div className="expert-page">
    <Helmet>
        <title>Notre Expertise | Pourquoi choisir DS Multiservices Élagage ?</title>
        <meta name="description" content="Savoir-faire artisanal, matériel de pointe et respect total de l'environnement. Découvrez pourquoi DS Multiservices est la référence pour vos chênes et parcs à Bordeaux." />
        <meta name="keywords" content="expert elagueur bordeaux, securite elagage, taille de prestige gironde" />
    </Helmet>

      <Navbar />

      <header style={{
        background: "var(--primary)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem" }}>Notre Vision</h1>
        <p style={{ color: "var(--accent)", textTransform: "uppercase", letterSpacing: "2px" }}>Qualité, Rapidité, Confiance</p>
      </header>

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", padding: "80px 5%" }}>
        {argumentsCles.map((arg) => (
          <div key={arg.title} className="card-hover" style={{
            padding: "40px",
            width: "280px",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "15px" }}>{arg.title}</h2>
            <p style={{ fontSize: "0.95rem" }}>{arg.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ 
        background: "var(--primary)", 
        color: "white", 
        padding: "100px 20px", 
        textAlign: "center" 
      }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "40px", fontFamily: "Playfair Display" }}>Prêt à transformer votre jardin ?</h2>
        <a href="/contact" className="btn" style={{border: "1px solid white !important"}}>Contactez un expert</a>
      </section>

      <a href="tel:0776553370" className="call-btn" style={{position:"fixed", bottom:"30px", right:"30px", width:"60px", height:"60px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}}>📞</a>
    </div>
  );
}