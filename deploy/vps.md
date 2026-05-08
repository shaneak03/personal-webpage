# VPS deployment prep

## Branches

- `release` → production site at `shaneak03.dev`
- `dev` → dev site at `webpage-dev.shaneak03.dev`

## Compose targets

- `docker-compose.release.yml` builds/runs the production container on host port `3005`
- `docker-compose.dev.yml` builds/runs the dev container on host port `3001`

## GitHub Actions CD

- `.github/workflows/deploy.yml` deploys on push to `dev` or `release`
- The workflow SSHes into the VPS and runs `deploy/deploy.sh`
- `deploy/deploy.sh` does:
  - `git fetch`
  - `git checkout <branch>`
  - `git pull --ff-only`
  - `docker compose up -d --build`

### Required GitHub secrets

- `VPS_SSH_HOST`
- `VPS_SSH_USER`
- `VPS_SSH_KEY`
- `VPS_SSH_PORT` (optional, defaults to `22`)
- `VPS_DEV_PATH` (optional, defaults to `/opt/personal-webpage-dev`)
- `VPS_RELEASE_PATH` (optional, defaults to `/opt/personal-webpage-release`)

## On the VPS

1. Create two repo checkouts:
   - `/opt/personal-webpage-release`
   - `/opt/personal-webpage-dev`
2. In each checkout, track the matching branch:
   - release checkout → `release`
   - dev checkout → `dev`
3. Use your existing `cloudflared.yml` to point:
   - `shaneak03.dev` → `http://localhost:3005`
   - `webpage-dev.shaneak03.dev` → `http://localhost:3001`
4. Make sure the deploy user can run Docker and `docker compose`.
5. Make `deploy/deploy.sh` executable in both checkouts.
