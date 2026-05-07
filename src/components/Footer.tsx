import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { contactInfo, navLinks } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#151515,#0a0a0a)] text-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffffff,#d3d3d3)] text-lg font-black text-primary-foreground">
              K
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">
                Kamal Makhana
              </p>
              <p className="text-sm text-muted-foreground">
                Crunch Without Guilt
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Plain makhana, clear ordering, and a simple local buying experience
            for families and everyday snackers.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Quick Links
          </p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg py-1 text-sm text-muted-foreground transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactInfo.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {contactInfo.location}
            </p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Fresh, plain, and reliable
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container text-sm text-muted-foreground">
          Copyright 2026 Kamal Makhana. Placeholder website for frontend demo.
        </div>
      </div>
    </footer>
  );
}
