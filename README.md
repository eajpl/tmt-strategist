# Observatoire TMT & Finance

App complète (React + Express) extraite de Manus, nettoyée, pour [tmtstrategist.com](https://tmtstrategist.com).

Repo : [eajpl/tmt-strategist](https://github.com/eajpl/tmt-strategist)

## Stack

- Client : Vite 7, React 18, Tailwind 4, Wouter
- Serveur : Express, Drizzle + SQLite (`server/db/sqlite.db`)
- Données : `client/public/data/` (transactions TMT)

## Local

```bash
pnpm install
pnpm dev
```

Client : http://localhost:3000 — API : http://localhost:5000

```bash
pnpm build
NODE_ENV=production pnpm start
```

## Variables

Voir `.env.example`. Ne jamais committer `.env`.

## Déploiement

Processus Node long (Express + cron + webhooks Stripe).  
Cible : VPS / Railway / Fly / Render. **Pas Vercel tel quel.**

1. `pnpm build`
2. Copier `dist/` + `client/public/data` + SQLite
3. `NODE_ENV=production node dist/index.js`
4. Reverse proxy Nginx + TLS
5. DNS : retirer `cname.manus.space`

## Hors Manus

- Plus de `vite-plugin-manus-runtime`
- Plus d’OAuth `api.manus.im` par défaut
- Assets locaux (`/logo-tmt-finance.png`)
- Auth locale `/login`
