import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://finview-web.vercel.app"),

  title: {
    default: "FinView — Free Offline Financial Planning App",
    template: "%s | FinView",
  },

  description:
    "Project salary, investments, retirement & net worth — completely offline. No account, no subscription, no data sharing. Free for Mac, Windows & Linux.",

  keywords: [
    "free retirement calculator",
    "offline financial planning app",
    "personal finance software no subscription",
    "salary projection calculator",
    "401k calculator",
    "FIRE calculator",
    "net worth tracker",
    "retirement planner desktop",
    "investment growth calculator",
    "AI financial advisor free",
    "mint alternative",
    "free financial planning software",
    "desktop finance app mac windows linux",
    "pension calculator lump sum annuity",
    "financial independence calculator",
    "FIRE number calculator",
    "safe withdrawal rate calculator",
    "privacy-focused personal finance",
    "no account finance app",
    "Monte Carlo retirement simulation",
  ],

  authors: [{ name: "ReviveSoft", url: "https://www.revivesoft.net" }],

  alternates: {
    canonical: "https://finview-web.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "FinView — Free Offline Financial Planning App",
    description:
      "Project salary, investments, retirement & net worth — completely offline. No account, no subscription, no data sharing. Free for Mac, Windows & Linux.",
    url: "https://finview-web.vercel.app",
    siteName: "FinView",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinView — Free Offline Financial Planning Desktop App for Mac, Windows & Linux",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FinView — Free Offline Financial Planning App",
    description:
      "Salary projections, 401k/IRA modeling, retirement planning & AI advisor — offline, no account, free forever. Mac, Windows & Linux.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
