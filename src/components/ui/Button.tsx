import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold " +
  "transition-[transform,background-color,border-color,box-shadow,opacity] duration-200 ease-[var(--ease-out-soft)] " +
  "hover:-translate-y-px active:translate-y-0 active:scale-[0.98] " +
  "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  // Dark ink on emerald: 7.8:1 contrast. White on emerald would only reach 2.5:1.
  primary: "bg-accent text-base hover:bg-accent-strong shadow-glow",
  secondary:
    "border border-line bg-transparent text-ink hover:border-line-strong hover:bg-elevated",
  ghost: "text-ink-muted hover:text-ink underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

interface LinkProps extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  children,
  ...props
}: LinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
