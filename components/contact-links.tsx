import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { label: "Email", href: profile.email ? `mailto:${profile.email}` : null },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
];

export function ContactLinks() {
  return <div className="contact-links">{items.map((item) => item.href ? <a key={item.label} href={item.href} target={item.label === "Email" ? undefined : "_blank"} rel="noreferrer"><span>{item.label}</span><ArrowUpRight /></a> : <span className="contact-link-disabled" key={item.label} title={`Add ${item.label} in data/profile.ts`}><span>{item.label}</span><small>TODO</small></span>)}</div>;
}
