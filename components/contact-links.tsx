import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: profile.resume },
].filter((item): item is { label: string; href: string } => Boolean(item.href));

export function ContactLinks() {
  return (
    <nav className="contact-links" aria-label="External profiles and résumé">
      {items.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} (opens in a new tab)`}>
          <span>{item.label}</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
