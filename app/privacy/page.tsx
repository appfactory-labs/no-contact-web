import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${appConfig.fullAppName}.`,
};

const sections = [
  {
    title: "What No Contact Is For",
    body: [
      "No Contact is a breakup tracker and no contact tracker that helps you track a streak, set personal rules, use reminders, and reflect on daily check-ins.",
    ],
  },
  {
    title: "Information You May Enter",
    body: [
      "You may choose to enter app data such as a name or nickname, a no contact goal, personal rules, check-ins, reminder preferences, and reflection content.",
      "Some app data may be stored on your device to provide core features.",
    ],
  },
  {
    title: "Support Requests",
    body: [
      "If you submit the support form, we use the information you provide only to review and respond to your support request.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "If notifications are used, they are used for reminders selected by the user. You can manage notification permissions through your device settings.",
    ],
  },
  {
    title: "Purchases",
    body: [
      "If purchases or subscriptions are added, billing is handled by Apple or Google. We do not receive your full payment card details from those app stores.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "Personal data is not sold. We may share information only when needed to operate support, comply with legal obligations, or protect the app and its users.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can choose what you enter into the app, update your reminders, and use device settings to manage notifications. You can contact us through the support form for privacy questions.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy as the app changes. The effective date will be updated when the policy is revised.",
    ],
  },
  {
    title: "Contact",
    body: ["Contact us through the support form only."],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how No Contact handles information for its self-guided breakup tracking, streak, rules, reminders, and reflection features."
      sections={sections}
    />
  );
}
