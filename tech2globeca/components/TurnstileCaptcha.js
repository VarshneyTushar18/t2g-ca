"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise = null;

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src^="${TURNSTILE_SCRIPT.split("?")[0]}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load captcha."));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

const TurnstileCaptcha = React.forwardRef(function TurnstileCaptcha(
  { siteKey, onVerify, onExpire, onError, theme = "light", className = "" },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const callbacksRef = useRef({ onVerify, onExpire, onError });
  const [loadError, setLoadError] = useState("");

  callbacksRef.current = { onVerify, onExpire, onError };

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;

        if (widgetIdRef.current != null) {
          window.turnstile.remove(widgetIdRef.current);
        }

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => callbacksRef.current.onVerify?.(token),
          "expired-callback": () => callbacksRef.current.onExpire?.(),
          "error-callback": () => callbacksRef.current.onError?.(),
        });
      })
      .catch(() => {
        if (!cancelled) setLoadError("Captcha failed to load. Please refresh the page.");
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme]);

  if (!siteKey) {
    return (
      <p className="text-amber-400 text-xs">
        Captcha is not configured. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local
      </p>
    );
  }

  return (
    <div className={className}>
      <div ref={containerRef} />
      {loadError && (
        <p className="text-red-400 text-xs mt-1" role="alert">
          {loadError}
        </p>
      )}
    </div>
  );
});

export default TurnstileCaptcha;
