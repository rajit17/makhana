import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "focus-ring flex min-h-28 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground shadow-sm transition placeholder:text-muted-foreground hover:border-primary/25",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";

export { Textarea };
