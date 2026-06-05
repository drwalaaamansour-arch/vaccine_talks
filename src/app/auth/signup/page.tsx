import Link from "next/link";
import OAuthSignInButtons from "@/components/OAuthSignInButtons";
import { enabledOAuthProviderIds } from "@/auth-env";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sign up",
  description: "Create a Vaccine Talks account with Google or Apple.",
};

export default function SignUpPage() {
  const providers = enabledOAuthProviderIds();

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1 className="auth-card-title">Sign up</h1>
        <p className="auth-card-sub">
          Choose Google or Apple. We never see your password — only your provider shares a secure
          token with us.
        </p>
        <OAuthSignInButtons providers={providers} callbackUrl="/" />
        <p className="auth-card-footer">
          Already have an account? <Link href="/auth/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
