import { ArrowRight, CheckCircle, Calendar, Search, Lightbulb, Settings, HeartHandshake, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const serviceCategories = [
    {
      id: 'presence',
      title: 'Présence Digitale',
      icon: '🌐',
      tagline: 'Soyez visible là où sont vos clients',
      description: 'Sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.',
      problem: 'Invisible en ligne',
      result: 'Visibilité 24h/24 et crédibilité renforcée',
      color: 'border-blue-500',
      bgColor: 'bg-blue-50',
      services: ['Sites web responsifs et modernes', 'E-commerce & boutiques en ligne', 'Portails & plateformes web', 'Maintenance & support technique'],
    },
    {
      id: 'contenu',
      title: 'Contenu & Design',
      icon: '🎨',
      tagline: 'Une image qui inspire confiance',
      description: 'Du logo au montage vidéo, nous créons les supports qui racontent votre histoire avec impact.',
      problem: 'Communication sans impact visuel',
      result: 'Marque forte qui convertit',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      services: ['Logos & identité visuelle', 'Flyers, brochures et bannières', 'Montage vidéo professionnel', 'CV optimisés IA'],
    },
    {
      id: 'redaction',
      title: 'Rédaction & Stratégie',
      icon: '📝',
      tagline: 'Des mots qui convainquent',
      description: 'Business plans, propositions, e-books et copywriting orienté conversion.',
      problem: 'Difficulté à convaincre à l\'écrit',
      result: 'Documents qui débloquent financements',
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      services: ['Plans d\'affaires détaillés', 'Propositions de projets ONG', 'Copywriting pour sites web', 'Rapports & dossiers institutionnels'],
    },
    {
      id: 'ia',
      title: 'IA & Automatisation',
      icon: '🤖',
      tagline: 'Automatisez, surpassez vos concurrents',
      description: 'Chatbots, SEO et automatisation pour plus de temps et plus de prospects qualifiés.',
      problem: 'Processus lents, absence de SEO',
      result: 'Gain de temps et meilleur ROI',
      color: 'border-purple-500',
      bgColor: 'bg-purple-50',
      services: ['Chatbots IA intelligents', 'Optimisation SEO avancée', 'Automatisation des processus', 'Consulting stratégie digitale'],
    },
    {
      id: 'formation',
      title: 'Formation & Accompagnement',
      icon: '🎓',
      tagline: 'Montez en compétences',
      description: 'Formations pratiques en IA, marketing digital et entrepreneuriat pour les réalités africaines.',
      problem: 'Équipes non autonomes sur le digital',
      result: 'Compétences opérationnelles acquises',
      color: 'border-orange-500',
      bgColor: 'bg-orange-50',
      services: ['Formation IA pratique', 'Cours marketing digital', 'Mentorat professionnel', 'Coaching entrepreneurial'],
    },
    {
      id: 'entreprises',
      title: 'Solutions Entreprises',
      icon: '💼',
      tagline: 'L\'écosystème digital complet',
      description: 'Pour les PME et institutions qui ont besoin d\'un partenaire digital de confiance sur le long terme.',
      problem: 'Transformation digitale non coordonnée',
      result: 'Écosystème digital unifié et performant',
      color: 'border-blue-900',
      bgColor: 'bg-blue-50',
      services: ['Audit digital complet', 'Stratégie de transformation', 'Support technique dédié', 'Partenariat long terme'],
    },
  ];

  const processSteps = [
    { number: '01', icon: Search, title: 'Analyse', description: 'Consultation gratuite pour comprendre vos objectifs et identifier les meilleures opportunités.' },
    { number: '02', icon: Lightbulb, title: 'Proposition', description: 'Devis détaillé, planning clair et solution adaptée à votre budget.' },
    { number: '03', icon: Settings, title: 'Réalisation', description: 'Les experts du réseau exécutent votre projet avec rigueur et professionnalisme.' },
    { number: '04', icon: HeartHandshake, title: 'Livraison', description: 'Ajustements, validation finale et support continu pour votre satisfaction.' },
  ];

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white pt-12 pb-14 md:pt-16 md:pb-18">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-5">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Des solutions digitales complètes,{' '}
              <span className="text-yellow-400">orientées résultats</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-7">
              Six pôles d'expertise complémentaires pour couvrir l'intégralité de votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Réserver une consultation gratuite
              </Link>
              <a
                href="https://wa.me/22893392515"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border-2 border-yellow-500/60 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center justify-center gap-2"
              >
                WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Nos 6 pôles d'expertise
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Chaque service est livré par des experts qualifiés de notre réseau, coordonnés pour garantir qualité et cohérence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className={`group p-6 bg-white rounded-2xl border-2 ${cat.color} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-yellow-600 font-semibold mb-3">{cat.tagline}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cat.description}</p>

                <div className={`${cat.bgColor} rounded-xl p-3 mb-4 space-y-1.5`}>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-xs font-bold flex-shrink-0">AVANT</span>
                    <span className="text-gray-600 text-xs">{cat.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-xs font-bold flex-shrink-0">APRÈS</span>
                    <span className="text-gray-700 text-xs font-semibold">{cat.result}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-500 transition-colors text-sm"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" />

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-3">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Comment nous travaillons
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Une méthode structurée et transparente pour garantir votre succès à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="p-5 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl border border-yellow-500/40 hover:border-yellow-500 transition-all text-center h-full">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="text-yellow-400 font-bold text-xs mb-1">{step.number}</div>
                    <h3 className="text-base font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-yellow-500 rounded-full items-center justify-center -translate-y-1/2">
                      <ArrowRight className="w-3 h-3 text-blue-900" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-5 bg-blue-900/50 border border-yellow-500/30 rounded-2xl text-center">
            <p className="text-gray-200 text-sm">
              <Zap className="inline w-4 h-4 text-yellow-400 mr-2" />
              Réponse garantie sous <strong className="text-yellow-400">24 heures</strong> · Consultation initiale <strong className="text-yellow-400">100% gratuite</strong> · Devis sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Quel est votre prochain projet ?
          </h2>
          <p className="text-gray-200 mb-7 max-w-xl mx-auto">
            Peu importe votre besoin ou votre budget, nous avons une solution. Réponse concrète sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Réserver un échange gratuit
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
