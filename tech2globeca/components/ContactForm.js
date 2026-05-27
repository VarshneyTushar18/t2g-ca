"use client";

import React, { useCallback, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  validateContactPayload,
  COUNTRY_OPTIONS,
  LIMITS,
} from "@/lib/contactValidation";
import TurnstileCaptcha from "@/components/TurnstileCaptcha";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "http://localhost:3001";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  message: "",
  country: COUNTRY_OPTIONS[0],
};

export default function ContactForm({
  variant = "faq",
  showCountry = false,
  source = "Website contact form",
}) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileRef = useRef(null);

  const handleCaptchaVerify = useCallback((token) => {
    setCaptchaToken(token);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.captcha;
      return next;
    });
  }, []);

  const handleCaptchaExpire = useCallback(() => {
    setCaptchaToken("");
    setErrors((prev) => ({
      ...prev,
      captcha: "Captcha expired. Please verify again.",
    }));
  }, []);

  const handleCaptchaError = useCallback(() => {
    setCaptchaToken("");
    setErrors((prev) => ({
      ...prev,
      captcha: "Captcha failed to load. Please refresh and try again.",
    }));
  }, []);

  const inputBase =
    variant === "contact-page"
      ? "w-full bg-white text-gray-900 px-4 py-3.5 text-[14px] focus:outline-none"
      : "w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-transparent";

  const getPageUrl = () =>
    typeof window !== "undefined" ? window.location.href : "";

  const runValidation = (fields = form) =>
    validateContactPayload(
      { ...fields, source, pageUrl: getPageUrl() },
      { requireCountry: showCountry }
    );

  const validateField = (fieldName, value) => {
    const nextForm = { ...form, [fieldName]: value };
    const result = runValidation(nextForm);
    setErrors((prev) => {
      const next = { ...prev };
      const fieldError = result.errors?.[fieldName];
      if (fieldError) {
        next[fieldName] = fieldError;
      } else {
        delete next[fieldName];
      }
      return next;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    const result = runValidation(form);
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
      ...(showCountry ? { country: true } : {}),
    });

    if (!result.valid) {
      setErrors(result.errors || {});
      return;
    }

    if (TURNSTILE_SITE_KEY && !captchaToken) {
      setErrors((prev) => ({
        ...prev,
        captcha: "Please complete the captcha verification.",
      }));
      setTouched((prev) => ({ ...prev, captcha: true }));
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          phone: result.data.phone,
          email: result.data.email,
          message: result.data.message,
          country: showCountry ? result.data.country : undefined,
          form_type: source,
          source_page: getPageUrl(),
          captchaToken: captchaToken || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors && typeof data.errors === "object") {
          setErrors(data.errors);
        }
        throw new Error(data.message || data.error || "Failed to send message.");
      }

      setForm({ ...INITIAL_FORM, country: COUNTRY_OPTIONS[0] });
      setTouched({});
      setCaptchaToken("");
      turnstileRef.current?.reset();
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
    } catch (err) {
      setCaptchaToken("");
      turnstileRef.current?.reset();
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldErrorClass = (field) =>
    errors[field] && touched[field] ? "ring-2 ring-red-500" : "";

  const buttonClass =
    variant === "location"
      ? "bg-black hover:bg-gray-800 text-white font-semibold py-3.5 px-8 text-xs tracking-widest transition-colors duration-300 rounded-[2px] disabled:opacity-60"
      : variant === "contact-page"
        ? "bg-[#c7010c] hover:bg-[#a00008] text-white font-semibold py-3.5 px-8 text-sm transition-colors duration-300 mt-2 inline-block disabled:opacity-60"
        : "bg-[#c7010c] hover:bg-[#a00008] text-white font-semibold py-3 px-8 text-sm transition-colors duration-300 mt-2 disabled:opacity-60";

  const gridGap = variant === "contact-page" ? "gap-5" : "gap-4";
  const formSpacing = variant === "contact-page" ? "space-y-5" : "space-y-4";

  return (
    <form className={formSpacing} onSubmit={handleSubmit} noValidate>
      <div className={`grid grid-cols-1 ${variant === "contact-page" ? "sm:grid-cols-2" : "md:grid-cols-2"} ${gridGap}`}>
        <Field
          error={touched.name ? errors.name : undefined}
          hint={`${LIMITS.nameMin}–${LIMITS.nameMax} characters`}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name *"
            className={`${inputBase} ${fieldErrorClass("name")}`}
            maxLength={LIMITS.nameMax}
            autoComplete="name"
            disabled={submitting}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field
          error={touched.phone ? errors.phone : undefined}
          hint={`At least ${LIMITS.phoneMinDigits} digits`}
        >
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone *"
            className={`${inputBase} ${fieldErrorClass("phone")}`}
            maxLength={LIMITS.phoneMaxLength}
            autoComplete="tel"
            disabled={submitting}
            aria-invalid={Boolean(touched.phone && errors.phone)}
          />
        </Field>
      </div>

      {showCountry ? (
        <div className={`grid grid-cols-1 ${variant === "contact-page" ? "sm:grid-cols-2" : "md:grid-cols-2"} ${gridGap}`}>
          <Field error={touched.email ? errors.email : undefined}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E-mail *"
              className={`${inputBase} ${fieldErrorClass("email")}`}
              maxLength={LIMITS.emailMax}
              autoComplete="email"
              disabled={submitting}
              aria-invalid={Boolean(touched.email && errors.email)}
            />
          </Field>
          <Field error={touched.country ? errors.country : undefined}>
            <CountrySelect
              value={form.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${fieldErrorClass("country")}`}
              disabled={submitting}
              variant={variant}
            />
          </Field>
        </div>
      ) : (
        <Field error={touched.email ? errors.email : undefined}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="E-mail *"
            className={`${inputBase} ${fieldErrorClass("email")}`}
            maxLength={LIMITS.emailMax}
            autoComplete="email"
            disabled={submitting}
            aria-invalid={Boolean(touched.email && errors.email)}
          />
        </Field>
      )}

      <Field
        error={touched.message ? errors.message : undefined}
        hint={`${LIMITS.messageMin}–${LIMITS.messageMax} characters`}
      >
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type a message *"
          rows={variant === "location" ? 5 : variant === "contact-page" ? 5 : 4}
          className={`${inputBase} resize-none ${fieldErrorClass("message")}`}
          maxLength={LIMITS.messageMax}
          disabled={submitting}
          aria-invalid={Boolean(touched.message && errors.message)}
        />
        <p className="text-xs text-gray-400 mt-1 text-right">
          {form.message.length}/{LIMITS.messageMax}
        </p>
      </Field>

      <Field error={touched.captcha ? errors.captcha : undefined}>
        <div
          className={
            variant === "contact-page"
              ? "w-full sm:w-2/3"
              : variant === "location"
                ? "mt-2"
                : ""
          }
        >
          <TurnstileCaptcha
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            theme="light"
            onVerify={handleCaptchaVerify}
            onExpire={handleCaptchaExpire}
            onError={handleCaptchaError}
          />
        </div>
      </Field>

      {status.message && (
        <p
          role="alert"
          className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {status.message}
        </p>
      )}

      <div className={variant === "location" ? "pt-3" : ""}>
        <button
          type="submit"
          className={buttonClass}
          disabled={submitting || (TURNSTILE_SITE_KEY && !captchaToken)}
        >
          {submitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </div>
    </form>
  );
}

function Field({ children, error, hint }) {
  return (
    <div>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
      {!error && hint && (
        <p className="text-gray-500 text-xs mt-1">{hint}</p>
      )}
    </div>
  );
}

function CountrySelect({ value, onChange, onBlur, className, disabled, variant }) {
  return (
    <div className="relative">
      <select
        name="country"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${className} ${variant === "faq" ? "text-gray-600 appearance-none" : "text-gray-500 appearance-none cursor-pointer"}`}
        disabled={disabled}
      >
        {COUNTRY_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
        <FaChevronDown className="text-xs" />
      </div>
    </div>
  );
}
