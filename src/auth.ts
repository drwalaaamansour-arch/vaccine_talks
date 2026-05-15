import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import {
  isAppleOAuthConfigured,
  isGoogleOAuthConfigured,
} from "./auth-env";

export { enabledOAuthProviderIds } from "./auth-env";

/** Required by Auth.js to sign cookies/JWTs. Set `AUTH_SECRET` in `.env.local` (see `.env.example`). */
function resolveAuthSecret(): string | undefined {
  const fromEnv =
    process.env.AUTH_SECRET?.trim() || process.env.NEXTAUTH_SECRET?.trim();
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV !== "production") {
    if (typeof console !== "undefined") {
      console.warn(
        "[auth] AUTH_SECRET is not set. Using a built-in development secret. Add AUTH_SECRET to .env.local (see .env.example)."
      );
    }
    return "local-dev-auth-secret-do-not-use-in-production-min-32-chars";
  }
  return undefined;
}

const providers = [];
if (isGoogleOAuthConfigured()) providers.push(Google);
if (isAppleOAuthConfigured()) providers.push(Apple);

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: resolveAuthSecret(),
  providers,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
