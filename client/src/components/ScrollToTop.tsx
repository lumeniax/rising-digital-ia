import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Composant ScrollToTop - Gère le défilement vers le haut global
 * Ce composant écoute les changements de route (URL) et remonte
 * automatiquement la page tout en haut de manière fluide.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Remonter en haut de la page à chaque changement de route
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null; // Ce composant ne rend rien visuellement
}
