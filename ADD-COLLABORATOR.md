# Fix "Permission denied to OmarKhaled990" (for repo owner)

If someone is pushing from a machine where **OmarKhaled990** is logged in to GitHub, they get **403** because that account has no access to **drwalaaamansour-arch/vaccine_talks**.

**As the repo owner (drwalaaamansour-arch), do this once:**

1. Open: **https://github.com/drwalaaamansour-arch/vaccine_talks**
2. Go to **Settings** → **Collaborators** (or **Collaborators and teams**)
3. Click **Add people**
4. Enter **OmarKhaled990** and add with **Write** access
5. OmarKhaled990 accepts the invite (email or GitHub notifications)

After that, pushes from this machine (as OmarKhaled990) will work with `git push origin main` or the usual token.
