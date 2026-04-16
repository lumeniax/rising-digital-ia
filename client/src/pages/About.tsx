import {
  Heart, Users, Zap, Globe, ArrowRight, Star, CheckCircle,
  Code, PenTool, Video, TrendingUp, BarChart3, Calendar,
} from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  const networkRoles = [
    { icon: Code, role: 'Développeurs Web & Mobile', desc: 'React, WordPress, e-commerce et apps web', count: '3' },
    { icon: PenTool, role: 'Designers Graphiques', desc: 'Identité visuelle, UI/UX et branding', count: '2' },
    { icon: Zap, role: 'Spécialistes IA & Data', desc: 'Chatbots, automatisation et outils IA', count: '2' },
    { icon: TrendingUp, role: 'Experts Marketing Digital', desc: 'SEO, publicité digitale et copywriting', count: '2' },
    { icon: Video, role: 'Monteurs Vidéo & Audio', desc: 'Production vidéo, voix off IA et animations', count: '2' },
    { icon: BarChart3, role: 'Consultants Stratégiques', desc: 'Business plans, consulting et mentorat', count: '2' },
  ];

  const values = [
    { icon: Heart, title: 'Engagement Social', desc: 'La technologie au service du développement humain africain.' },
    { icon: Users, title: 'Travail Collaboratif', desc: 'Un réseau d\'experts qui se complètent pour des résultats exceptionnels.' },
    { icon: Zap, title: 'Innovation Continue', desc: 'Adoption des dernières technologies IA pour des solutions avant-gardistes.' },
    { icon: Globe, title: 'Impact Africain', desc: 'Contribution au développement digital et économique du continent.' },
  ];

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white pt-12 pb-14 md:pt-16 md:pb-18">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-5">
              À propos de nous
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Une structure sérieuse,{' '}
              <span className="text-yellow-400">un réseau d'excellence</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Rising Digital IA, c'est une organisation structurée, fondée sur des valeurs fortes, animée par un réseau d'experts qualifiés et engagée dans la transformation digitale de l'Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
                Messan Salem ADIGUIDI
              </h2>
              <p className="text-lg text-yellow-600 font-bold mb-5">
                Fondateur & Directeur Général · Rising Digital IA
              </p>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Professionnel africain à la croisée de la santé publique, de l'éducation et du digital, Messan Salem a bâti Rising Digital IA sur une conviction profonde : la technologie doit être au service du développement humain en Afrique.
              </p>

              <blockquote className="border-l-4 border-yellow-500 pl-5 mb-6">
                <p className="text-gray-700 italic">
                  "Ma mission est de rendre la technologie accessible à tous les africains qui veulent grandir — entrepreneurs, chefs d'entreprise ou porteurs de projets."
                </p>
                <footer className="mt-2 text-sm text-gray-500 font-semibold">— Messan Salem ADIGUIDI</footer>
              </blockquote>

              <div className="grid grid-cols-3 gap-3">
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

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900" />

      {/* ── NETWORK ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-3">
              Notre organisation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Un réseau de <span className="text-yellow-400">compétences</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Derrière Rising Digital IA, une équipe de freelances qualifiés et d'experts sectoriels, coordonnés pour livrer des projets professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {networkRoles.map((expert, i) => {
              const Icon = expert.icon;
              return (
                <div key={i} className="p-5 bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-2xl border border-yellow-500/30 hover:border-yellow-500 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{expert.role}</h3>
                      <span className="text-yellow-400 text-xs font-semibold">{expert.count} experts</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{expert.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl border-2 border-yellow-500 p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Comment ça fonctionne ?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {[
                  'Vous contactez Rising Digital IA avec votre besoin',
                  'Messan Salem analyse et identifie les experts adaptés',
                  'L\'équipe dédiée prend en charge votre projet',
                  'Un seul interlocuteur tout au long du projet',
                  'Livraison, révisions et suivi jusqu\'à votre satisfaction',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-900 font-bold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-gray-200 text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { icon: Star, text: 'Qualité d\'agence, tarifs accessibles' },
                  { icon: Users, text: 'Expert dédié selon la nature de chaque mission' },
                  { icon: CheckCircle, text: 'Processus de validation et de révision rigoureux' },
                  { icon: Zap, text: 'Réactivité garantie — réponse sous 24 heures' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl">
                      <Icon className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Nos Valeurs & Vision</h2>
            <p className="text-gray-600">Ce qui nous anime chaque jour et oriente nos décisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl border-2 border-yellow-500">
              <Globe className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Notre Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                Faire de l'Afrique un leader en innovation digitale et intelligence artificielle, en créant des solutions accessibles et impactantes pour toutes les structures.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl border-2 border-yellow-500">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Notre Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                Transformer les entreprises africaines en les dotant d'outils digitaux et IA de pointe, tout en formant les talents locaux pour un développement durable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-5 bg-white rounded-xl border-2 border-yellow-500 shadow-sm hover:shadow-md transition-all text-center">
                  <div className="mb-3 p-2.5 bg-blue-900 rounded-lg inline-block">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-sm font-bold text-blue-900 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-xs">{v.desc}</p>
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
            Rejoignez nos 120+ clients satisfaits
          </h2>
          <p className="text-gray-200 mb-7 max-w-xl mx-auto">
            Entrepreneur, chef d'entreprise ou porteur de projet, nous avons une solution adaptée à votre réalité.
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
