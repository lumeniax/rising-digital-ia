/**
 * ScrollToTopButton Component - Bouton flottant pour scroller vers le haut
 * Visible uniquement après un certain scroll
 * Design moderne avec animation et feedback haptique
 */

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton après 300px de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroller vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Feedback haptique
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-24 md:bottom-8 right-4 z-30
            w-12 h-12 rounded-full
            bg-gradient-to-br from-blue-900 to-blue-700
            text-yellow-400 shadow-lg
            flex items-center justify-center
            transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-2xl
            active:scale-95
            animate-fade-in-up
          `}
          aria-label="Scroll to top"
          title="Retour en haut"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
