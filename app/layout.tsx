import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marcin Falkowski - React Native Developer",
    template: "%s | Next.js Portfolio Starter",
  },
  description:
    "Marcin Falkowski - experienced React Native Developer with web development background.",
  openGraph: {
    title: "Marcin Falkowski - React Native Developer",
    description:
      "Marcin Falkowski - experienced React Native Developer with web development background.",
    url: baseUrl,
    siteName: "Marcin Falkowski - React Native Developer",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-main",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-full">
        <div className="lg:bg-sub-main absolute top-0 right-0 bottom-0 w-[40%] h-full -z-1" />
        <main className="flex-auto min-w-0 mt-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
