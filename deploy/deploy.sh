#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_PATH:?DEPLOY_PATH is required}"
: "${DEPLOY_BRANCH:?DEPLOY_BRANCH is required}"
: "${DEPLOY_COMPOSE_FILE:?DEPLOY_COMPOSE_FILE is required}"

cd "$DEPLOY_PATH"

git fetch origin "$DEPLOY_BRANCH"
git checkout "$DEPLOY_BRANCH"
git pull --ff-only origin "$DEPLOY_BRANCH"

docker compose -f "$DEPLOY_COMPOSE_FILE" up -d --build
