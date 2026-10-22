// Shared by the lead server action and the LeadForm client component.
// ("use server" files may only export async functions.)

export type LeadField = "name" | "phone" | "suburb";

export type LeadState =
  | { status: "idle" }
  | {
      status: "error";
      errors: Partial<Record<LeadField, string>>;
      values: Record<LeadField, string>;
    }
  | { status: "success"; name: string; phone: string };

// Name of the hidden honeypot input. People never see it; bots fill it in.
export const HONEYPOT_FIELD = "company_website";

// A service card's "Get a price" tells the form which service it's about.
// The form stays at 3 visible fields; the service travels as a hidden value.
export const SERVICE_EVENT = "harbourline:select-service";

export function selectService(service: string) {
  window.dispatchEvent(new CustomEvent<string>(SERVICE_EVENT, { detail: service }));
}
