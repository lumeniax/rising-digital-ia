/**
 * Contact Page - Rising Digital IA
 * Page de contact avec formulaire et informations
 * Design: Tech Africain Audacieux
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone / WhatsApp',
      value: '+228 93 39 25 15',
      link: 'https://wa.me/22893392515',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'yesborntoshine@gmail.com',
      link: 'mailto:yesborntoshine@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Togo, Afrique de l\'Ouest',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-6">
              Parlons de votre projet
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Obtenez votre devis{' '}
              <span className="text-yellow-400">gratuitement</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Décrivez-nous votre projet. En moins de 24 heures, vous recevez une proposition personnalisée adaptée à votre budget et vos objectifs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">✅ Consultation gratuite</span>
              <span className="flex items-center gap-1.5">✅ Réponse en 24h</span>
              <span className="flex items-center gap-1.5">✅ Devis sans engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-8 bg-white rounded-2xl border-2 border-yellow-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group"
                >
                  <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block group-hover:bg-yellow-500 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-500 group-hover:text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-semibold">{info.value}</p>
                </a>
              );
            })}
          </div>

          <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 mb-16"></div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Envoyez-Nous un Message</h2>

              {submitted ? (
                <div className="p-8 bg-green-50 rounded-2xl border-2 border-green-500 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message Envoyé!</h3>
                  <p className="text-gray-700">
                    Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-blue-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-blue-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder="+228 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="web">🌐 Création de Site Web</option>
                      <option value="ecommerce">🛍️ E-commerce & Boutique en ligne</option>
                      <option value="design">🎨 Design Graphique & Identité Visuelle</option>
                      <option value="video">🎬 Vidéo & Audio Professionnel</option>
                      <option value="cv">📄 CV Optimisé IA</option>
                      <option value="business-plan">📊 Business Plan ou Proposition de Projet</option>
                      <option value="chatbot">🤖 Chatbot IA & Automatisation</option>
                      <option value="seo">📈 SEO & Marketing Digital</option>
                      <option value="formation">🎓 Formation IA & Digital</option>
                      <option value="eglise">⛪ Digitalisation d'Église ou Institution</option>
                      <option value="consulting">💼 Consulting Stratégique</option>
                      <option value="autre">💬 Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Envoyer le Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Info & Quick Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Horaires de Disponibilité</h2>
                <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-900">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-900">Lundi - Vendredi:</span>
                      <span className="text-gray-700">08:00 - 18:00 (GMT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-900">Samedi:</span>
                      <span className="text-gray-700">09:00 - 14:00 (GMT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-900">Dimanche:</span>
                      <span className="text-gray-700">Sur rendez-vous</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Contactez-Nous Rapidement</h2>
                <p className="text-gray-700 mb-6">
                  Pour une réponse rapide, contactez-nous directement via WhatsApp. Nous répondons généralement en moins de 2 heures.
                </p>
                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 text-center"
                >
                  Discuter sur WhatsApp
                </a>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">FAQ Rapide</h2>
                <div className="space-y-4">
                  <details className="p-4 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer">
                    <summary className="font-bold text-blue-900">Quel est le délai de réponse?</summary>
                    <p className="text-gray-700 mt-2">Nous répondons généralement dans les 24 heures.</p>
                  </details>
                  <details className="p-4 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer">
                    <summary className="font-bold text-blue-900">Offrez-vous une consultation gratuite?</summary>
                    <p className="text-gray-700 mt-2">Oui, nous offrons une consultation gratuite pour discuter de votre projet.</p>
                  </details>
                  <details className="p-4 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer">
                    <summary className="font-bold text-blue-900">Travaillez-vous à distance?</summary>
                    <p className="text-gray-700 mt-2">Oui, nous travaillons avec des clients du monde entier en ligne.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Nous Sommes Basés au Togo
          </h2>
          <div className="bg-gray-800 rounded-2xl overflow-hidden border-2 border-yellow-500 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <p className="text-xl font-bold mb-2">Togo, Afrique de l'Ouest</p>
              <p className="text-gray-300">Nous servons des clients dans toute l'Afrique et au-delà</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformons Votre Vision en Réalité
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Que vous ayez une idée claire ou besoin de conseils, notre équipe est là pour vous aider
          </p>
          <a
            href="https://wa.me/22893392515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
          >
            Commencer Maintenant
          </a>
        </div>
      </section>
    </div>
  );
}
