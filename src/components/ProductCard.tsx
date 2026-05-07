import Image from "next/image";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { cn, formatCurrency } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="premium-ring depth-surface group overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(255,255,255,0.15)]">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[380px] overflow-hidden bg-black lg:min-h-[560px]">
          <Image
            src="/images/cinematic-makhana-hero.png"
            alt="Premium bowl of plain makhana"
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover object-[66%_50%] transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/48 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_32px_rgba(255,255,255,0.15)] backdrop-blur-xl">
            Signature Plain Pack
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
            <p className="text-sm font-semibold text-muted-foreground">
              Cinematic showcase visual
            </p>
            <p className="mt-1 text-2xl font-black text-foreground">
              Real snack appeal, simple product promise.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <CardHeader className="relative">
            <p className="section-eyebrow">Product Showcase</p>
            <CardTitle className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
              {product.name}
            </CardTitle>
            <CardDescription className="text-base">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Pack size
                </p>
                <p className="mt-1 text-xl font-black text-foreground">
                  {product.size}
                </p>
              </div>
              <div className="rounded-xl border border-primary/25 bg-primary/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Price
                </p>
                <p className="mt-1 text-xl font-black text-primary">
                  {formatCurrency(product.price)}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/24 p-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground"
                aria-label="Quantity preview decrease"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>
              <div className="flex-1 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Quantity
                </p>
                <p className="text-lg font-black text-foreground">1 Pack</p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary"
                aria-label="Quantity preview increase"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm font-medium text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-muted-foreground">
              {product.packNote}
            </p>
          </CardContent>
          <CardFooter className="relative">
            <a href="#order" className={cn(buttonVariants(), "w-full sm:w-auto")}>
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              Order Now
            </a>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
