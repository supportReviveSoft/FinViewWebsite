import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustSection from "@/components/TrustSection";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://finview-web.vercel.app/#software",
      "name": "FinView",
      "alternateName": ["FinView Financial Planner", "FinView Desktop App"],
      "description":
        "Free offline desktop app for personal financial planning. Project salary growth, model 401k/IRA/taxable investment accounts, plan retirement and FIRE, track net worth, calculate pensions, and get AI-powered financial advice — 100% private, no account required, no subscription.",
      "url": "https://finview-web.vercel.app",
      "applicationCategory": "FinanceApplication",
      "applicationSubCategory": "Personal Finance",
      "operatingSystem": ["macOS", "Windows", "Linux"],
      "softwareVersion": "1.1.34",
      "downloadUrl": "https://finview-web.vercel.app/#download",
      "installUrl": "https://finview-web.vercel.app/#download",
      "softwareRequirements": "macOS 11+, Windows 10/11, Linux ARM64",
      "isAccessibleForFree": true,
      "price": "0",
      "priceCurrency": "USD",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://finview-web.vercel.app/#download",
      },
      "featureList": [
        "Salary projection with Monte Carlo simulation",
        "Investment growth modeling — 401k, IRA, taxable accounts",
        "Retirement planning and FIRE planning",
        "Net worth tracking and projection",
        "Asset appreciation tracking",
        "Pension calculator — lump sum vs annuity",
        "Debt payoff and mortgage amortization",
        "AI financial advisor built-in",
        "100% offline — no internet required",
        "No account or login required",
        "No data sharing or cloud sync",
        "5 user profiles",
        "Available on Mac, Windows, and Linux",
      ],
      "screenshot": [
        {
          "@type": "ImageObject",
          "url": "https://finview-web.vercel.app/finview_financial_summary.png",
          "caption": "FinView Financial Summary Dashboard showing net worth projections",
          "width": 1200,
          "height": 550,
        },
        {
          "@type": "ImageObject",
          "url": "https://finview-web.vercel.app/finview_projections_breakdown.png",
          "caption": "FinView Detailed Projections Breakdown with salary, assets and investments",
          "width": 700,
          "height": 220,
        },
        {
          "@type": "ImageObject",
          "url": "https://finview-web.vercel.app/finview_post_retirement.png",
          "caption": "FinView Post-Retirement Investment Growth Chart",
          "width": 900,
          "height": 340,
        },
      ],
      "publisher": {
        "@type": "Organization",
        "@id": "https://finview-web.vercel.app/#organization",
      },
      "author": {
        "@type": "Organization",
        "@id": "https://finview-web.vercel.app/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://finview-web.vercel.app/#website",
      "url": "https://finview-web.vercel.app",
      "name": "FinView by ReviveSoft",
      "description":
        "Free offline financial planning desktop app for Mac, Windows, and Linux. No account, no subscription.",
      "publisher": {
        "@id": "https://finview-web.vercel.app/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://finview-web.vercel.app/#organization",
      "name": "ReviveSoft",
      "url": "https://www.revivesoft.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finview-web.vercel.app/finview_logo_blue.svg",
        "width": 140,
        "height": 42,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Footer />
    </main>
  );
}
