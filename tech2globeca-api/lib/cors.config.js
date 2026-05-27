export function getCorsOrigins() {
  const raw = process.env.CORS_ORIGIN;

  if (!raw?.trim()) {
    console.error(
      "Missing CORS_ORIGIN in .env — add your frontend URL(s), comma-separated.\n" +
        "Example: CORS_ORIGIN=http://localhost:3000,https://tech2globe.ca"
    );
    process.exit(1);
  }

  const origins = raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (!origins.length) {
    console.error("CORS_ORIGIN is set but contains no valid URLs.");
    process.exit(1);
  }

  return origins;
}
