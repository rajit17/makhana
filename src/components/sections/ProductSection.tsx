import { product } from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { SectionReveal } from "./SectionReveal";

export function ProductSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(19,13,9,0.88),rgba(7,5,4,0.98))]"
      aria-labelledby="product-heading"
    >
      <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionReveal className="max-w-2xl">
          <p className="section-eyebrow">Product</p>
          <h2
            id="product-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
          >
            One plain makhana product, presented clearly.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The first version keeps the product range focused and intentional,
            while leaving room for future sizes and flavors.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10">
          <ProductCard product={product} />
        </SectionReveal>
      </div>
    </section>
  );
}
