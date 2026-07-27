import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  /** Heading level, so sections never skip a step in the document outline. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <Tag
        className={cn(
          "text-3xl font-semibold leading-[1.15] tracking-tight text-ink",
          "sm:text-4xl lg:text-5xl",
          align === "center" ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed text-ink-muted sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
