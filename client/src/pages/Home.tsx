/**
 * Home Page - Rising Digital IA
 * Page d'accueil optimisée conversion
 * Design: Tech Africain Audacieux
 */

import {
  ArrowRight, Zap, Globe, PenTool, Video, Code, Smartphone, BookOpen,
  CheckCircle, Star, Users, TrendingUp, Award, Network, Search, Lightbulb,
  Settings, HeartHandshake, BarChart3, MessageSquare, Calendar
} from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const serviceCategories = [
    {
      icon: Globe,
      emoji: '🌐',
      title: 'Présence Digitale',
      tagline: 'Votre vitrine professionnelle en ligne',
      problem: 'Votre entreprise est invisible en ligne ?',
      solution: 'Sites web modernes, e-commerce et portails',
      result: 'Visibilité 24h/24 et nouveaux clients chaque jour',
      color: 'from-blue-900 to-blue-700',
      services: ['Sites web responsifs', 'E-commerce & boutiques', 'Digitalisation des églises', 'Portails & plateformes'],
    },
    {
      icon: PenTool,
      emoji: '🎨',
      title: 'Contenu & Design',
      tagline: 'Une image professionnelle qui inspire confiance',
      problem: 'Votre communication manque d\'impact visuel ?',
      solution: 'Design graphique, vidéos et rédaction premium',
      result: 'Une marque forte qui se démarque de la concurrence',
      color: 'from-yellow-600 to-yellow-500',
      services: ['Logos & identité visuelle', 'Vidéos promotionnelles', 'CV & business plans', 'Flyers, banners & mockups'],
    },
    {
      icon: Zap,
      emoji: '🤖',
      title: 'IA & Automatisation',
      tagline: 'Faites travailler la technologie pour vous',
      problem: 'Vos processus vous font perdre temps et argent ?',
      solution: 'Chatbots IA, SEO, CRM et automatisation',
      result: 'Gains de productivité mesurables dès le 1er mois',
      color: 'from-blue-900 to-blue-700',
      services: ['Chatbots IA intelligents', 'Optimisation SEO', 'Gestion CRM', 'Automatisation des processus'],
    },
    {
      icon: BookOpen,
      emoji: '🎓',
      title: 'Formation & Stratégie',
      tagline: 'Développez vos compétences digitales',
      problem: 'Votre équipe n\'est pas à la page du digital ?',
      solution: 'Formations pratiques IA, coaching et consulting',
      result: 'Des équipes autonomes et des décisions éclairées',
      color: 'from-yellow-600 to-yellow-500',
      services: ['Formation IA pratique', 'Coaching entrepreneurial', 'Consulting digital', 'Plans d\'affaires stratégiques'],
    },
  ];

  const stats = [
    { number: '150+', label: 'Projets livrés', icon: Award },
    { number: '120+', label: 'Clients satisfaits', icon: Users },
    { number: '95%', label: 'Taux de satisfaction', icon: Star },
    { number: '10+', label: 'Experts dans le réseau', icon: Network },
  ];

  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse',
      description: 'Nous écoutons vos besoins, analysons votre situation et identifions les meilleures opportunités.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Proposition',
      description: 'Devis personnalisé, planning clair et présentation de la solution adaptée à votre budget.',
    },
    {
      number: '03',
      icon: Settings,
      title: 'Réalisation',
      description: 'Notre réseau d\'experts exécute le projet avec rigueur, en vous tenant informé à chaque étape.',
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: 'Suivi',
      description: 'Livraison, retours, ajustements et support continu pour garantir votre satisfaction totale.',
    },
  ];

  const testimonials = [
    {
      name: 'Directeur, PME Commerciale',
      location: 'Togo',
      text: 'Rising Digital IA a complètement transformé notre présence en ligne. Notre chiffre d\'affaires a triplé en 6 mois. Une équipe sérieuse et professionnelle.',
      rating: 5,
      result: '+300% de ventes',
    },
    {
      name: 'Pasteur Principal',
      location: 'Bénin',
      text: 'Le site web créé pour notre église a renforcé notre communauté de façon remarquable. Le résultat a dépassé toutes nos attentes.',
      rating: 5,
      result: '+250% d\'engagement',
    },
    {
      name: 'Entrepreneur Tech',
      location: 'Côte d\'Ivoire',
      text: 'La formation en IA m\'a donné toutes les compétences pour lancer ma startup. Rising Digital IA est un vrai partenaire de croissance.',
      rating: 5,
      result: 'Startup lancée en 3 mois',
    },
  ];

  const networkExperts = [
    { role: 'Développeurs Web & Mobile', count: '3 experts', icon: Code },
    { role: 'Designers Graphiques', count: '2 experts', icon: PenTool },
    { role: 'Spécialistes IA & Data', count: '2 experts', icon: Zap },
    { role: 'Experts Marketing Digital', count: '2 experts', icon: TrendingUp },
    { role: 'Monteurs Vidéo & Audio', count: '2 experts', icon: Video },
    { role: 'Consultants Stratégiques', count: '2 experts', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full opacity-5 blur-3xl"></div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Agence Digitale & IA — Afrique de l'Ouest
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Votre Croissance Digitale,{' '}
                <span className="text-yellow-400">Notre Mission.</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed">
                Rising Digital IA accompagne les <strong className="text-white">PME, entrepreneurs, institutions et églises</strong> vers la transformation digitale grâce à l'IA, au design et au marketing modern.
              </p>

              <p className="text-base text-yellow-300 font-semibold mb-8">
                ✦ Plus de visibilité · Plus de clients · Plus de croissance
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 text-base shadow-lg shadow-yellow-500/30"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver un Échange Gratuit
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-yellow-500/60 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center gap-2 text-base"
                >
                  Voir nos Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Social proof inline */}
              <div className="flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-2">
                    {['T', 'B', 'C'].map((l, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-blue-900 flex items-center justify-center text-xs font-bold text-blue-900">
                        {l}
                      </div>
                    ))}
                  </div>
                  <span>120+ clients satisfaits</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="ml-1">5/5</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-yellow-500/10 rounded-3xl blur-xl"></div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LHSVA3CYpW8Se5s4VMFFca/sandbox/aFqQefqbSM37B0bXyWNdC5-img-1_1771599643000_na1fn_aGVyby1yaXNpbmctZGlnaXRhbC1pYQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEhTVkEzQ1lwVzhTZTVzNFZNRkZjYS9zYW5kYm94L2FGcVFlZnFiU00zN0IwYlh5V05kQzUtaW1nLTFfMTc3MTU5OTY0MzAwMF9uYTFmbl9hR1Z5YnkxeWFYTnBibWN0WkdsbmFYUmhiQzFwWVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ccg~1YnUDzX2pevkytlovLKMT8ZeQvWwsMER37JzwYImhMIddSvE79e5dikF-7~7duQU~vtlhCKlSY07tQNHTOwe8HtG9JNjDokrYQ6b2AIm1LcEOO-ZqE4hAyb19EOka0slBA~e8oON2za9s2og8LfHpPH26hfMJHnuzA8p11Y96E7dCk-M9Z8Nh2R1B8fXCKa7g9B3aDWvfs9W-qFiQ~OXZZiqBzXXTWViXL-yhvDRlO2aY-chhH711PEgNWf78KeUzCKOrGZZw3yOPNGimGayNE-oAxtIrI9s0vyn5uoUP8XODZ0UhfxfWyogESg8x0fDe5urW5PDeG6QO5eyRg__"
                alt="Rising Digital IA — Transformation digitale en Afrique"
                className="relative w-full rounded-2xl shadow-2xl border border-white/10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-blue-900 rounded-xl px-4 py-2 font-bold text-sm shadow-xl">
                🏆 150+ projets réalisés
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-blue-900 rounded-xl px-4 py-2 font-bold text-sm shadow-xl">
                ⚡ Réponse en 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────── */}
      <section className="bg-yellow-500 py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5 text-blue-900 mb-1" />
                  <span className="text-3xl font-bold text-blue-900">{stat.number}</span>
                  <span className="text-blue-800 text-sm font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
              Nos solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Tout ce dont vous avez besoin, en un seul endroit
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 pôles d'expertise complémentaires pour couvrir l'intégralité de votre transformation digitale, du premier site web à l'automatisation avancée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {serviceCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${cat.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="text-4xl">{cat.emoji}</div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{cat.title}</h3>
                        <p className="text-yellow-600 text-sm font-semibold">{cat.tagline}</p>
                      </div>
                    </div>

                    {/* Problem → Solution → Result */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <span className="text-red-500 font-bold text-xs mt-0.5">PROBLÈME</span>
                        <p className="text-gray-700 text-sm">{cat.problem}</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-600 font-bold text-xs mt-0.5">SOLUTION</span>
                        <p className="text-gray-700 text-sm">{cat.solution}</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <span className="text-green-600 font-bold text-xs mt-0.5">RÉSULTAT</span>
                        <p className="text-gray-700 text-sm font-semibold">{cat.result}</p>
                      </div>
                    </div>

                    <ul className="grid grid-cols-2 gap-1.5 mb-6">
                      {cat.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/22893392515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-500 transition-colors text-sm group-hover:gap-3"
                    >
                      Demander un devis <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Voir tous nos services en détail <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────── */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* ── NETWORK / TEAM ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
                Notre force collective
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Une Structure, un{' '}
                <span className="text-yellow-400">Réseau d'Experts</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Rising Digital IA n'est pas une seule personne — c'est une <strong className="text-white">organisation structurée</strong> qui mobilise un réseau de freelances qualifiés, partenaires techniques et experts sectoriels pour livrer des projets de haute qualité.
              </p>
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Chaque projet est pris en charge par l'expert le plus adapté à votre besoin, coordonné par notre direction. Vous bénéficiez du meilleur de chaque domaine, sans les coûts d'une grande agence.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Coordination centralisée par un directeur de projet dédié',
                  'Expertise spécialisée pour chaque type de mission',
                  'Qualité garantie par un processus de révision rigoureux',
                  'Réactivité d\'un réseau agile et disponible',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all duration-200"
              >
                En savoir plus sur nous <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {networkExperts.map((expert, i) => {
                  const Icon = expert.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-xl border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{expert.role}</h4>
                      <p className="text-yellow-400 text-xs font-semibold">{expert.count}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-center">
                <p className="text-yellow-300 text-sm font-semibold">
                  🌍 Réseau actif au Togo, Bénin, Côte d'Ivoire et au-delà
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Comment nous travaillons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus éprouvé, transparent et orienté résultats pour garantir votre satisfaction à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl border border-yellow-500/40 hover:border-yellow-500 transition-all duration-300 text-white text-center h-full">
                    <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <div className="text-yellow-400 font-bold text-sm mb-1">{step.number}</div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
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

          <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-900 text-center">
            <p className="text-blue-900 font-semibold">
              ⚡ Délai de réponse garanti sous <strong>24 heures</strong> · Consultation initiale <strong>100% gratuite</strong> · Devis sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
              Ils nous font confiance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Des résultats réels, des transformations concrètes, des partenariats durables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-white/10 backdrop-blur rounded-2xl border border-white/20 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                  <div className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-full">
                    <span className="text-yellow-300 text-xs font-bold">{t.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all duration-200"
            >
              Voir toutes nos réalisations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LHSVA3CYpW8Se5s4VMFFca/sandbox/aFqQefqbSM37B0bXyWNdC5-img-2_1771599651000_na1fn_c2VydmljZXMtYWktdGVjaA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEhTVkEzQ1lwVzhTZTVzNFZNRkZjYS9zYW5kYm94L2FGcVFlZnFiU00zN0IwYlh5V05kQzUtaW1nLTJfMTc3MTU5OTY1MTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZV2t0ZEdWamFBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GY9wGK-weQsgu3BBo178opJogjyWCD3vuDFBHMRK2ADTnAnhsOMykJy5a91EYM~gLwbfa~andssaWL~oA2yTpPOqCIhie0HQOiu03EsqklAsV6moF54skCGfIeAbsum7pGb8XXXWLIIrZ3ciKuAfcMfRglPkgMv9cln8NedPz9rd~kMK8FDFAQXIW9n5RlELMx9kW7a22J-cm4znbzXu508HVvWJd55g-bGvhtLOFJJtDqT-l9uWx4yVoDegYpQVHC-qR70FB84izDpUx0NmMGgosy81qKVf9~5X2GPMZ~JzYcxgDM5lfl91GFFETCXpthiK4Mpk1lqnqcPS0vd3Dg__"
                alt="Écosystème digital complet"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                Un écosystème digital pensé pour l'Afrique
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nous ne vendons pas des services génériques. Chaque solution est conçue en tenant compte des réalités africaines : accès internet variable, budgets maîtrisés, besoins de formation et contexte culturel local.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: TrendingUp, text: 'Solutions adaptées au marché africain et aux budgets locaux' },
                  { icon: Network, text: 'Réseau d\'experts mobilisables selon vos besoins spécifiques' },
                  { icon: Smartphone, text: 'Technologies modernes accessibles à toutes les structures' },
                  { icon: MessageSquare, text: 'Accompagnement en français et communication WhatsApp directe' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-900" />
                      </div>
                      <span className="text-gray-700 mt-1">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <a
                href="https://wa.me/22893392515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Démarrer mon projet <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Consultation gratuite disponible maintenant
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui. En 24h, vous avez un retour concret sur votre projet et une proposition adaptée à votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 text-base shadow-lg shadow-yellow-500/30"
            >
              <Calendar className="w-5 h-5" />
              Réserver un échange gratuit
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-500/70 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center gap-2 text-base"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
