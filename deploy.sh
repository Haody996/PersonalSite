#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Deploying qincard.com (Docker + static out/)..."

APP_DIR="$HOME/apps/qincard-world"
SITE_URL="https://www.qincard.com"
LOCAL_HEALTHCHECK="http://127.0.0.1:3001"

cd "$APP_DIR"

# Optional: update code if git repo


echo "📦 Installing deps and building..."
npm ci
npm run build

echo "✅ Build done. Checking out/ exists..."
if [ ! -d "out" ]; then
  echo "❌ out/ folder not found. Build did not produce a static export."
  exit 1
fi

echo "🐳 Rebuilding and restarting Docker container..."
docker compose down
docker compose up -d --build

# Retry function
retry_curl () {
  local url="$1"
  local attempts="${2:-30}"
  local sleep_s="${3:-1}"

  for i in $(seq 1 "$attempts"); do
    if curl -4 -fsS -I "$url" >/dev/null 2>&1; then
      return 0
    fi
    echo "⏳ Waiting for $url ($i/$attempts)..."
    sleep "$sleep_s"
  done

  echo "❌ Health check failed: $url"
  return 1
}

echo "🩺 Health check (container)..."
retry_curl "$LOCAL_HEALTHCHECK" 30 1
echo "✅ Container responds on $LOCAL_HEALTHCHECK"

echo "🩺 Health check (public URL)..."
retry_curl "$SITE_URL" 30 1
echo "✅ Live check passed: $SITE_URL"

echo "🎉 Deployment complete!"