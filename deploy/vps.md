# VPS deployment prep

## Branches

- `release` → production site at `shaneak03.dev`
- `dev` → dev site at `webpage-dev.shaneak03.dev`

## Compose targets

- `docker-compose.release.yml` builds/runs the production container on port `3000`
- `docker-compose.dev.yml` builds/runs the dev container on host port `3001`
- `deploy/cloudflared.yml` maps the two public hostnames to the two containers over Cloudflare Tunnel

## On the VPS

1. Put this repo in a deploy directory, e.g. `/opt/personal-webpage`.
2. Keep one checkout on the `release` branch and one on `dev`, or use two separate directories.
3. Run Cloudflare Tunnel and point it at the two internal services.
