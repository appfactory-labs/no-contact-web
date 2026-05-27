import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appConfig } from "@/lib/app-config";
import { SupportForm } from "./support-form";

export const metadata: Metadata = {
  title: "Support",
  description: `Support for ${appConfig.fullAppName}.`,
};

export default function SupportPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="container support-main">
        <div className="support-layout">
          <section className="support-hero fade-up">
            <p className="effective-date">Support</p>
            <h1 className="legal-title">We’re here to help.</h1>
            <p className="legal-intro">
              Send a note about your account, app experience, reminders, billing
              questions, or anything that is not working as expected.
            </p>
            <ul className="support-points">
              <li>Include your platform so we can route the request clearly.</li>
              <li>Share enough detail to help us understand what happened.</li>
              <li>We use support submissions only to respond to your request.</li>
            </ul>
          </section>
          <section className="support-panel fade-up-delay" aria-label="Support form">
            <SupportForm />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
