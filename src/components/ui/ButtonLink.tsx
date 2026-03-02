import Link from "next/link";
import { type ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hopspot-accent focus-visible:ring-offset-2 focus-visible:ring-offset-hopspot-bg";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-hopspot-gold text-black hover:brightness-110"
      : variant === "secondary"
        ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
        : "text-white/80 hover:text-white";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a className={`${base} ${styles} ${className}`} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles} ${className}`} href={href}>
      {children}
    </Link>
  );
}

