#!/usr/bin/env bash
set -e

echo "🚀 Deploying qincard.com..."

WEB_ROOT="/var/www/qincard.com"

echo "📦 Building Next.js site..."
npm run build

echo "🧹 Clearing old site files..."
sudo rm -rf "$WEB_ROOT"/*

echo "📂 Copying new build..."
sudo cp -r out/* "$WEB_ROOT"/

echo "🔐 Fixing permissions..."
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌍 Live at: https://qincard.com"
