"use client";

import { signIn } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

type ProviderId = "google" | "apple";

type OAuthSignInButtonsProps = {
  providers: ProviderId[];
  callbackUrl?: string;
};

function defaultTab(providers: ProviderId[]): ProviderId {
  if (providers.includes("google")) return "google";
  if (providers.includes("apple")) return "apple";
  return "google";
}

export default function OAuthSignInButtons({
  providers,
  callbackUrl = "/",
}: OAuthSignInButtonsProps) {
  const [pending, setPending] = useState<ProviderId | null>(null);
  const [activeTab, setActiveTab] = useState<ProviderId>(() =>
    defaultTab(providers)
  );
  const connectingRef = useRef(false);

  const googleOk = providers.includes("google");
  const appleOk = providers.includes("apple");

  useEffect(() => {
    setActiveTab((prev) => {
      if (prev === "google" && googleOk) return prev;
      if (prev === "apple" && appleOk) return prev;
      return defaultTab(providers);
    });
  }, [googleOk, appleOk, providers]);

  const connect = async (id: ProviderId) => {
    if (id === "google" && !googleOk) return;
    if (id === "apple" && !appleOk) return;
    if (connectingRef.current) return;
    connectingRef.current = true;
    setPending(id);
    try {
      await signIn(id, { callbackUrl });
    } finally {
      connectingRef.current = false;
      setPending(null);
    }
  };

  return (
    <div className="auth-oauth-wrap">
      <div
        className="auth-oauth-tablist"
        role="group"
        aria-label="Sign in with Google or Apple"
      >
        <button
          type="button"
          aria-label="Sign in with Google"
          aria-busy={pending === "google"}
          disabled={!googleOk || pending !== null}
          className={`auth-oauth-tab auth-oauth-tab--google ${googleOk ? "" : "auth-oauth-tab--inactive"} ${pending === "google" ? "auth-oauth-tab--pending" : ""} ${activeTab === "google" && googleOk && pending === null ? "auth-oauth-tab--highlight" : ""}`}
          onMouseEnter={() => googleOk && setActiveTab("google")}
          onFocus={() => googleOk && setActiveTab("google")}
          onClick={() => void connect("google")}
        >
          {pending === "google" ? (
            <span className="auth-oauth-tab-pending">Connecting…</span>
          ) : (
            <>
              <GoogleGlyph />
              <span className="auth-oauth-tab-text">
                <span className="auth-oauth-tab-title">Sign in with</span>
                <span className="auth-oauth-tab-brand">Google</span>
              </span>
            </>
          )}
        </button>
        <button
          type="button"
          aria-label="Sign in with Apple"
          aria-busy={pending === "apple"}
          disabled={!appleOk || pending !== null}
          className={`auth-oauth-tab auth-oauth-tab--apple ${appleOk ? "" : "auth-oauth-tab--inactive"} ${pending === "apple" ? "auth-oauth-tab--pending" : ""} ${activeTab === "apple" && appleOk && pending === null ? "auth-oauth-tab--highlight" : ""}`}
          onMouseEnter={() => appleOk && setActiveTab("apple")}
          onFocus={() => appleOk && setActiveTab("apple")}
          onClick={() => void connect("apple")}
        >
          {pending === "apple" ? (
            <span className="auth-oauth-tab-pending">Connecting…</span>
          ) : (
            <>
              <AppleGlyph />
              <span className="auth-oauth-tab-text">
                <span className="auth-oauth-tab-title">Sign in with</span>
                <span className="auth-oauth-tab-brand">Apple</span>
              </span>
            </>
          )}
        </button>
      </div>

      <div className="auth-oauth-tabpanel">
        {!googleOk && !appleOk && (
          <p className="auth-oauth-empty">
            OAuth is not configured yet. Add{" "}
            <code className="auth-oauth-code">AUTH_GOOGLE_ID</code> /{" "}
            <code className="auth-oauth-code">AUTH_GOOGLE_SECRET</code> and
            optionally Apple keys in your environment (see{" "}
            <code className="auth-oauth-code">.env.example</code>).
          </p>
        )}
      </div>
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg
      className="auth-oauth-tab-icon"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg
      className="auth-oauth-tab-icon auth-oauth-tab-icon--apple"
      width="26"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
