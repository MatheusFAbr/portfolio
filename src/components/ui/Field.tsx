import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/utils/cn";

const control =
  "w-full rounded-[10px] border bg-elevated px-4 py-3 text-base text-ink " +
  "placeholder:text-ink-faint transition-colors duration-200 " +
  "focus:outline-none focus-visible:outline-none";

const tone = (hasError: boolean) =>
  hasError
    ? "border-danger focus:border-danger focus:ring-2 focus:ring-danger/30"
    : "border-line focus:border-accent focus:ring-2 focus:ring-accent/30";

interface FieldShellProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}

export function FieldShell({
  id,
  label,
  error,
  optional,
  children,
}: FieldShellProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional && (
          <span className="ml-2 font-normal text-ink-muted">(opcional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };

export function Input({ hasError = false, className, ...props }: InputProps) {
  return <input className={cn(control, tone(hasError), className)} {...props} />;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export function Textarea({ hasError = false, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(control, tone(hasError), "resize-y min-h-32", className)}
      {...props}
    />
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export function Select({ hasError = false, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(control, tone(hasError), "appearance-none pr-10", className)}
      {...props}
    />
  );
}
