import cors from "cors";
import express from "express";
import { getCorsOrigins } from "./lib/cors.config.js";
import contactRoutes from "./routes/contact.routes.js";
import leadsRoutes from "./routes/leads.routes.js";

const app = express();
const corsOrigins = getCorsOrigins();

app.set("trust proxy", true);

app.use(
  cors({
    origin: corsOrigins,
  })
);
app.use(express.json({ limit: "32kb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", contactRoutes);
app.use("/api", leadsRoutes);

export { app, corsOrigins };
