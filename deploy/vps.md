# VPS deployment prep

## Branches

- `release` → production site at `shaneak03.dev`
- `dev` → dev site at `webpage-dev.shaneak03.dev`

## Compose targets

- `docker-compose.release.yml` builds/runs the production container on port `3000`
- `docker-compose.dev.yml` builds/runs the dev container on host port `3001`

## On the VPS

1. Put this repo in a deploy directory, e.g. `/opt/personal-webpage`.
2. Keep one checkout on the `release` branch and one on `dev`, or use two separate directories.
3. Use your existing `cloudflared.yml` to point hostnames at the two internal services.
