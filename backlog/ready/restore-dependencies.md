<!-- Status: ready | Tier: 1 | Created: 2026-08-20 | Picked: - | Branch: - | Verify: npm run build -->

# Restore dependencies so the build runs

## Why

`npm run build` — this repo's verify command — fails immediately:

```
sh: react-scripts: command not found
```

`node_modules/` exists but is incomplete: react-scripts is absent, so the install is stale or was
interrupted. Until this is fixed there is no way to prove a change here is good.

Fix is likely just `rm -rf node_modules && npm install`, then confirm `npm run build` passes. If
the install pulls a very different tree than `package-lock.json` expects, that is worth a look
before committing the lockfile churn.

## Notes
