import { audienceCards } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "./SectionReveal";

export function AudienceSection() {
  return (
    <section className="section-shell" aria-labelledby="audience-heading">
      <SectionReveal className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">For Every Local Buyer</p>
        <h2
          id="audience-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
        >
          A balanced snack brand for different homes.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Kamal Makhana should feel neat and dependable without becoming
          distant from regular customers.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {audienceCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <SectionReveal key={card.title} delay={index * 0.08}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
