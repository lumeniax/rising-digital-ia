# Configuration GitHub et Netlify - Rising Digital IA

## 📋 Étapes de Configuration

### Étape 1 : Préparer le Dépôt Local

```bash
cd rising-digital-ia

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Faire un commit initial
git commit -m "Initial commit: Rising Digital IA website"

# Renommer la branche en 'main'
git branch -M main
```

### Étape 2 : Créer un Dépôt sur GitHub

1. Allez sur https://github.com/new
2. Nommez le dépôt : `rising-digital-ia`
3. Description : "Agence digitale IA africaine - Rising Digital IA"
4. Choisissez **Public**
5. Cliquez sur **"Create repository"**

### Étape 3 : Pousser le Code sur GitHub

```bash
# Ajouter le remote GitHub (remplacez YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rising-digital-ia.git

# Pousser le code
git push -u origin main
```

### Étape 4 : Configurer Netlify

#### Option A : Via l'Interface Netlify (Recommandé)

1. Allez sur https://netlify.com
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Sélectionnez **GitHub** comme provider
4. Autorisez Netlify
5. Sélectionnez le dépôt `rising-digital-ia`
6. Configurez les paramètres :
   - **Build command** : `pnpm build`
   - **Publish directory** : `dist`
7. Cliquez sur **"Deploy site"**

#### Option B : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser le site
netlify init

# Déployer
netlify deploy --prod
```

### Étape 5 : Configurer le Domaine Personnalisé (Optionnel)

1. Sur Netlify, allez dans **Site settings** → **Domain management**
2. Cliquez sur **"Add custom domain"**
3. Entrez votre domaine (ex: `risingdigitalai.com`)
4. Suivez les instructions pour configurer les DNS

## 📁 Fichiers Inclus pour le Déploiement

```
✅ netlify.toml           - Configuration Netlify
✅ .github/workflows/     - GitHub Actions (CI/CD)
✅ DEPLOYMENT.md          - Guide complet de déploiement
✅ README.md              - Documentation du projet
✅ .gitignore             - Fichiers à ignorer
✅ package.json           - Dépendances
✅ pnpm-lock.yaml         - Verrous des dépendances
```

## 🔐 Secrets GitHub (pour CI/CD automatique)

Si vous utilisez GitHub Actions pour déployer automatiquement :

1. Allez dans votre dépôt GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Ajoutez les secrets :
   - `NETLIFY_AUTH_TOKEN` : Token d'authentification Netlify
   - `NETLIFY_SITE_ID` : ID du site Netlify

### Comment obtenir les tokens ?

**NETLIFY_AUTH_TOKEN** :
1. Allez sur https://app.netlify.com/user/applications
2. Cliquez sur **"New access token"**
3. Copiez le token

**NETLIFY_SITE_ID** :
1. Sur Netlify, allez dans **Site settings**
2. Cherchez "Site ID" en bas de la page
3. Copiez l'ID

## ✅ Checklist Final

- [ ] Dépôt GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Netlify connecté au dépôt
- [ ] Build command configuré : `pnpm build`
- [ ] Publish directory configuré : `dist`
- [ ] Site déployé avec succès
- [ ] URL Netlify fonctionnelle
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] SSL/HTTPS activé
- [ ] Tests du site en production

## 🚀 Après le Déploiement

### Mettre à jour le site

```bash
# Faire des modifications locales
# ...

# Committer et pousser
git add .
git commit -m "Update: description of changes"
git push origin main

# Netlify déploiera automatiquement !
```

### Surveiller les déploiements

1. Sur Netlify, allez dans **Deploys**
2. Vous verrez l'historique de tous les déploiements
3. Cliquez sur un déploiement pour voir les détails

## 🐛 Dépannage

### Erreur : "pnpm not found"
- Netlify doit détecter pnpm automatiquement
- Si ce n'est pas le cas, vérifiez que `pnpm-lock.yaml` est dans le dépôt

### Erreur : "Build failed"
- Vérifiez les logs de build sur Netlify
- Testez localement : `pnpm build`
- Assurez-vous que toutes les dépendances sont installées

### Site affiche une page blanche
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que les chemins d'images sont corrects
- Vérifiez que `dist` est le bon répertoire de publication

## 📞 Support

Pour toute question :
- **WhatsApp** : +228 93 39 25 15
- **Email** : yesborntoshine@gmail.com

---

**Bravo ! Votre site est maintenant en ligne ! 🎉**
