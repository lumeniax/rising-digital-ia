/**
 * Footer Component - Tech Africain Audacieux
 * Pied de page avec informations de contact et liens
 * Couleurs: Bleu électrique (#1E3A8A), Or (#FFD700), Blanc
 */

import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-lg">
                <span className="text-xl font-bold text-blue-900">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Rising Digital IA</h3>
                <p className="text-xs text-yellow-300">L'Innovation au Service de l'Afrique</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Transformez votre vision en puissance digitale grâce à l'intelligence artificielle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Création Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Design Graphique
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Vidéo & Audio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Formation IA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +228 93 39 25 15
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Togo, Afrique de l'Ouest</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:yesborntoshine@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  yesborntoshine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 bg-yellow-500 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Rising Digital IA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
