/**
 * MobileBottomNav Component - Navigation fixe en bas pour mobile
 * Visible uniquement sur écrans mobiles (max-width: 768px)
 * Design moderne type application mobile avec icônes et animations
 * 
 * Fonctionnalités:
 * - Navigation fixe permanente en bas de l'écran
 * - Icônes modernes avec labels
 * - Indicateur actif avec animation
 * - Effet tactile et vibration (si supportée)
 * - Scroll automatique vers le haut au clic
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Home, Briefcase, Mail, User, Info } from 'lucide-react';

export default function MobileBottomNav() {
  const [location] = useLocation();

  // Menu items avec icônes - ordre: Accueil, Services, Portfolio, Contact, À propos
  const menuItems = [
    { label: 'Accueil', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Portfolio', href: '/portfolio', icon: User },
    { label: 'Contact', href: '/contact', icon: Mail },
    { label: 'À propos', href: '/about', icon: Info },
  ];

  // Fonction pour scroller en haut avec animation fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Feedback haptique si supporté
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Fonction pour gérer le clic sur un menu
  const handleMenuClick = () => {
    // Scroller en haut immédiatement
    scrollToTop();
    
    // Feedback haptique
    if (navigator.vibrate) {
      navigator.vibrate([5, 10, 5]);
    }
  };

  // Déterminer si un lien est actif
  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Navbar mobile fixe en bas - permanente */}
      <nav
        className={`
          fixed bottom-0 left-0 right-0 z-40 md:hidden
          bg-white border-t-2 border-gray-200 shadow-2xl
          safe-area-inset-bottom
        `}
        style={{
          paddingBottom: 'max(1rem, env(safe-area-inset-bottom))'
        }}
      >
        <div className="flex items-center justify-around h-20 px-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className={`
                  flex flex-col items-center justify-center flex-1 h-20 rounded-lg
                  transition-all duration-200 relative group
                  active:scale-95
                  ${active
                    ? 'text-yellow-500 bg-blue-50'
                    : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50'
                  }
                `}
              >
                {/* Icône avec animation */}
                <Icon
                  className={`
                    w-6 h-6 transition-transform duration-200
                    ${active ? 'scale-110' : 'group-active:scale-90'}
                  `}
                  strokeWidth={2}
                />
                
                {/* Label court */}
                <span className="text-xs font-semibold mt-0.5 truncate w-full text-center px-0.5 leading-tight">
                  {item.label.split(' ')[0]}
                </span>
                
                {/* Indicateur actif avec animation */}
                {active && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                )}
                
                {/* Ripple effect au clic */}
                <span className="absolute inset-0 rounded-lg bg-yellow-500 opacity-0 group-active:opacity-10 transition-opacity duration-200" />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Padding bottom pour éviter que le contenu soit caché par la navbar */}
      <div className="h-24 md:h-0" />
    </>
  );
}
