import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${appConfig.fullAppName}.`,
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By using No Contact, you agree to these terms. If you do not agree, do not use the app.",
    ],
  },
  {
    title: "App Purpose",
    body: [
      "No Contact is a self-guided breakup tracking app for no contact streaks, personal rules, reminders, daily check-ins, and reflection.",
    ],
  },
  {
    title: "Important Limits",
    body: [
      "No Contact is not therapy, not medical advice, not crisis support, and not emergency support. The app is a self-guided tracker and does not replace professional support or emergency services.",
    ],
  },
  {
    title: "User Responsibilities",
    body: [
      "You are responsible for how you use the app, the information you enter, and the choices you make based on your own situation.",
      "Use the app lawfully, respectfully, and only for your own personal tracking and reflection.",
    ],
  },
  {
    title: "Purchases and Subscriptions",
    body: [
      "If purchases or subscriptions are added, payments are handled by Apple or Google where applicable. Subscription terms, cancellation options, and renewal details will be provided through the relevant app store flow.",
    ],
  },
  {
    title: "Refunds",
    body: [
      "Where purchases are handled by Apple or Google, refunds are handled by Apple or Google according to their policies.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The app, website, design, text, branding, and related materials are owned by App Factory Labs or its licensors. You may not copy, modify, distribute, or use them except as allowed by these terms.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "The app and website are provided as available, without warranties of any kind. We do not promise uninterrupted access, error-free operation, or any particular personal outcome.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent allowed by law, App Factory Labs will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the app or website.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "We may update these terms as the app changes. Continued use of the app after changes means you accept the updated terms.",
    ],
  },
  {
    title: "Contact",
    body: ["Contact us through the support form only."],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms explain the rules for using No Contact and the website."
      sections={sections}
    />
  );
}
