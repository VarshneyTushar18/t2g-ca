import {
  notifyConversationEnded,
  processPendingConversations,
} from "../lib/elevenlabs/fallback/elevenlabs.fallback.service.js";

export async function notifyEnded(req, res) {
  try {
    const conversationId =
      req.body?.conversationId ?? req.body?.conversation_id ?? null;
    const agentId =
      req.body?.agentId ??
      req.body?.agent_id ??
      process.env.ELEVENLABS_AGENT_ID ??
      null;

    if (!conversationId) {
      return res.status(400).json({
        success: false,
        message: "conversationId is required",
      });
    }

    console.log(
      `[elevenlabs-fallback] notify-ended: ${conversationId} (agent: ${agentId || "default"})`,
    );

    const result = await notifyConversationEnded({ conversationId, agentId });

    void processPendingConversations().catch((err) => {
      console.error("[elevenlabs-fallback] background process error:", err.message);
    });

    return res.status(200).json({
      success: true,
      processing: true,
      ...result,
    });
  } catch (err) {
    console.error("[elevenlabs-fallback] notify-ended error:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function processPending(req, res) {
  try {
    console.log("[elevenlabs-fallback] process-pending started");
    const result = await processPendingConversations();

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    console.error("[elevenlabs-fallback] process-pending error:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
