/**
 * WhatsApp Floating Button Component
 * Bouton flottant pour contact WhatsApp
 * Couleurs: Or (#FFD700), Bleu électrique (#1E3A8A)
 */

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22893392515"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
