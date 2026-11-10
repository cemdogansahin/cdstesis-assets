#!/usr/bin/env bash
set -e

MSG="${1:-Update CDS CDN assets}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
git add .
if git diff-index --quiet HEAD --; then
  echo "[CDS CDN] Değişiklik yok, push atlandı."
else
  git commit -m "$MSG"
  git push origin main
  echo "[CDS CDN] Başarıyla GitHub CDN'e gönderildi!"
fi
