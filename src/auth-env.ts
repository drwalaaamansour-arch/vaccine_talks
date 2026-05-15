/** Env-only checks (no NextAuth import) — safe for any server module / static analysis. */

export function isGoogleOAuthConfigured(): boolean {
  return Boolean(
    process.env.AUTH_GOOGLE_ID?.trim() &&
      process.env.AUTH_GOOGLE_SECRET?.trim()
  );
}

export function isAppleOAuthConfigured(): boolean {
  return Boolean(
    process.env.AUTH_APPLE_ID?.trim() &&
      process.env.AUTH_APPLE_SECRET?.trim()
  );
}

export function enabledOAuthProviderIds(): Array<"google" | "apple"> {
  const ids: Array<"google" | "apple"> = [];
  if (isGoogleOAuthConfigured()) ids.push("google");
  if (isAppleOAuthConfigured()) ids.push("apple");
  return ids;
}
