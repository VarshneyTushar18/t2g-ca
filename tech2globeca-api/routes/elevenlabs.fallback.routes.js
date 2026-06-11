import { Router } from "express";
import { notifyEnded, processPending } from "../controllers/elevenlabs.fallback.controller.js";

const router = Router();

router.post("/notify-ended", notifyEnded);
router.post("/process-pending", processPending);

export default router;
