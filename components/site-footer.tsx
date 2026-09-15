import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="footer-identity"><strong>{profile.name}</strong><span>{profile.title}</span></p>
      <p>{profile.location}</p>
      <p>© {currentYear}</p>
      <Link href="#top">Back to top <ArrowUp aria-hidden="true" /></Link>
    </footer>
  );
}
