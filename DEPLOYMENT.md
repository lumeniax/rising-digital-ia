# Guide de Déploiement - Rising Digital IA

Ce document explique comment déployer le site Rising Digital IA sur GitHub et Netlify.

## 📋 Prérequis

- Node.js 18+ et pnpm installés
- Compte GitHub
- Compte Netlify (gratuit)
- Git installé

## 🚀 Déploiement sur GitHub

### 1. Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"New"** pour créer un nouveau dépôt
3. Nommez-le `rising-digital-ia`
4. Choisissez **Public** pour que le site soit accessible
5. Cliquez sur **"Create repository"**

### 2. Initialiser Git localement

```bash
cd rising-digital-ia
git init
git add .
git commit -m "Initial commit: Rising Digital IA website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rising-digital-ia.git
git push -u origin main
```

Remplacez `YOUR_USERNAME` par votre nom d'utilisateur GitHub.

### 3. Structure des fichiers pour GitHub

Le dépôt doit contenir :
- `client/` - Code React/Frontend
- `server/` - Code serveur (optionnel pour Netlify)
- `package.json` - Dépendances du projet
- `pnpm-lock.yaml` - Verrous des dépendances
- `.gitignore` - Fichiers à ignorer
- `README.md` - Documentation du projet
- `DEPLOYMENT.md` - Ce fichier

## 🌐 Déploiement sur Netlify

### Option 1 : Déploiement via Netlify UI (Recommandé)

1. **Connecter votre dépôt GitHub**
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur **"Add new site"** → **"Import an existing project"**
   - Sélectionnez **GitHub** comme provider
   - Autorisez Netlify à accéder à vos dépôts
   - Sélectionnez `rising-digital-ia`

2. **Configurer les paramètres de build**
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`
   - Cliquez sur **"Deploy site"**

### Option 2 : Déploiement via Netlify CLI

```bash
# 1. Installer Netlify CLI
npm install -g netlify-cli

# 2. Se connecter à Netlify
netlify login

# 3. Initialiser le site
netlify init

# 4. Déployer
netlify deploy --prod
```

### Configuration netlify.toml (optionnel)

Créez un fichier `netlify.toml` à la racine du projet :

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📦 Fichiers à inclure dans le dépôt GitHub

```
rising-digital-ia/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── DEPLOYMENT.md
└── netlify.toml
```

## 🔧 Fichier .gitignore

Assurez-vous que votre `.gitignore` contient :

```
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.next/

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Cache
.cache/
.turbo/
```

## 🌍 Domaine personnalisé sur Netlify

1. Allez dans les **Site settings** de votre site Netlify
2. Cliquez sur **"Domain management"**
3. Cliquez sur **"Add custom domain"**
4. Entrez votre domaine (ex: `risingdigitalai.com`)
5. Suivez les instructions pour configurer les DNS

## 📝 Variables d'environnement

Si vous avez besoin de variables d'environnement :

1. Sur Netlify : **Site settings** → **Build & deploy** → **Environment**
2. Ajoutez vos variables (ex: `VITE_API_URL`)

## ✅ Checklist de déploiement

- [ ] Dépôt GitHub créé et code poussé
- [ ] Netlify connecté au dépôt GitHub
- [ ] Build command configuré : `pnpm build`
- [ ] Publish directory configuré : `dist`
- [ ] Site déployé avec succès
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] SSL/HTTPS activé (automatique sur Netlify)
- [ ] Tests du site en production

## 🐛 Dépannage

### Erreur : "pnpm not found"
- Netlify doit détecter automatiquement pnpm. Si ce n'est pas le cas, ajoutez dans `netlify.toml`:
```toml
[build.environment]
  NPM_FLAGS = "--version"
```

### Erreur : "Build failed"
- Vérifiez les logs de build sur Netlify
- Assurez-vous que `pnpm-lock.yaml` est dans le dépôt
- Testez localement : `pnpm build`

### Site affiche une page blanche
- Vérifiez que `dist` est le bon répertoire de publication
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que les chemins d'images sont corrects

## 📚 Ressources utiles

- [Documentation Netlify](https://docs.netlify.com)
- [Documentation Vite](https://vitejs.dev)
- [Documentation GitHub Pages](https://pages.github.com)

## 🔐 Sécurité

- Activez les **branch protection rules** sur GitHub
- Utilisez les **secrets GitHub** pour les données sensibles
- Configurez les **environment variables** sur Netlify
- Activez **HTTPS** (automatique sur Netlify)

---

**Besoin d'aide ?** Contactez Rising Digital IA sur WhatsApp : +228 93 39 25 15
