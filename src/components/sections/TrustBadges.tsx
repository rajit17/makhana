import { trustBadges } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "./SectionReveal";

export function TrustBadges() {
  return (
    <section className="section-shell" aria-labelledby="trust-heading">
      <SectionReveal className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Why customers trust it</p>
        <h2
          id="trust-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
        >
          Simple, fresh, and easy to understand.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Kamal Makhana keeps the first product focused so customers can make a
          quick decision without confusion.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((badge, index) => {
          const Icon = badge.icon;

          return (
            <SectionReveal key={badge.title} delay={index * 0.06}>
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_22px_70px_rgba(255,255,255,0.1)]">
                <CardContent className="p-5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {badge.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {badge.description}
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
