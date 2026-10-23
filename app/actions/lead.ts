"use server";

// Lead form handler. This is a public endpoint, so every field is checked here
// even though the form also guides people in the browser.

import { Resend } from "resend";
import { HONEYPOT_FIELD, type LeadField, type LeadState } from "@/lib/lead";
import { site } from "@/lib/site";

// Resend's shared test sender. It can only deliver to the email address on
// the Resend account. [CONFIRM] Switch to an address on a verified domain.
const FROM = `${site.name} website <onboarding@resend.dev>`;

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

// Emails the lead to Dan. Returns false if the send fails, so the form can
// show the phone number instead.
async function emailLead(lead: Record<LeadField, string> & { service: string | null }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  // Demo mode: with no email settings, nothing is sent and the form shows the
  // normal success state. Set both variables to start sending.
  if (!apiKey || !to) {
    console.info("[lead] Email not configured, skipping send (demo mode)");
    return true;
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to,
      // Collapse whitespace so a crafted suburb can't add lines to the subject.
      subject: `New price request: ${lead.suburb.replace(/\s+/g, " ")}`,
      text: [
        `Name: ${lead.name}`,
        `Phone: ${lead.phone}`,
        `Suburb: ${lead.suburb}`,
        `Service: ${lead.service ?? "Not selected"}`,
      ].join("\n"),
    });
    if (error) {
      console.error("[lead] Resend rejected the email", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead] Resend request failed", err);
    return false;
  }
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

  if (!(await emailLead({ ...values, service }))) {
    return { status: "failed", values };
  }

  return { status: "success", name: values.name, phone: values.phone };
}
