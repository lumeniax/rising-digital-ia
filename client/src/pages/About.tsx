/**
 * About Page - Rising Digital IA
 * Page À propos avec fondateur, équipe/réseau, vision
 * Design: Tech Africain Audacieux
 */

import { Heart, Users, Zap, Globe, ArrowRight, Network, Star, CheckCircle,
  Code, PenTool, Video, TrendingUp, BarChart3, GraduationCap, Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Engagement Social',
      description: 'La technologie au service du développement humain et des communautés africaines.',
    },
    {
      icon: Users,
      title: 'Travail Collaboratif',
      description: 'Un réseau soudé d\'experts qui se complètent pour livrer des résultats exceptionnels.',
    },
    {
      icon: Zap,
      title: 'Innovation Continue',
      description: 'Adoption des dernières technologies IA pour offrir des solutions avant-gardistes.',
    },
    {
      icon: Globe,
      title: 'Impact Africain',
      description: 'Contribution active au développement digital et économique du continent.',
    },
  ];

  const timeline = [
    {
      year: '2013',
      title: 'Début de Carrière',
      description: 'Agent de santé engagé pour le bien-être des communautés, développement du sens du service.',
    },
    {
      year: '2015',
      title: 'Transition Éducative',
      description: 'Enseignant passionné par la formation et le développement des jeunes talents.',
    },
    {
      year: '2018',
      title: 'Formateur Professionnel',
      description: 'Création de programmes de formation en compétences digitales et entrepreneuriat.',
    },
    {
      year: '2021',
      title: 'Fondation de Rising Digital IA',
      description: 'Lancement de l\'agence avec une vision claire : digitaliser l\'Afrique intelligemment.',
    },
    {
      year: '2024',
      title: 'Réseau d\'Experts Constitué',
      description: 'Extension du réseau à 10+ experts qualifiés, déploiement dans plusieurs pays africains.',
    },
  ];

  const networkRoles = [
    {
      icon: Code,
      role: 'Développeurs Web & Mobile',
      description: 'Experts React, WordPress, e-commerce et applications web modernes',
      count: '3',
    },
    {
      icon: PenTool,
      role: 'Designers Graphiques',
      description: 'Spécialistes identité visuelle, UI/UX, motion design et branding',
      count: '2',
    },
    {
      icon: Zap,
      role: 'Spécialistes IA & Data',
      description: 'Experts chatbots, automatisation, analyse de données et outils IA',
      count: '2',
    },
    {
      icon: TrendingUp,
      role: 'Experts Marketing Digital',
      description: 'Maîtrise SEO, publicité digitale, stratégie réseaux sociaux et copywriting',
      count: '2',
    },
    {
      icon: Video,
      role: 'Monteurs Vidéo & Audio',
      description: 'Production vidéo, voix off IA, animations et post-production',
      count: '2',
    },
    {
      icon: BarChart3,
      role: 'Consultants Stratégiques',
      description: 'Business plans, consulting digital, formation et mentorat entrepreneurial',
      count: '2',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-6">
              À propos de nous
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Une structure sérieuse,{' '}
              <span className="text-yellow-400">un réseau d'excellence</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Rising Digital IA, c'est bien plus qu'une agence : c'est une organisation structurée, fondée sur des valeurs fortes, animée par un réseau d'experts qualifiés et engagée dans la transformation digitale de l'Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370713531/ZzPxKNKJISRsvirl.jpg"
                alt="Messan Salem ADIGUIDI — Fondateur Rising Digital IA"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
                Le fondateur
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">
                Messan Salem ADIGUIDI
              </h2>
              <p className="text-lg text-yellow-600 font-bold mb-6">
                Fondateur & Directeur Général · Rising Digital IA
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Professionnel africain à la croisée de la santé publique, de l'éducation et du digital, Messan Salem a bâti Rising Digital IA sur une conviction profonde : la technologie doit être au service du développement humain en Afrique.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Avec plus d'une décennie d'expérience terrain, il a structuré autour de sa vision un réseau de talents capables d'accompagner tout type de projet digital, de la PME locale à l'institution internationale.
              </p>

              <blockquote className="border-l-4 border-yellow-500 pl-6 mb-8">
                <p className="text-lg text-gray-700 italic">
                  "Ma mission est de rendre la technologie accessible à tous les africains qui veulent grandir — qu'ils soient entrepreneurs, pasteurs, chefs d'entreprise ou porteurs de projets."
                </p>
                <footer className="mt-2 text-sm text-gray-500 font-semibold">— Messan Salem ADIGUIDI</footer>
              </blockquote>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '10+', label: 'ans d\'expérience' },
                  { number: '150+', label: 'projets livrés' },
                  { number: '3', label: 'pays couverts' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-2xl font-bold text-blue-900">{s.number}</div>
                    <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* ── NETWORK ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
              Notre organisation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pas une seule personne —{' '}
              <span className="text-yellow-400">Un réseau de compétences</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Derrière Rising Digital IA, c'est une équipe de freelances qualifiés, partenaires techniques et experts sectoriels, coordonnés pour livrer des projets professionnels à la hauteur de vos ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {networkRoles.map((expert, i) => {
              const Icon = expert.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-2xl border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{expert.role}</h3>
                      <span className="text-yellow-400 text-xs font-semibold">{expert.count} experts</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{expert.description}</p>
                </div>
              );
            })}
          </div>

          {/* How collaboration works */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl border-2 border-yellow-500 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Comment ça fonctionne ?</h3>
                <div className="space-y-4">
                  {[
                    'Vous contactez Rising Digital IA avec votre besoin',
                    'Messan Salem analyse et identifie les experts adaptés',
                    'L\'équipe dédiée prend en charge votre projet',
                    'Vous avez un seul interlocuteur tout au long du projet',
                    'Livraison, révisions et suivi assurés jusqu\'à votre satisfaction',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-900 font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-gray-200 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Star, text: 'Qualité d\'une grande agence, tarifs accessibles' },
                  { icon: Network, text: 'Expert dédié selon la nature de chaque mission' },
                  { icon: CheckCircle, text: 'Processus de validation et de révision rigoureux' },
                  { icon: Zap, text: 'Réactivité garantie — réponse sous 24 heures' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl">
                      <Icon className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Notre Vision & Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous anime chaque jour et oriente chacune de nos décisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl border-2 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Notre Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Faire de l'Afrique un leader en innovation digitale et intelligence artificielle, en créant des solutions accessibles, adaptées et impactantes pour toutes les structures — PME, églises, institutions, entrepreneurs.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl border-2 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Notre Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Transformer les entreprises et organisations africaines en les dotant d'outils digitaux et IA de pointe, tout en formant les talents locaux et en contribuant au développement économique durable du continent.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">Nos Valeurs Fondamentales</h2>
            <p className="text-gray-600">Les principes qui guident chacune de nos actions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border-2 border-yellow-500 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
              Notre parcours
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              De l'engagement humain à l'innovation digitale
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une trajectoire cohérente, construite sur l'expérience terrain et une vision claire pour l'Afrique.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900 text-sm flex-shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-yellow-500/40 mt-2"></div>
                  )}
                </div>
                <div className="pb-6 pt-2">
                  <h3 className="text-xl font-bold mb-1 text-yellow-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">Nos Engagements</h2>
            <p className="text-gray-600">Les responsabilités que nous prenons au-delà du business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Protection des Enfants',
                description: 'Engagement fort envers la protection et le bien-être des enfants dans tous nos programmes et initiatives.',
              },
              {
                icon: Globe,
                title: 'Développement Durable',
                description: 'Nos solutions contribuent aux objectifs de développement durable, avec un impact positif sur l\'environnement et les communautés.',
              },
              {
                icon: GraduationCap,
                title: 'Formation & Mentorat',
                description: 'Investissement dans la formation des jeunes talents africains pour construire la prochaine génération de leaders digitaux.',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-8 bg-blue-50 rounded-2xl border-2 border-blue-900 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{c.title}</h3>
                  <p className="text-gray-700">{c.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Rejoignez notre réseau de clients satisfaits
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Que vous soyez entrepreneur, chef d'entreprise, institution ou porteur de projet, nous avons une solution adaptée à votre réalité.
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
