# CLAUDE.md — lumahairstudio-dev

## What this is

Marketing site for Luma Hair Studio — the staging variant. Create React App + TypeScript with MUI, published to
GitHub Pages at https://dev.lumahairstudio.com.

**This repo is the `development` half of a two-repo pair.** Production is
`SpencerLumaHair/luma-hair`, serving https://www.lumahairstudio.com; this repo is
`SpencerKing7/lumahairdev`, serving https://dev.lumahairstudio.com. Each host comes from that
repo's own `public/CNAME`. The two share the same `name` in `package.json` and the same
`gh-pages -d build` deploy, so the working copies look alike — check which directory you are in
before deploying.

## Layout

- `src/pages/` — `MainPage`, `ServicesPage`
- `src/components/` — `NavBar`, and in the dev repo also `ServiceCard`
- `src/assets/colors.ts` and `src/customPalette.ts` — the palette, which differs between the two repos
- Work items live in Linear (project `Luma Hair Studio`); use `/backlog`

## Commands

```bash
npm install
npm start        # http://localhost:3000
npm run build
npm run deploy   # predeploy builds, then publishes build/ to gh-pages
```

## Verify

```bash
npm run build
```

Only the default CRA smoke test exists, so a clean production build is the real gate.

## Architecture

A static marketing site — no data layer, no API, no auth. MUI theming drives the look; the palette
lives in `customPalette.ts` and `assets/colors.ts`.

## Never

- **Never deploy without checking which of the two repos you are in.** The two working copies are
  near-identical and both run `npm run deploy`, but this one publishes the dev host and the other
  publishes the live www site.
- **Never let the two repos silently diverge.** They currently differ in `App.tsx`, `NavBar.tsx`,
  both palette files, and both pages; `ServiceCard.tsx` exists only in dev. Port changes
  deliberately rather than letting drift accumulate.
