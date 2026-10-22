"use server";

// Lead form handler. This is a public endpoint, so every field is checked here
// even though the form also guides people in the browser.

import { HONEYPOT_FIELD, type LeadField, type LeadState } from "@/lib/lead";
import { site } from "@/lib/site";

const MAX = { name: 80, phone: 20, suburb: 60 };

function read(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Accepts Australian mobiles and landlines: 04xx xxx xxx, 02 xxxx xxxx,
// +61 4xx xxx xxx, with spaces, dashes or brackets.
function isAustralianPhone(raw: string) {
  const digits = raw.replace(/[\s\-().]/g, "");
  const local = digits.startsWith("+61") ? `0${digits.slice(3)}` : digits;
  return /^0[23478]\d{8}$/.test(local);
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const values = {
    name: read(formData, "name", MAX.name),
    phone: read(formData, "phone", MAX.phone),
    suburb: read(formData, "suburb", MAX.suburb),
  };

  // Bot filled the honeypot: pretend it worked and drop the lead.
  if (read(formData, HONEYPOT_FIELD, 200)) {
    return { status: "success", name: values.name, phone: values.phone };
  }

  const errors: Partial<Record<LeadField, string>> = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!values.phone) errors.phone = "Please add a phone number so Dan can call you back.";
  else if (!isAustralianPhone(values.phone))
    errors.phone = "That number doesn't look right. Try a mobile like 0412 345 678.";
  if (values.suburb.length < 2) errors.suburb = "Which suburb is the job in?";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // Optional, from a service card. Only known services are kept.
  const rawService = read(formData, "service", 60);
  const service = site.services.find((s) => s === rawService) ?? null;

  // [CONFIRM] Where real leads go (email, SMS or CRM). The demo doesn't send
  // or store anything; it only echoes to the local dev server log.
  if (process.env.NODE_ENV === "development") {
    console.info("[demo lead]", { ...values, service });
  }

  return { status: "success", name: values.name, phone: values.phone };
}
