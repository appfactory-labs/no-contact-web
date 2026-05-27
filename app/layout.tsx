import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { appConfig } from "@/lib/app-config";

export const metadata: Metadata = {
  title: {
    default: appConfig.fullAppName,
    template: `%s | ${appConfig.appName}`,
  },
  description: appConfig.description,
  icons: {
    icon: appConfig.iconPath,
    apple: appConfig.iconPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
