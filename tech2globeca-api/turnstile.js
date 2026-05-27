const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY is not set — captcha verification skipped.");
    return { success: true, skipped: true };
  }

  if (!token || typeof token !== "string" || !token.trim()) {
    return {
      success: false,
      error: "Captcha required",
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token.trim(),
  });

  if (remoteip) {
    body.append("remoteip", remoteip);
  }

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await res.json();

    if (!data.success) {
      const codes = data["error-codes"]?.join(", ") || "unknown";
      console.warn("Turnstile verification failed:", codes);
      return {
        success: false,
        error: "Captcha verification failed",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Turnstile API error:", err);
    return {
      success: false,
      error: "Unable to verify captcha. Please try again.",
    };
  }
}
