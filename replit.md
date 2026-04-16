# Rising Digital IA

## Project Overview
A React + Vite web application with a lightweight Express server for production static file serving. Built with TypeScript, Tailwind CSS v4, and Radix UI components.

## Architecture
- **Frontend**: React 19 + Vite 7, TypeScript, Tailwind CSS v4, Radix UI, Framer Motion, Wouter (routing)
- **Backend**: Express.js (production only, serves built static files)
- **Package Manager**: pnpm

## Project Structure
```
client/        - React frontend source (Vite root)
  src/         - App components, pages, contexts, hooks
server/        - Express server entry (index.ts) for production
shared/        - Shared constants between client and server
dist/          - Build output (public/ for frontend, index.js for server)
```

## Key Configuration
- Vite dev server: port 5000, host 0.0.0.0, allowedHosts: "all"
- Production server: port from PORT env var, defaults to 3000
- Path aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`

## Development
- Run: `pnpm run dev` (starts Vite dev server on port 5000)
- Build: `pnpm run build` (bundles frontend + compiles server)
- Production: `node dist/index.js`

## Deployment
- Target: autoscale
- Build command: `pnpm run build`
- Run command: `node dist/index.js`
