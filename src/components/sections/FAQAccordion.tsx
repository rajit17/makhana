"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(20,13,9,0.94),rgba(7,5,4,0.98))]"
      aria-labelledby="faq-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionReveal>
          <p className="section-eyebrow">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
          >
            Quick answers before customers order.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            These answers are kept in mock data and can be edited as product,
            delivery, and pricing details become final.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-card/80 shadow-soft backdrop-blur-xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-panel-${index}`;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-foreground transition hover:bg-white/[0.06]"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={contentId}
                    className={cn(
                      "grid transition-all duration-200",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
