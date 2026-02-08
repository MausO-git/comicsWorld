import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Force la valeur du scroll à zéro lors du changement de page
 * @returns 
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On remonte tout en haut dès que l'URL change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne dessine rien
};

export default ScrollToTop;