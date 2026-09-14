import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer>
      <p>{profile.name}</p>
      <p>{profile.title}<br />{profile.location}</p>
      <p>© {new Date().getFullYear()}<br />Built with intent.</p>
      <Link href="#top">Back to top <ArrowUp /></Link>
    </footer>
  );
}
