#!/bin/bash
# Resolve "push rejected - fetch first" by pulling remote changes then pushing.
set -e
cd "$(dirname "$0")"
echo "Fetching and pulling with rebase..."
git pull --rebase origin main
echo "Pushing to origin main..."
git push -u origin main
echo "Done."
