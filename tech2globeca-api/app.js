import cors from "cors";
import express from "express";
import { getCorsOrigins } from "./lib/cors.config.js";
import contactRoutes from "./routes/contact.routes.js";
import leadsRoutes from "./routes/leads.routes.js";
import blogsRoutes from "./routes/blogs.routes.js";
import elevenLabsRoutes from "./routes/elevenlabs.routes.js";
import elevenLabsFallbackRoutes from "./routes/elevenlabs.fallback.routes.js";
import { handleTranscriptWebhook } from "./controllers/elevenlabs.controller.js";

const app = express();
const corsOrigins = getCorsOrigins();

app.set("trust proxy", true);

app.use(
  cors({
    origin: corsOrigins,
  })
);

// ElevenLabs webhook needs raw body for HMAC verification (before JSON parser).
app.use("/api/elevenlabs", elevenLabsRoutes);
app.post(
  "/transcript_webhook",
  express.raw({ type: "application/json" }),
  handleTranscriptWebhook,
);

app.use(express.json({ limit: "32kb" }));
app.use("/api/elevenlabs/fallback", elevenLabsFallbackRoutes);

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", contactRoutes);
app.use("/api", leadsRoutes);
app.use("/api", blogsRoutes);

export { app, corsOrigins };
