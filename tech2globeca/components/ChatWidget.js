"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ||
  "agent_0901kt3f7sgbe978neys8w30bv8x";
const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "http://localhost:3001";

export default function ChatWidget() {
  const containerRef = useRef(null);
  const conversationIdRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onCall = (event) => {
      const config = event.detail?.config;
      if (!config) return;

      const prevOnConnect = config.onConnect;
      const prevOnDisconnect = config.onDisconnect;

      config.onConnect = (payload) => {
        conversationIdRef.current = payload?.conversationId ?? null;
        prevOnConnect?.(payload);
      };

      config.onDisconnect = (payload) => {
        const conversationId = conversationIdRef.current;
        conversationIdRef.current = null;
        prevOnDisconnect?.(payload);

        if (!conversationId) return;

        void fetch(`${API_URL}/api/elevenlabs/fallback/notify-ended`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            conversationId,
            agentId: AGENT_ID,
          }),
        }).catch((err) => {
          console.error("[chat] notify-ended failed:", err);
        });
      };
    };

    container.addEventListener("elevenlabs-convai:call", onCall);
    return () => container.removeEventListener("elevenlabs-convai:call", onCall);
  }, []);

  return (
    <>
      <div ref={containerRef}>
        <elevenlabs-convai agent-id={AGENT_ID} />
      </div>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
