# Rising Digital IA

**L'Innovation au Service de l'Afrique**

Agence digitale africaine spécialisée en intelligence artificielle, dédiée à la transformation digitale des PME, églises et entrepreneurs africains.

## 🌟 À Propos

Rising Digital IA est une agence digitale basée au Togo, fondée par **Messan Salem ADIGUIDI**, un professionnel passionné par le développement humain et la transformation digitale de l'Afrique.

### Notre Mission

Aider l'Afrique à se digitaliser intelligemment grâce à l'IA, au marketing moderne et à l'innovation digitale.

### Nos Services

- **Création Web** : Sites web responsifs et modernes
- **Design Graphique** : Logos, flyers, présentations PowerPoint
- **Vidéo & Audio** : Montage vidéo, voix off IA, publicités
- **Rédaction & Contenu** : CV optimisés, business plans, ebooks
- **Formation IA** : Programmes de formation en digital et IA
- **Services Entreprises** : Chatbots, SEO, CRM, consulting digital

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- pnpm 10.4.1+

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/YOUR_USERNAME/rising-digital-ia.git
cd rising-digital-ia

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site sera disponible à `http://localhost:3000`

## 📦 Scripts Disponibles

```bash
# Développement
pnpm dev          # Lancer le serveur de développement

# Build
pnpm build        # Construire pour la production

# Preview
pnpm preview      # Prévisualiser la build de production

# Vérification
pnpm check        # Vérifier les types TypeScript

# Formatage
pnpm format       # Formater le code avec Prettier
```

## 📁 Structure du Projet

```
rising-digital-ia/
├── client/                 # Frontend React
│   ├── public/            # Fichiers statiques
│   ├── src/
│   │   ├── pages/         # Pages du site
│   │   ├── components/    # Composants réutilisables
│   │   ├── contexts/      # Contextes React
│   │   ├── lib/           # Utilitaires
│   │   ├── App.tsx        # Composant principal
│   │   ├── main.tsx       # Point d'entrée
│   │   └── index.css      # Styles globaux
│   └── index.html         # Template HTML
├── server/                # Backend (optionnel)
├── package.json           # Dépendances du projet
├── vite.config.ts         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind CSS
├── netlify.toml           # Configuration Netlify
└── DEPLOYMENT.md          # Guide de déploiement
```

## 🎨 Design

Le site utilise une philosophie de design **Tech Africain Audacieux** avec :

- **Palette de couleurs** : Bleu électrique (#1E3A8A), Or vif (#FFD700), Blanc (#FFFFFF)
- **Typographie** : Poppins (titres), Open Sans (corps), IBM Plex Mono (données)
- **Animations** : Transitions fluides, hover effects audacieux
- **Responsive** : Mobile-first, adapté à tous les écrans

## 🌐 Pages

- **Accueil** (`/`) - Hero section et présentation générale
- **Services** (`/services`) - Catalogue détaillé des services
- **À Propos** (`/about`) - Présentation du fondateur et vision
- **Portfolio** (`/portfolio`) - Projets réalisés et études de cas
- **Contact** (`/contact`) - Formulaire et informations de contact

## 🔧 Technologies

- **Frontend** : React 19, TypeScript, Tailwind CSS 4
- **Build** : Vite 7
- **UI Components** : shadcn/ui, Radix UI
- **Routing** : Wouter
- **Icons** : Lucide React
- **Forms** : React Hook Form
- **Validation** : Zod

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :

- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Déploiement

### Netlify (Recommandé)

1. Connectez votre dépôt GitHub à Netlify
2. Configurez le build command : `pnpm build`
3. Configurez le publish directory : `dist`
4. Déployez !

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour des instructions détaillées.

### GitHub Pages

```bash
# Construire le site
pnpm build

# Déployer vers GitHub Pages
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 📞 Contact

- **WhatsApp** : +228 93 39 25 15
- **Email** : yesborntoshine@gmail.com
- **Localisation** : Togo, Afrique de l'Ouest

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📊 Performance

- ⚡ Vite pour un build ultra-rapide
- 🎯 Code splitting automatique
- 📦 Tree-shaking pour réduire la taille
- 🚀 Optimisation des images
- 🔒 Sécurité renforcée

## 🔐 Sécurité

- HTTPS automatique sur Netlify
- Headers de sécurité configurés
- Protection contre les attaques courantes
- Validation des formulaires côté client et serveur

## 📈 SEO

- Meta tags optimisés
- Sitemap généré automatiquement
- Open Graph pour les réseaux sociaux
- Structured data (JSON-LD)

## 🐛 Signaler un Bug

Si vous trouvez un bug, veuillez créer une issue avec :

- Description du bug
- Étapes pour reproduire
- Comportement attendu vs réel
- Captures d'écran si applicable

## 💡 Suggestions

Avez-vous une idée pour améliorer le site ? Créez une issue avec le label `enhancement`.

## 📚 Documentation

- [Guide de Déploiement](./DEPLOYMENT.md)
- [Documentation Vite](https://vitejs.dev)
- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)

## 🙏 Remerciements

Merci à tous ceux qui contribuent à Rising Digital IA et à la transformation digitale de l'Afrique.

---

**Rising Digital IA - L'Innovation au Service de l'Afrique** 🌍
