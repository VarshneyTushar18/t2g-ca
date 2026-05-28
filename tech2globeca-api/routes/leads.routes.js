import { Router } from "express";
import { deleteLead, exportLeadsCsv, getLeads } from "../controllers/leads.controller.js";

const router = Router();

router.get("/leads", getLeads);
router.get("/leads/export", exportLeadsCsv);
router.delete("/leads/:id", deleteLead);

export default router;
