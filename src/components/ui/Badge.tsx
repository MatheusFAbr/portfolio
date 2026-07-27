import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent";
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-line bg-elevated text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
