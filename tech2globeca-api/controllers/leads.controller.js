import { listLeads, exportLeads, deleteLeadById } from "../lib/db.js";
import { csvEscape } from "../utils/csv.js";

export async function getLeads(req, res) {
  try {
    const result = await listLeads({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      formType: req.query.form_type,
      sourceSite: req.query.source_site,
      dateFrom: req.query.date_from,
      dateTo: req.query.date_to,
    });

    return res.json({
      success: true,
      data: result.rows,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error("READ LEADS ERROR:", error);
    return res.status(500).json({ success: false, message: "Failed to load leads" });
  }
}

export async function exportLeadsCsv(req, res) {
  try {
    const rows = await exportLeads({
      search: req.query.search,
      formType: req.query.form_type,
      sourceSite: req.query.source_site,
      dateFrom: req.query.date_from,
      dateTo: req.query.date_to,
    });

    const headers = [
      "ID",
      "Source Site",
      "Name",
      "Email",
      "Country",
      "Phone",
      "Message",
      "Form Type",
      "Source Page",
      "Sender IP",
      "Location",
      "Created At",
    ];

    const lines = [
      headers.join(","),
      ...rows.map((r) =>
        [
          r.id,
          r.source_site,
          r.name,
          r.email,
          r.country,
          r.phone,
          r.message,
          r.form_type,
          r.source_page,
          r.sender_ip,
          r.location,
          r.created_at,
        ]
          .map(csvEscape)
          .join(",")
      ),
    ];

    const csv = `\uFEFF${lines.join("\n")}`;
    const stamp = new Date().toISOString().slice(0, 10);

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="leads-export-${stamp}.csv"`
    );
    return res.send(csv);
  } catch (error) {
    console.error("EXPORT LEADS ERROR:", error);
    return res.status(500).json({ success: false, message: "Export failed" });
  }
}

export async function deleteLead(req, res) {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }

    const affectedRows = await deleteLeadById(id);
    if (!affectedRows) {
      return res.status(404).json({ success: false, message: "Lead not found" });
    }

    return res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE LEAD ERROR:", error);
    return res.status(500).json({ success: false, message: "Delete failed" });
  }
}
