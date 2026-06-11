import { validateContactPayload, getFirstError } from "../validate.js";
import { verifyTurnstileToken } from "../turnstile.js";
import { sendLeadEmails } from "../lib/mailer.js";
import { getClientIp } from "../lib/getClientIp.js";
import { resolveIpLocation } from "../lib/geoip.js";
import { insertLead } from "../lib/db.js";

export async function createContact(req, res) {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Invalid request body.",
      errors: {},
    });
  }

  const clientIp = getClientIp(req);

  const captchaResult = await verifyTurnstileToken(req.body.captchaToken, clientIp);
  if (!captchaResult.success) {
    return res.status(400).json({
      success: false,
      message: captchaResult.error || "Captcha verification failed",
      errors: { captcha: captchaResult.error },
    });
  }

  const payload = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
    country: req.body.country,
    source: req.body.source || req.body.form_type,
    pageUrl: req.body.pageUrl || req.body.source_page,
    form_type: req.body.form_type,
    source_page: req.body.source_page,
  };

  const hasCountry = Boolean(payload.country?.trim());
  const result = validateContactPayload(payload, { requireCountry: hasCountry });

  if (!result.valid) {
    return res.status(400).json({
      success: false,
      message: getFirstError(result.errors),
      errors: result.errors,
    });
  }

  try {
    const location = await resolveIpLocation(clientIp);

    let leadId = null;
    if (process.env.SKIP_DB_VERIFY !== "true") {
      leadId = await insertLead({
        name: result.data.name,
        phone: result.data.phone,
        email: result.data.email,
        message: result.data.message,
        country: result.data.country,
        senderIp: clientIp,
        location,
        sourcePage: result.data.sourcePage,
        formType: result.data.formType,
      });
    }

    await sendLeadEmails({
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      message: result.data.message,
      country: result.data.country,
      senderIp: clientIp,
      location,
      sourcePage: result.data.sourcePage,
      formType: result.data.formType,
    });

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      id: leadId,
    });
  } catch (err) {
    console.error("Lead processing failed:", err);
    return res.status(500).json({
      success: false,
      message: "Unable to process inquiry. Please try again later.",
    });
  }
}
