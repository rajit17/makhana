import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#ffffff,#d3d3d3)] text-primary-foreground shadow-[0_18px_46px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,255,255,0.28)]",
        secondary:
          "border border-white/10 bg-white/[0.07] text-secondary-foreground backdrop-blur hover:-translate-y-0.5 hover:bg-white/[0.11]",
        outline:
          "border border-primary/35 bg-black/20 text-primary backdrop-blur hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10",
        ghost: "text-foreground hover:bg-primary/10",
        gold: "bg-gold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-gold/90",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        sm: "min-h-10 px-4 py-2 text-xs",
        lg: "min-h-12 px-6 py-3 text-base",
        icon: "h-11 w-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button };
