# Rising Digital IA

Agence digitale africaine spécialisée en IA et transformation numérique, basée au Togo. Site vitrine en React + TypeScript avec PWA.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Wouter
- **Build**: Vite 7 (`root: "client"`, `base: "/"`)
- **Server**: Express (production Node.js uniquement)
- **Package Manager**: pnpm exclusivement

## Structure du projet

```
client/              # Application React (root Vite)
  src/
    components/      # Composants réutilisables + shadcn/ui dans /ui
    pages/           # Home, Services, About, Portfolio, Contact, NotFound
    contexts/        # ThemeContext
    hooks/           # useMobile, useComposition, usePersistFn
    lib/             # utils.ts
  public/            # Assets statiques: icons, manifest, service-worker, robots, sitemap
  index.html         # Point d'entrée Vite
server/              # Serveur Express (production statique uniquement)
shared/              # Code partagé (const.ts)
patches/             # Patch pnpm pour wouter
dist/                # Build Vite (ignoré git)
```

## Scripts

```bash
pnpm dev      # Dev server Vite → 0.0.0.0:5000 (Replit)
pnpm build    # Build production → dist/ (1627+ modules)
pnpm check    # Type check TypeScript
pnpm lint     # ESLint sur client/src
pnpm test     # Tests Vitest
pnpm format   # Prettier
```

## Configuration Replit

- Workflow: "Start application" → `pnpm dev` → port 5000
- Vite: `host: 0.0.0.0`, `allowedHosts: true`, `port: 5000`
- Déploiement: statique, `pnpm build`, output `dist/`

## Déploiement Netlify

- `netlify.toml`: build command `pnpm build`, publish `dist/`
- Redirects SPA: `/* → /index.html` (status 200)
- Formulaire contact: Netlify Forms (`data-netlify="true"`)
- PWA: service worker + manifest dans `client/public/`

## Notes importantes

- `vite.config.ts` est l'unique config Vite (pas de vite.config.js)
- `pnpm` est l'unique gestionnaire de paquets (pas de package-lock.json)
- Les composants morts (Map.tsx, ManusDialog.tsx) ont été supprimés
- Les fichiers racine corrompus (index.html, 404.html, etc.) ont été supprimés
- ESLint configuré dans `eslint.config.js`
