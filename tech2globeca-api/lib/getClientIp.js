export function getClientIp(req) {
  const cfIp = req.headers["cf-connecting-ip"];
  if (cfIp) {
    return String(cfIp).trim();
  }

  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    return String(forwarded).split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (realIp) {
    return String(realIp).trim();
  }

  let ip = req.ip || req.socket?.remoteAddress || "";
  if (ip.startsWith("::ffff:")) {
    ip = ip.slice(7);
  }

  return ip || "Unknown";
}
