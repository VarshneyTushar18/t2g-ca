import { Router } from "express";
import express from "express";
import { handleTranscriptWebhook } from "../controllers/elevenlabs.controller.js";

const router = Router();

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleTranscriptWebhook,
);

export default router;
