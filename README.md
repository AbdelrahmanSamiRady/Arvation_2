# Arvation — Next.js (App Router) + Tailwind + Netlify

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (configured in netlify.toml)
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
[build]
  command = "npm run build"
  publish = ".next"
```
