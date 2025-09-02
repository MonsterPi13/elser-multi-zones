import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";

import seoConfig from "@/constants/seo-config";
import { cn } from "@/lib/utils";
import "../styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.url),
  title: {
    default: seoConfig.name,
    template: `%s | ${seoConfig.name}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords.split(", "),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "antialiased")}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
