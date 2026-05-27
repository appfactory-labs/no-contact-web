import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{appConfig.appName}</p>
          <p className="footer-text">
            A breakup streak tracker for boundaries, check-ins, and space.
          </p>
        </div>
        <div>
          <div className="footer-links" aria-label="Footer navigation">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </div>
          <p className="copyright">
            © 2026 {appConfig.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
