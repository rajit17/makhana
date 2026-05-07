import { Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";

const items = [
  { label: "Interactive 3D product feel", icon: Sparkles },
  { label: "Plain healthy crunch", icon: Leaf },
  { label: "Local order ready", icon: Truck },
  { label: "Trust-first presentation", icon: ShieldCheck },
];

export function ExperienceRibbon() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(90deg,#0a0a0a,#181818,#0a0a0a)] text-foreground">
      <div className="container flex min-h-20 snap-x gap-3 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex min-w-[250px] snap-center items-center justify-center gap-3 rounded-xl border border-primary/18 bg-white/[0.045] px-5 py-4 text-sm font-semibold shadow-sm backdrop-blur sm:min-w-0 sm:flex-1"
            >
              <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
