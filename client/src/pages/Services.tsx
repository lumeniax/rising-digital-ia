/**
 * Services Page - Rising Digital IA
 * Services complets organisés par catégories avec approche orientée résultats
 * Design: Tech Africain Audacieux
 */

import { ArrowRight, CheckCircle, Calendar, Search, Lightbulb, Settings, HeartHandshake, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const serviceCategories = [
    {
      id: 'presence',
      title: 'Présence Digitale',
      icon: '🌐',
      tagline: 'Soyez visible là où sont vos clients',
      description: 'Votre entreprise mérite une vitrine professionnelle. Nous créons des sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients.',
      problem: 'Invisible en ligne ou site non professionnel',
      result: 'Visibilité 24h/24 et crédibilité renforcée',
      color: 'border-blue-500',
      bgColor: 'bg-blue-50',
      services: [
        'Sites web responsifs et modernes',
        'E-commerce & boutiques en ligne',
        'Digitalisation des églises & institutions',
        'Portails & plateformes web',
        'Intégrations API & outils tiers',
        'Maintenance & support technique',
        'Optimisation performance & vitesse',
      ],
    },
    {
      id: 'contenu',
      title: 'Contenu & Design',
      icon: '🎨',
      tagline: 'Une image qui inspire confiance et désir',
      description: 'Du logo au montage vidéo, en passant par la rédaction premium, nous créons les supports visuels et éditoriaux qui racontent votre histoire avec impact.',
      problem: 'Communication sans cohérence ni impact visuel',
      result: 'Marque forte et contenus qui convertissent',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      services: [
        'Logos & identité visuelle complète',
        'Flyers, brochures et bannières',
        'Présentations PowerPoint premium',
        'Montage vidéo professionnel',
        'Voix off IA multilingues',
        'Infographies & data visualisation',
        'CV optimisés IA & lettres de motivation',
      ],
    },
    {
      id: 'redaction',
      title: 'Rédaction & Stratégie',
      icon: '📝',
      tagline: 'Des mots qui convainquent et des plans qui fonctionnent',
      description: 'Rédaction professionnelle et stratégique pour vos projets : business plans, propositions, e-books et contenu copywriting orienté conversion.',
      problem: 'Difficulté à convaincre partenaires ou clients à l\'écrit',
      result: 'Documents percutants qui débloquent projets et financements',
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      services: [
        'Plans d\'affaires détaillés',
        'Propositions de projets ONG',
        'E-books et guides professionnels',
        'Copywriting pour sites web',
        'Articles et blogs professionnels',
        'Discours et présentations orales',
        'Rapports & dossiers institutionnels',
      ],
    },
    {
      id: 'ia',
      title: 'IA & Automatisation',
      icon: '🤖',
      tagline: 'Automatisez, optimisez, surpassez vos concurrents',
      description: 'Exploitez la puissance de l\'IA pour automatiser vos processus, améliorer votre visibilité sur Google et gérer vos clients plus efficacement.',
      problem: 'Processus manuels lents et absence de visibilité SEO',
      result: 'Gain de temps, plus de prospects qualifiés, meilleur ROI',
      color: 'border-purple-500',
      bgColor: 'bg-purple-50',
      services: [
        'Chatbots IA intelligents',
        'Optimisation SEO avancée',
        'Gestion CRM & relation client',
        'Automatisation des processus',
        'Analyse de données & reporting',
        'Intégration outils IA dans votre workflow',
        'Consulting stratégie digitale',
      ],
    },
    {
      id: 'formation',
      title: 'Formation & Accompagnement',
      icon: '🎓',
      tagline: 'Montez en compétences, prenez votre indépendance',
      description: 'Formations pratiques en IA, marketing digital et entrepreneuriat, conçues pour les réalités africaines. Du débutant au professionnel.',
      problem: 'Équipes ou entrepreneurs non autonomes sur le digital',
      result: 'Compétences opérationnelles et leadership digital acquis',
      color: 'border-orange-500',
      bgColor: 'bg-orange-50',
      services: [
        'Formation IA pratique',
        'Cours marketing digital',
        'Webinaires et ateliers thématiques',
        'Mentorat professionnel personnalisé',
        'Coaching entrepreneurial',
        'Programmes d\'apprentissage sur mesure',
        'Certification digitale',
      ],
    },
    {
      id: 'entreprises',
      title: 'Solutions Entreprises',
      icon: '💼',
      tagline: 'L\'écosystème digital complet pour votre structure',
      description: 'Pour les PME, institutions et grandes organisations qui ont besoin d\'un partenaire digital de confiance sur le long terme.',
      problem: 'Transformation digitale complexe et non coordonnée',
      result: 'Écosystème digital unifié, performant et évolutif',
      color: 'border-blue-900',
      bgColor: 'bg-blue-50',
      services: [
        'Audit digital complet',
        'Stratégie de transformation digitale',
        'Déploiement d\'outils collaboratifs',
        'Formation et conduite du changement',
        'Support technique dédié',
        'Partenariat long terme',
        'Reporting et optimisation continue',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse de vos besoins',
      description: 'Consultation gratuite pour comprendre vos objectifs, vos contraintes et les meilleures opportunités.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Proposition personnalisée',
      description: 'Devis détaillé, planning clair et solution adaptée à votre budget et vos délais.',
    },
    {
      number: '03',
      icon: Settings,
      title: 'Réalisation par notre réseau',
      description: 'Les experts du réseau Rising Digital IA exécutent votre projet avec rigueur et professionnalisme.',
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: 'Révisions & livraison',
      description: 'Ajustements, validations et livraison finale avec formation et support continu.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-6">
              Nos services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des solutions digitales complètes,{' '}
              <span className="text-yellow-400">orientées résultats</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Six pôles d'expertise complémentaires pour couvrir l'intégralité de votre transformation digitale — de la présence web à l'automatisation IA, en passant par la formation et la stratégie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Réserver une consultation gratuite
              </Link>
              <a
                href="https://wa.me/22893392515"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-yellow-500/60 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nos 6 pôles d'expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque service est livré par des experts qualifiés de notre réseau, coordonnés pour garantir qualité et cohérence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`group p-8 bg-white rounded-2xl border-2 ${category.color} shadow-md hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{category.icon}</div>

                <h3 className="text-xl font-bold text-blue-900 mb-1">{category.title}</h3>
                <p className="text-sm text-yellow-600 font-semibold mb-4">{category.tagline}</p>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{category.description}</p>

                {/* Problem → Result */}
                <div className={`${category.bgColor} rounded-xl p-4 mb-5 space-y-2`}>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-xs font-bold mt-0.5 flex-shrink-0">AVANT</span>
                    <span className="text-gray-600 text-xs">{category.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-xs font-bold mt-0.5 flex-shrink-0">APRÈS</span>
                    <span className="text-gray-700 text-xs font-semibold">{category.result}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-gray-400 text-xs italic pl-6">
                      + {category.services.length - 4} services supplémentaires
                    </li>
                  )}
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

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* ── PROCESS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comment nous travaillons
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une méthode structurée et transparente pour garantir votre succès à chaque étape du projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl border border-yellow-500/40 hover:border-yellow-500 transition-all duration-300 text-center h-full">
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

          <div className="p-6 bg-blue-900/50 border border-yellow-500/30 rounded-2xl text-center">
            <p className="text-gray-200">
              <Zap className="inline w-4 h-4 text-yellow-400 mr-2" />
              Réponse garantie sous <strong className="text-yellow-400">24 heures</strong> · Consultation initiale <strong className="text-yellow-400">100% gratuite</strong> · Devis sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
              Tarification
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
              Des tarifs transparents et accessibles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adaptés à toutes les tailles de structure, sans frais cachés, avec un rapport qualité/prix optimisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'À partir de',
                amount: '5 000',
                currency: 'FCFA',
                description: 'Pour les petits projets et besoins ponctuels',
                badge: null,
                features: [
                  'CV optimisé IA ou logo simple',
                  'Vidéo courte ou flyer promotionnel',
                  'Rédaction d\'un document professionnel',
                  'Support par WhatsApp',
                  '1 révision incluse',
                ],
              },
              {
                name: 'Professional',
                price: 'À partir de',
                amount: '50 000',
                currency: 'FCFA',
                description: 'Pour les PME, entrepreneurs et porteurs de projets',
                badge: 'Populaire',
                highlighted: true,
                features: [
                  'Site web complet et responsive',
                  'Design graphique & identité visuelle',
                  'Vidéos promotionnelles professionnelles',
                  'Business plan ou plan marketing',
                  'Support prioritaire + formation incluse',
                ],
              },
              {
                name: 'Enterprise',
                price: 'Sur devis',
                amount: 'Personnalisé',
                currency: '',
                description: 'Solutions complètes pour structures exigeantes',
                badge: null,
                features: [
                  'Écosystème digital complet',
                  'Chatbots IA & automatisation',
                  'Formation d\'équipe sur mesure',
                  'Partenariat et support dédié 24/7',
                  'Consulting stratégique long terme',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white border-2 border-yellow-500 shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-yellow-500 hover:shadow-lg'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-yellow-500 text-blue-900 text-xs font-bold rounded-full shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-yellow-400' : 'text-blue-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-xs ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.price}
                  </span>
                  <div className="text-4xl font-bold mt-1">
                    {plan.amount}
                    {plan.currency && <span className="text-base ml-2 font-medium">{plan.currency}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-lg font-bold text-center transition-all duration-200 hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-2 border-blue-900 text-center">
            <p className="text-blue-900 font-medium">
              <strong>Note :</strong> Tous nos services incluent une consultation gratuite et un devis personnalisé. Les prix sont indicatifs en FCFA et s'adaptent à votre contexte spécifique.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quel est votre prochain projet ?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Peu importe votre besoin ou votre budget, nous avons une solution. Contactez-nous et obtenez une réponse concrète sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Réserver un échange gratuit
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-500/70 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
