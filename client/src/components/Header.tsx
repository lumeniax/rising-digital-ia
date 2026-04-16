/**
 * Header Component - Tech Africain Audacieux
 * Navigation principale avec logo, menu et CTA
 * Couleurs: Bleu électrique (#1E3A8A), Or (#FFD700), Blanc, Noir
 * Typographie: Poppins pour le logo, Open Sans pour le menu
 * 
 * Fonctionnalités:
 * - Scroll vers le haut au clic sur un lien
 * - Menu mobile responsive
 * - Animations fluides
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'À propos', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  // Fonction pour scroller vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-100 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            onClick={scrollToTop}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg">
              <span className="text-2xl font-bold text-yellow-400">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">Rising</span>
              <span className="text-xs font-semibold text-yellow-500">Digital IA</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-700 font-medium hover:text-yellow-500 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="px-5 py-2.5 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 text-sm"
            >
              Devis gratuit
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 text-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-blue-900" />
            ) : (
              <Menu className="w-6 h-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-500 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/22893392515"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-center"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
