import { DownloadButtons } from "@/components/download-buttons";
import { PhoneFrame } from "@/components/phone-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appConfig } from "@/lib/app-config";

const features = [
  {
    title: "Track your no contact streak",
    copy: "See how long you’ve kept your boundary and build momentum one day at a time.",
  },
  {
    title: "Set rules that protect your peace",
    copy: "Choose boundaries like no texting, no calling, no social checking, and no looking back through old messages.",
  },
  {
    title: "Check in before you reach out",
    copy: "Use simple reminders and reflection prompts to pause when the urge to contact them gets loud.",
  },
];

const steps = [
  {
    title: "Start your pledge",
    copy: "Choose your no contact goal and the rules you want to follow.",
  },
  {
    title: "Check in daily",
    copy: "Build your streak with small, consistent check-ins.",
  },
  {
    title: "Restart without shame",
    copy: "If you slip, reset and keep moving forward with more awareness.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy fade-up">
              <h1>{appConfig.tagline}</h1>
              <p>{appConfig.description}</p>
              <DownloadButtons />
              <div className="hero-note" aria-hidden="true">
                <span className="hero-note-line" />
                <span>Built for boundaries, reflection, and small daily wins.</span>
              </div>
            </div>
            <div className="fade-up-delay">
              <PhoneFrame />
            </div>
          </div>
        </section>

        <section className="section section-soft" id="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-heading">
                A calmer way to stay consistent.
              </h2>
              <p className="section-copy">
                No Contact keeps the essentials close: your streak, your
                boundaries, your reminders, and a small pause before the hard
                moments turn into a message.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-mark" aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-heading">How it works</h2>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container privacy-band">
            <div>
              <h2 className="section-heading">Private by design.</h2>
              <p className="section-copy">
                No Contact is built as a simple self-guided tracker. Your
                streak, rules, and reflections should feel personal, calm, and
                easy to manage.
              </p>
            </div>
            <div className="privacy-accent" aria-hidden="true">
              <div className="privacy-symbol" />
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2 className="section-heading">Create space before you reach out.</h2>
            <p className="section-copy">
              Start your no contact streak and give yourself a system for the
              hard moments.
            </p>
            <DownloadButtons />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
