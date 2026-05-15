import Link from "next/link";
import OAuthSignInButtons from "@/components/OAuthSignInButtons";
import { enabledOAuthProviderIds } from "@/auth-env";

/** Read OAuth env at request time on the host (not only at build time). */
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sign in",
  description: "Sign in to Vaccine Talk with Google or Apple.",
};

export default function SignInPage() {
  const providers = enabledOAuthProviderIds();

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1 className="auth-card-title">Sign in</h1>
        <p className="auth-card-sub">
          Use your Google or Apple account. New visitors are signed up automatically on first
          sign-in.
        </p>
        <OAuthSignInButtons providers={providers} callbackUrl="/" />
        <p className="auth-card-footer">
          Need an account?{" "}
          <Link href="/auth/signup">Create one</Link> — same options as sign in.
        </p>
      </div>
    </div>
  );
}
