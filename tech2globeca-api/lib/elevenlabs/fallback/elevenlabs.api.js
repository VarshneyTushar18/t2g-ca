const BASE_URL = "https://api.elevenlabs.io/v1/convai/conversations";

function getApiKey() {
  const key = process.env.ELEVENLABS_API_KEY?.trim();
  if (!key) {
    throw new Error("ELEVENLABS_API_KEY is not configured");
  }
  return key;
}

function apiHeaders() {
  return { "xi-api-key": getApiKey() };
}

export async function fetchConversation(conversationId) {
  const res = await fetch(`${BASE_URL}/${encodeURIComponent(conversationId)}`, {
    headers: apiHeaders(),
    signal: AbortSignal.timeout(30000),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`ElevenLabs API ${res.status}: ${text || res.statusText}`);
  }

  return res.json();
}
