import Link from "next/link";

const MESSAGES: Record<string, string> = {
  Configuration:
    "Auth is misconfigured. In production, set a strong `AUTH_SECRET` in your environment (run `npx auth secret`). For Google/Apple, set `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` and/or Apple variables as in `.env.example`.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The verification token has expired or has already been used.",
  Default: "Something went wrong during sign in. Please try again.",
};

export const metadata = {
  title: "Sign-in error",
};

export const dynamic = "force-dynamic";

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const key = error && MESSAGES[error] ? error : "Default";
  const message = MESSAGES[key] ?? MESSAGES.Default;

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1 className="auth-card-title">Sign-in error</h1>
        <p className="auth-card-sub">{message}</p>
        <p className="auth-card-footer" style={{ marginTop: 0 }}>
          <Link href="/auth/signin">Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}
