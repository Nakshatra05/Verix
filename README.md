# Verix — Identity Verse (local dev)

This workspace runs a TanStack Start + Vite frontend with a small SSR entry. I added minimal mock API endpoints to make the app usable during development.

## Quick start

Install dependencies:

```bash
npm install
```

Run the development server (includes SSR entry used by the app):

```bash
npm run dev
```

Open the app at the address printed by Vite (e.g. http://localhost:8081/).

## Mock API endpoints

For local development the server exposes two simple endpoints:

- `GET /api/health` — returns `{ ok: true, ts: <timestamp> }`
- `GET /api/passport` — returns a mock passport JSON used by the dashboard

These are implemented inside `src/server.ts` to provide a minimal backend surface until you wire real services or smart-contracts.

## Building for production

The project is configured to build a static client and an SSR server entry compatible with Cloudflare Workers using `wrangler`.

Build the app:

```bash
npm run build
```

Then follow your usual Cloudflare Workers deployment using `wrangler` (see `wrangler.jsonc` and `.wrangler/deploy/config.json`).

## Next steps

- Replace the mock `/api/passport` with real backend logic or contract calls.
- Add authentication and storage for user passports and credentials.
- Configure CI and Cloudflare deployment secrets.

If you want, I can:
- Hook the dashboard to a simple backend (Express or serverless functions) with persistent storage.
- Add contract stubs and example flows for minting a passport on Algorand.
