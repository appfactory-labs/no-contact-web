import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appConfig } from "@/lib/app-config";

type LegalSection = {
  title: string;
  body?: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="container legal-main">
        <div className="legal-hero fade-up">
          <p className="effective-date">
            Effective date: {appConfig.legalEffectiveDate}
          </p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-intro">{intro}</p>
        </div>
        {sections.map((section) => (
          <section className="policy-section fade-up-delay" key={section.title}>
            <h2>{section.title}</h2>
            {section.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
