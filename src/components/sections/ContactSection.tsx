"use client";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { contactInfo } from "@/lib/mock-data";
import type { EnquiryPayload } from "@/lib/types";
import { submitEnquiry } from "@/services/orders";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "./SectionReveal";

type EnquiryFormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: EnquiryFormState = {
  name: "",
  phone: "",
  message: "",
};

const contactCards = [
  {
    label: "Phone",
    value: contactInfo.phone,
    href: "tel:+919876543210",
    icon: Phone,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "Location",
    value: contactInfo.location,
    href: "#contact",
    icon: MapPin,
  },
];

export function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const updateField = <Field extends keyof EnquiryFormState>(
    field: Field,
    value: EnquiryFormState[Field],
  ) => {
    setReferenceId(null);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload: EnquiryPayload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    };

    try {
      const response = await submitEnquiry(payload);
      setReferenceId(response.referenceId);
      setForm(initialState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-shell"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          <p className="section-eyebrow">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
          >
            Order, ask, or confirm local availability.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Customers can use the form, call directly, or open WhatsApp. These
            details are placeholders and can be replaced with the final business
            contact information.
          </p>

          <div className="mt-8 grid gap-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="focus-ring cinematic-panel flex items-center gap-4 rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href="https://wa.me/919876543210?text=Hello%20Kamal%20Makhana%2C%20I%20want%20to%20order."
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/[0.12] px-6 py-3 text-base font-semibold text-primary shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Placeholder
          </a>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {contactInfo.serviceArea}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <Card>
            <CardHeader>
              <CardTitle>Enquiry Form</CardTitle>
              <CardDescription>
                A frontend-only contact form ready for a future API endpoint.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="enquiryName"
                  >
                    Name
                  </label>
                  <Input
                    id="enquiryName"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="enquiryPhone"
                  >
                    Phone
                  </label>
                  <Input
                    id="enquiryPhone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you need"
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>

              {referenceId ? (
                <div
                  className="mt-5 rounded-lg border border-primary/25 bg-primary/10 p-4 text-sm leading-6 text-primary"
                  role="status"
                >
                  Enquiry saved in mock mode. Reference:{" "}
                  <strong>{referenceId}</strong>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}
