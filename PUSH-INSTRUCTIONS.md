# How to push to GitHub (fix authentication)

Your changes are **committed locally**. To push them to GitHub, do one of the following.

---

## Option A: Use a Personal Access Token (recommended)

1. **Create a token**
   - Open: https://github.com/settings/tokens
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - Name: e.g. `vaccine_talks`
   - Expiration: choose what you prefer (e.g. 90 days)
   - Scopes: check **repo**
   - Click **Generate token** and **copy the token** (starts with `ghp_...`)

2. **Push once with the token in the URL** (paste your token where it says `PASTE_YOUR_TOKEN_HERE`):
   ```bash
   cd "/Users/walaaadel/Downloads/vaccine web/vaccine"
   git remote set-url origin https://PASTE_YOUR_TOKEN_HERE@github.com/drwalaaamansour-arch/vaccine_talks.git
   git push origin main
   ```

3. **Remove the token from the URL after a successful push** (so it is not saved in the repo):
   ```bash
   git remote set-url origin https://github.com/drwalaaamansour-arch/vaccine_talks.git
   ```
   Next time you push, Git will ask for username and password; use your **username** and the same **token** as password. Your Mac will remember it in Keychain.

---

## Option B: Use SSH (if your key is already on GitHub)

1. **Add your SSH key to GitHub** (if not already):
   - Copy your public key: `cat ~/.ssh/id_ed25519_github.pub`
   - Open: https://github.com/settings/keys
   - Click **New SSH key**, paste the key, save

2. **Use SSH for this repo and push:**
   ```bash
   cd "/Users/walaaadel/Downloads/vaccine web/vaccine"
   git remote set-url origin git@github.com:drwalaaamansour-arch/vaccine_talks.git
   git push origin main
   ```

---

If you still get "Authentication failed", the token may be wrong or expired. Create a new token and try again.
