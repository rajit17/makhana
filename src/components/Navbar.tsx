"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300",
        scrolled
          ? "border-primary/20 bg-black/76 shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
          : "border-white/10 bg-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.28)]",
      )}
    >
      <nav
        className="container flex min-h-16 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="focus-ring flex min-h-11 items-center gap-3 rounded-full pr-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffffff,#d3d3d3)] text-base font-black text-primary-foreground shadow-[0_0_34px_rgba(255,255,255,0.2)]">
            K
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-none text-foreground">
              Kamal Makhana
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Crunch Without Guilt
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="tel:+919876543210"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-muted-foreground transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a
            href="#order"
            className={cn(buttonVariants({ size: "sm" }), "min-h-11")}
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Order
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-foreground shadow-sm backdrop-blur-xl lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 pb-4 pt-2 shadow-soft backdrop-blur-2xl lg:hidden">
          <div className="container grid gap-2 px-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg px-4 py-3 text-base font-semibold text-foreground transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full")}
              onClick={() => setOpen(false)}
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              Order Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
