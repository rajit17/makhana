import { brandPoints } from "@/lib/mock-data";
import { SectionReveal } from "./SectionReveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_34%),linear-gradient(180deg,rgba(15,15,15,1),rgba(25,25,25,0.96))]"
      aria-labelledby="about-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <p className="section-eyebrow">Brand Story</p>
          <h2
            id="about-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
          >
            A local makhana brand built on clarity.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Kamal Makhana is shaped for customers who want a cleaner snack
            without a complicated buying process. The brand starts with plain
            makhana because it is familiar, versatile, and easy for many homes
            to trust.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            The goal is simple: keep the product honest, the ordering friendly,
            and the presentation good enough for premium buyers while staying
            practical for everyday households.
          </p>
        </SectionReveal>

        <div className="grid gap-4">
          {brandPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <SectionReveal key={point.title} delay={index * 0.08}>
                <div className="cinematic-panel flex gap-4 rounded-xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
