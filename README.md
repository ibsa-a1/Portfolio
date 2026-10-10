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
| `NEXT_PUBLIC_WEB3FORMS_KEY` | `components/Contact.tsx` | Web3Forms access key for the contact form. Public by design: the form posts from the browser, because Web3Forms blocks server-side calls on its free plan. Set it in Vercel for Production and Preview, then redeploy (it is baked in at build time). |

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (also type-checks)
- `npm run start` — run the production build
- `npm run lint` — lint with ESLint

## Project structure

- `app/` — routes, layout, metadata, `robots.ts`, `sitemap.ts`
- `components/` — page sections and the theme provider
- `lib/data.ts` — projects, stats and copy shown on the page
- `assets/` — images imported by `lib/data.ts`
- `public/` — static files (resume PDF)
