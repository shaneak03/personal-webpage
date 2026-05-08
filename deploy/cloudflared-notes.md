# Cloudflare Tunnel deployment prep

## Branches

- `release` → production site at `shaneak03.dev`
- `dev` → dev site at `webpage-dev.shaneak03.dev`

## Runtime layout

- `personal-webpage` listens on `3000`
- `personal-webpage-dev` listens on `3000` internally, published through the tunnel as a separate hostname
- `deploy/cloudflared.yml` maps both hostnames to the right container

## On the VPS

1. Run the app containers on a shared Docker network.
2. Run `cloudflared` with this tunnel config mounted in.
3. In Cloudflare Zero Trust, map:
   - `shaneak03.dev` → prod service
   - `webpage-dev.shaneak03.dev` → dev service

## Notes

- No public reverse proxy on the VPS is needed when the tunnel is active.
- If you want, I can add a `cloudflared` service compose file next.
