<!-- Status: ready | Tier: 1 | Created: 2026-08-24 | Picked: - | Branch: - | Verify: curl -sI https://dev.lumahairstudio.com | head -1 -->

# Move the dev site to Vercel as the pilot

## Why

The goal is one hosting surface instead of GitHub Pages plus Cloudflare rules. This repo is where
that gets proven: `dev.lumahairstudio.com` is already dark — its Cloudflare record was deleted on
2026-08-24, so the name is `NXDOMAIN` and there is nothing live to break while working out the
flow. Whatever is learned here is what `luma-hair` follows.

## What to do

1. Create the Vercel project from `SpencerKing7/lumahairdev`. CRA needs no config — build
   `npm run build`, output `build/`.
2. In Cloudflare DNS, add a `dev` record with the A/CNAME values Vercel shows in the project's
   **Domains** tab. There is no existing record to edit — the old one is gone.
3. **Grey-cloud it (DNS only).** Vercel issues and serves its own certificate; leaving the orange
   cloud on puts Cloudflare's cert in front of Vercel's and produces cert mismatches or redirect
   loops.
4. Remove the custom domain from this repo's GitHub Pages settings and delete `public/CNAME`.
   Without both, the repo keeps claiming `dev.lumahairstudio.com` and the two fight over it.
5. Drop or reset the `homepage` field in `package.json` — it exists for Pages' path handling and
   means nothing on Vercel.

## Notes

Decided 2026-08-24: registration and DNS stay at **Cloudflare**, hosting moves to **Vercel**.
Cloudflare Registrar requires its own nameservers, so moving DNS to Vercel would mean moving the
registration too — and Cloudflare sells at cost while Vercel resells at a margin. Nothing is
gained by paying that.

Vercel's Hobby plan prohibits commercial use. A staging host for a business site is a grey area;
it matters properly at the production cutover, not here.
