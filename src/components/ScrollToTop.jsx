import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonte en haut de page à chaque changement de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne visuel rien, il agit en arrière-plan
}