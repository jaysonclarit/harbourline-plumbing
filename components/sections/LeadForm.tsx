"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitLead } from "@/app/actions/lead";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Section } from "@/components/ui/Section";
import { leadForm } from "@/lib/content";
import { HONEYPOT_FIELD, SERVICE_EVENT, type LeadField, type LeadState } from "@/lib/lead";
import { anchors } from "@/lib/nav";

const initialState: LeadState = { status: "idle" };
const fieldOrder: LeadField[] = ["name", "phone", "suburb"];

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [service, setService] = useState<string | null>(null);

  // Set by a service card's "Get a price" button.
  useEffect(() => {
    const onSelect = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener(SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SERVICE_EVENT, onSelect);
  }, []);

  // Move focus to what changed: the thank-you, or the first field to fix.
  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error") {
      formRef.current?.querySelector<HTMLInputElement>('[aria-invalid="true"]')?.focus();
    }
  }, [state]);

  return (
    <Section id={anchors.quote} tone="warm" aria-labelledby="get-price-title">
      {/* Split card: what happens next on the dark side, the form on the white. */}
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-image bg-white shadow-soft lg:grid-cols-[5fr_7fr]">
        <div className="bg-ink-900 p-6 text-sand-50 sm:p-10 [&_:focus-visible]:outline-sand-50">
          <h2 id="get-price-title" className="text-h2">
            {leadForm.title}
          </h2>
          <p className="mt-3 text-body-lg text-sand-300">{leadForm.note}</p>
          <ul className="mt-8 space-y-4">
            {leadForm.points.map((point) => (
              <li key={point.text} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sand-50/10 text-copper-400">
                  <Icon name={point.icon} className="size-5" />
                </span>
                {point.text}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex flex-wrap items-center gap-x-2 border-t border-sand-50/15 pt-6 text-sand-300">
            Rather talk?
            <PhoneLink appearance="text" label="Call Dan" className="text-sand-50" />
          </p>
        </div>

        <div className="p-6 sm:p-10">
          {state.status === "success" ? (
            <div className="flex gap-4">
              <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-success text-white">
                <Icon name="check" className="size-6" />
              </span>
              <div>
                <h3 ref={successRef} tabIndex={-1} className="text-h3 focus:outline-none">
                  Thanks, {state.name}.
                </h3>
                <p className="mt-2 text-body-lg">
                  Dan will call you on{" "}
                  <strong className="whitespace-nowrap font-semibold">{state.phone}</strong>{" "}
                  shortly.
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-2 text-ink-600">
                  Urgent? Call
                  <PhoneLink appearance="text" className="text-ink-900" />
                </p>
              </div>
            </div>
          ) : (
            <>
              <form ref={formRef} action={formAction} noValidate>
                {service && (
                  <p className="mb-5 inline-flex items-center gap-1 rounded-full bg-sand-100 py-1 pl-4 pr-1 text-small">
                    <span>
                      About: <strong className="font-semibold">{service}</strong>
                    </span>
                    <input type="hidden" name="service" value={service} />
                    <button
                      type="button"
                      onClick={() => setService(null)}
                      aria-label={`Remove ${service.toLowerCase()} from your request`}
                      className="flex size-9 items-center justify-center rounded-full text-ink-600 hover:bg-sand-300 hover:text-ink-900"
                    >
                      <Icon name="close" className="size-4" />
                    </button>
                  </p>
                )}
                <div className="grid gap-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:gap-5">
                  {fieldOrder.map((field) => {
                    const config = leadForm.fields[field];
                    const error = state.status === "error" ? state.errors[field] : undefined;
                    const value = state.status === "error" ? state.values[field] : "";
                    const id = `lead-${field}`;
                    return (
                      <div key={field}>
                        <label htmlFor={id} className="block font-semibold">
                          {config.label}
                        </label>
                        <input
                          id={id}
                          name={field}
                          type={field === "phone" ? "tel" : "text"}
                          inputMode={field === "phone" ? "tel" : undefined}
                          autoComplete={config.autoComplete}
                          defaultValue={value}
                          required
                          aria-invalid={error ? true : undefined}
                          aria-describedby={error ? `${id}-error` : undefined}
                          className="mt-1.5 block min-h-13 w-full rounded-control border border-ink-600 bg-white px-4 text-body text-ink-900 transition-colors aria-invalid:border-2 aria-invalid:border-error"
                        />
                        {error && (
                          <p id={`${id}-error`} className="mt-1.5 text-small text-error">
                            {error}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Honeypot: off-screen and hidden from assistive tech. */}
                <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
                  <label>
                    Company website
                    <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  icon="arrow-right"
                  disabled={pending}
                  className="mt-8 w-full"
                >
                  {pending ? leadForm.pendingButton : leadForm.button}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
