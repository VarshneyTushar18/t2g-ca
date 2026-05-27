function isLocalIp(ip) {
  if (!ip || ip === "Unknown") return true;
  if (ip === "127.0.0.1" || ip === "::1") return true;
  if (ip.startsWith("192.168.") || ip.startsWith("10.")) return true;
  if (ip.startsWith("172.")) {
    const second = Number(ip.split(".")[1]);
    if (second >= 16 && second <= 31) return true;
  }
  return false;
}

export async function resolveIpLocation(ip) {
  if (isLocalIp(ip)) {
    return "Local / Unknown";
  }

  try {
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: AbortSignal.timeout(5000),
    });
    const geo = await res.json();

    if (geo.error) {
      return "Unknown";
    }

    return `${geo.city || "-"}, ${geo.region || "-"}, ${geo.country_name || "-"}`;
  } catch (err) {
    console.warn("GeoIP lookup failed:", err.message);
    return "Unknown";
  }
}
