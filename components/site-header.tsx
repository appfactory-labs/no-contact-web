import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <img className="brand-icon" src={appConfig.iconPath} alt="" />
          <span>{appConfig.appName}</span>
        </Link>
        <div className="nav-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </div>
      </nav>
    </header>
  );
}
