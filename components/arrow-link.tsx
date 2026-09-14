import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({ href, children, external = false, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  const classes = `arrow-link ${className}`;
  if (external) return <a className={classes} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a>;
  return <Link className={classes} href={href}>{children}{href.startsWith("#") || href.startsWith("/#") ? <ArrowDownRight aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}</Link>;
}
