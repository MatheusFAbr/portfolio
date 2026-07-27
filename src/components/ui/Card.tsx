import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 sm:p-8",
        "transition-[border-color,transform,box-shadow] duration-300 ease-[var(--ease-out-soft)]",
        interactive &&
          "hover:-translate-y-1 hover:border-line-strong hover:shadow-lg hover:shadow-black/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
