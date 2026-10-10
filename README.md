# Ibsa Abera — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.
Live at [ibsaabera.tech](https://ibsaabera.tech).

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Web3Forms access key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Name | Where it is used | Notes |
| --- | --- | --- |
| `WEB3FORMS_KEY` | `app/actions.ts` (server action) | Web3Forms access key for the contact form. Server-only, so do not prefix it with `NEXT_PUBLIC_`. Set it in Vercel as well. |

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (also type-checks)
- `npm run start` — run the production build
- `npm run lint` — lint with ESLint

## Project structure

- `app/` — routes, layout, metadata, `robots.ts`, `sitemap.ts`, contact server action
- `components/` — page sections and the theme provider
- `lib/data.ts` — projects, stats and copy shown on the page
- `assets/` — images imported by `lib/data.ts`
- `public/` — static files (resume PDF)
