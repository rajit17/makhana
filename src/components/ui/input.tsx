import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "focus-ring flex min-h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground shadow-sm transition placeholder:text-muted-foreground hover:border-primary/25",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export { Input };
