"use client";

import { Minus, Plus, Send, ShoppingBag } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { product } from "@/lib/mock-data";
import type { OrderPayload } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { submitOrder } from "@/services/orders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "./SectionReveal";

type OrderFormState = {
  customerName: string;
  phone: string;
  address: string;
  quantity: number;
  notes: string;
};

const initialFormState: OrderFormState = {
  customerName: "",
  phone: "",
  address: "",
  quantity: 1,
  notes: "",
};

export function OrderForm() {
  const [form, setForm] = useState<OrderFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const total = useMemo(
    () => product.price * Math.max(1, form.quantity),
    [form.quantity],
  );

  const updateField = <Field extends keyof OrderFormState>(
    field: Field,
    value: OrderFormState[Field],
  ) => {
    setReferenceId(null);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateQuantity = (nextQuantity: number) => {
    updateField("quantity", Math.min(99, Math.max(1, nextQuantity)));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload: OrderPayload = {
      productId: product.id,
      productName: product.name,
      customerName: form.customerName.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      quantity: form.quantity,
      notes: form.notes.trim() || undefined,
      estimatedTotal: total,
    };

    try {
      const response = await submitOrder(payload);
      setReferenceId(response.referenceId);
      setForm(initialFormState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="order"
      className="section-shell relative overflow-hidden"
      aria-labelledby="order-heading"
    >
      <SectionReveal className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Order</p>
        <h2
          id="order-heading"
            className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
        >
          Place a simple frontend order.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          This form is ready for a future API connection. For now, it creates a
          clean mock order and shows a reference number.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <ShoppingBag className="h-6 w-6" aria-hidden="true" />
                </span>
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="customerName"
                  >
                    Customer name
                  </label>
                  <Input
                    id="customerName"
                    name="customerName"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.customerName}
                    onChange={(event) =>
                      updateField("customerName", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <Input
                    id="phone"
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
                    htmlFor="address"
                  >
                    Delivery address
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    placeholder="House number, street, nearby landmark"
                    value={form.address}
                    onChange={(event) =>
                      updateField("address", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(form.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      max={99}
                      className="max-w-28 text-center text-base font-semibold"
                      value={form.quantity}
                      onChange={(event) =>
                        updateQuantity(Number(event.target.value) || 1)
                      }
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(form.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label
                    className="text-sm font-semibold text-foreground"
                    htmlFor="notes"
                  >
                    Notes
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Optional delivery notes"
                    value={form.notes}
                    onChange={(event) =>
                      updateField("notes", event.target.value)
                    }
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  {isSubmitting ? "Placing Order..." : "Place Order"}
                </Button>
              </form>

              {referenceId ? (
                <div
                  className="mt-5 rounded-lg border border-primary/25 bg-primary/10 p-4 text-sm leading-6 text-primary"
                  role="status"
                >
                  Order received in mock mode. Reference:{" "}
                  <strong>{referenceId}</strong>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <aside className="lg:sticky lg:top-24">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Selected product
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {product.name}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.size}
                  </p>
                </div>

                <div className="grid gap-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Unit price</span>
                    <span className="font-semibold">
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Quantity</span>
                    <span className="font-semibold">{form.quantity}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-foreground">
                        Estimated total
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm leading-6 text-muted-foreground">
                  Payment and delivery confirmation can be added when the
                  backend or WhatsApp order process is finalized.
                </p>
              </CardContent>
            </Card>
          </aside>
        </SectionReveal>
      </div>
    </section>
  );
}
