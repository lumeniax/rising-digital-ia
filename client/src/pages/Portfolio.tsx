import { ExternalLink, Star, Calendar, TrendingUp, Award, Users, Percent } from 'lucide-react';
import { Link } from 'wouter';

export default function Portfolio() {
  const projects = [
    { id: 1, title: 'CV Premium — Ingénieur Logiciel', category: 'Rédaction & CV', emoji: '📄', description: 'CV optimisé avec IA pour candidature internationale, structure ATS-friendly et contenu stratégique.', highlights: ['Design professionnel', 'Optimisation IA', 'ATS-friendly'], duration: '48h' },
    { id: 2, title: 'Business Plan — AGR Agricole', category: 'Plans d\'Affaires', emoji: '📊', description: 'Plan d\'affaires complet avec analyse de marché, projections financières et stratégie marketing.', highlights: ['Analyse de marché', 'Projections financières', 'Stratégie complète'], duration: '5 jours' },
    { id: 3, title: 'Site Web — Institution Religieuse', category: 'Création Web', emoji: '🏛️', description: 'Site responsive avec gestion d\'événements, donations en ligne et contenu multimédia.', highlights: ['Responsive design', 'Donations en ligne', 'Gestion événements'], duration: '10 jours' },
    { id: 4, title: 'Logo & Identité Visuelle — PME', category: 'Design Graphique', emoji: '🎨', description: 'Logo vectoriel, palette de couleurs et brand guidelines complets pour une PME de services.', highlights: ['Logo vectoriel', 'Brand guidelines', 'Palette complète'], duration: '3 jours' },
    { id: 5, title: 'Présentation PowerPoint — Sponsoring', category: 'Design Graphique', emoji: '📽️', description: 'Présentation premium pour dossier de sponsoring avec storytelling et data visualization.', highlights: ['Design premium', 'Data visualization', 'Storytelling'], duration: '4 jours' },
    { id: 6, title: 'Vidéo Promotionnelle — Startup', category: 'Vidéo & Audio', emoji: '🎬', description: 'Vidéo de 60 secondes avec montage professionnel, voix off IA multilingue et animations.', highlights: ['Montage pro', 'Voix off IA', 'Animations'], duration: '5 jours' },
    { id: 7, title: 'Site E-commerce — Boutique Mode', category: 'Création Web', emoji: '🛍️', description: 'Boutique en ligne complète avec catalogue, paiement intégré et tableau de bord de gestion.', highlights: ['Paiement intégré', 'Gestion stocks', 'Interface admin'], duration: '14 jours' },
    { id: 8, title: 'Chatbot IA — Service Client PME', category: 'IA & Automatisation', emoji: '🤖', description: 'Chatbot intelligent intégré au site web pour répondre aux clients 24h/24.', highlights: ['IA conversationnelle', 'Disponible 24/7', 'Intégration WhatsApp'], duration: '7 jours' },
    { id: 9, title: 'Formation IA — 15 Entrepreneurs', category: 'Formation', emoji: '🎓', description: 'Programme de formation pratique de 8 semaines sur l\'IA et le marketing digital.', highlights: ['8 semaines', '15 participants', 'Pratique opérationnel'], duration: '8 semaines' },
  ];

  const caseStudies = [
    { title: 'Transformation Digitale — PME, Togo', challenge: 'PME sans présence digitale, ventes uniquement en magasin, aucune visibilité en ligne.', solution: 'Site e-commerce, SEO, identité visuelle, formation de l\'équipe commerciale.', result: '+300% de ventes en 6 mois', icon: TrendingUp },
    { title: 'Digitalisation Complète — Institution, Bénin', challenge: 'Pas d\'outils digitaux, communication interne difficile, donations exclusivement en espèces.', solution: 'Site web complet, donations en ligne, newsletter automatisée, gestion d\'événements.', result: '+250% d\'engagement communautaire', icon: Users },
    { title: 'Programme Formation IA — 45 Entrepreneurs, Côte d\'Ivoire', challenge: 'Entrepreneurs sans connaissance en IA et outils digitaux modernes.', solution: 'Programme pratique de 8 semaines sur l\'IA, le marketing digital et l\'automatisation.', result: '45 formés · 12 startups créées · 8 emplois', icon: Award },
  ];

  const stats = [
    { number: '150+', label: 'Projets Réalisés', icon: Award },
    { number: '120+', label: 'Clients Satisfaits', icon: Users },
    { number: '95%', label: 'Satisfaction', icon: Percent },
    { number: '3+', label: 'Pays Couverts', icon: TrendingUp },
  ];

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-5">
              Nos réalisations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Des résultats concrets,{' '}
              <span className="text-yellow-400">des transformations réelles</span>
            </h1>
            <p className="text-lg text-gray-200">
              Comment Rising Digital IA accompagne les entreprises et institutions africaines vers de nouvelles performances.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-yellow-500 py-5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5 text-blue-900" />
                  <span className="text-2xl font-bold text-blue-900">{stat.number}</span>
                  <span className="text-blue-800 text-xs font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-3">
              Sélection de projets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Projets réalisés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-yellow-500 transition-all duration-300 overflow-hidden"
              >
                <div className="h-36 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-1 bg-yellow-500 text-blue-900 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-blue-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-100">{h}</span>
                    ))}
                  </div>
                  <a href="https://wa.me/22893392515" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-yellow-600 font-bold hover:text-yellow-500 text-sm">
                    Projet similaire ? <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" />

      {/* ── CASE STUDIES ─────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-3">
              Études de cas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transformations réelles
            </h2>
          </div>

          <div className="space-y-5">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl border-l-4 border-yellow-500">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-400 pt-1">{study.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-xl">
                      <h4 className="text-xs font-bold text-red-400 mb-1 uppercase">Le défi</h4>
                      <p className="text-gray-200 text-sm">{study.challenge}</p>
                    </div>
                    <div className="p-3 bg-blue-800/40 border border-blue-400/30 rounded-xl">
                      <h4 className="text-xs font-bold text-blue-300 mb-1 uppercase">Notre solution</h4>
                      <p className="text-gray-200 text-sm">{study.solution}</p>
                    </div>
                    <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-xl">
                      <h4 className="text-xs font-bold text-green-400 mb-1 uppercase">Résultat</h4>
                      <p className="text-white font-bold">{study.result}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Votre succès sera notre prochaine étude de cas
          </h2>
          <p className="text-gray-200 mb-7 max-w-xl mx-auto">
            Rejoignez nos 120+ clients satisfaits et lancez votre transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Démarrer mon projet
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border-2 border-yellow-500/70 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center justify-center gap-2"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
