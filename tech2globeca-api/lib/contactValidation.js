export const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  phoneMinDigits: 7,
  phoneMaxLength: 25,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
  sourceMax: 100,
  pageUrlMax: 500,
};

import { COUNTRY_OPTIONS, COUNTRY_OPTION_SET } from "./countries.js";

export { COUNTRY_OPTIONS };

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const NAME_REGEX = /^[\p{L}\p{M}'\s.-]+$/u;

const PHONE_REGEX = /^[+]?[\d\s().-]+$/;

const PAGE_URL_REGEX = /^https?:\/\/.+/i;

function trimStr(value) {
  return typeof value === "string" ? value.trim() : "";
}

function countDigits(value) {
  return (value.match(/\d/g) || []).length;
}

export function validateContactPayload(payload, { requireCountry = false } = {}) {
  const errors = {};
  const name = trimStr(payload?.name);
  const phone = trimStr(payload?.phone);
  const email = trimStr(payload?.email);
  const message = trimStr(payload?.message);
  const country = trimStr(payload?.country);
  const source =
    trimStr(payload?.source) ||
    trimStr(payload?.form_type) ||
    "Website contact form";
  const pageUrl = trimStr(payload?.pageUrl) || trimStr(payload?.source_page);

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < LIMITS.nameMin) {
    errors.name = `Name must be at least ${LIMITS.nameMin} characters.`;
  } else if (name.length > LIMITS.nameMax) {
    errors.name = `Name must be at most ${LIMITS.nameMax} characters.`;
  } else if (!NAME_REGEX.test(name)) {
    errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (phone.length > LIMITS.phoneMaxLength) {
    errors.phone = `Phone must be at most ${LIMITS.phoneMaxLength} characters.`;
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Phone can only contain digits, spaces, and + ( ) - .";
  } else {
    const digits = countDigits(phone);
    if (digits < LIMITS.phoneMinDigits) {
      errors.phone = `Phone must include at least ${LIMITS.phoneMinDigits} digits.`;
    }
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (email.length > LIMITS.emailMax) {
    errors.email = `Email must be at most ${LIMITS.emailMax} characters.`;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < LIMITS.messageMin) {
    errors.message = `Message must be at least ${LIMITS.messageMin} characters.`;
  } else if (message.length > LIMITS.messageMax) {
    errors.message = `Message must be at most ${LIMITS.messageMax} characters.`;
  }

  if (requireCountry) {
    if (!country) {
      errors.country = "Please select a country.";
    } else if (!COUNTRY_OPTION_SET.has(country)) {
      errors.country = "Please select a valid country.";
    }
  }

  if (source.length > LIMITS.sourceMax) {
    errors.source = "Invalid form source.";
  }

  if (pageUrl) {
    if (pageUrl.length > LIMITS.pageUrlMax) {
      errors.pageUrl = `Page URL must be at most ${LIMITS.pageUrlMax} characters.`;
    } else if (!PAGE_URL_REGEX.test(pageUrl)) {
      errors.pageUrl = "Page URL must be a valid http or https link.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    data: {
      name,
      phone,
      email: email.toLowerCase(),
      message,
      country: country || "—",
      source: source.slice(0, LIMITS.sourceMax),
      pageUrl: pageUrl || "—",
      formType: source.slice(0, LIMITS.sourceMax),
      sourcePage: pageUrl || "—",
    },
  };
}

export function getFirstError(errors) {
  if (!errors || typeof errors !== "object") return null;
  const values = Object.values(errors);
  return values[0] || null;
}
