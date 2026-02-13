#!/bin/bash
# Push to GitHub using a Personal Access Token (no paste in command line)
# Repo owner is drwalaaamansour-arch - the token MUST be from that account.
# 1. Log in to GitHub as drwalaaamansour-arch and create a token at https://github.com/settings/tokens (scope: repo)
# 2. Run: ./push-with-token.sh
# 3. When prompted, paste that token and press Enter

set -e
cd "$(dirname "$0")"

echo "Token must be from GitHub user: drwalaaamansour-arch (repo owner)."
echo "GitHub Personal Access Token (will not be shown):"
read -s TOKEN
echo ""

if [ -z "$TOKEN" ]; then
  echo "No token entered. Exit."
  exit 1
fi

echo "Pushing..."
git remote set-url origin "https://${TOKEN}@github.com/drwalaaamansour-arch/vaccine_talks.git"
# Use only the token in the URL; ignore stored credentials (e.g. OmarKhaled990)
git -c credential.helper= push origin main
git remote set-url origin "https://github.com/drwalaaamansour-arch/vaccine_talks.git"
echo "Done. Remote URL reset (token not saved)."
