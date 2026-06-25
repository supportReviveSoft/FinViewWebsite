# FinView — Marketing Website

The official marketing website for **FinView**, a free offline desktop app for personal financial planning. Built with Next.js and deployed on Vercel.

**Live site:** https://finview-web.vercel.app

## About FinView

FinView is a free, fully offline desktop app for Mac, Windows, and Linux. It offers:

- Salary projection with Monte Carlo simulation
- 401k / IRA / taxable investment account modeling
- Retirement and FIRE planning
- Net worth tracking and projection
- Pension calculator (lump sum vs annuity)
- Debt payoff and mortgage amortization
- Built-in AI financial advisor
- 100% private — no account, no cloud sync, no subscription

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Analytics:** Vercel Analytics (download click tracking)
- **Deployment:** Vercel

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
```

## Deployment

```bash
npx vercel --prod --yes
```

Downloads are served from Azure Blob Storage (`finviewstorage.blob.core.windows.net/releases`). The app fetches `latest-mac.yml` at runtime to determine the current version, with a hardcoded fallback in `components/Download.tsx`.

## Updating a New Version

1. Update the fallback version in `components/Download.tsx`
2. Update `softwareVersion` in `app/page.tsx`
3. Deploy: `npx vercel --prod --yes`

## Project Structure

```
app/
  layout.tsx       # Metadata, OG tags, analytics
  page.tsx         # JSON-LD structured data, page composition
components/
  Hero.tsx         # Nav + hero section + app screenshot
  Features.tsx     # Stats row + bento grid feature tiles
  Screenshots.tsx  # Tabbed app screenshot gallery
  TrustSection.tsx # Privacy/FIRE/Mint-alternative trust cards
  Download.tsx     # Platform download cards with version fetching
  Footer.tsx       # Footer with logo
public/
  sitemap.xml      # Image sitemap for SEO
  robots.txt
  og-image.png     # 1200×630 Open Graph image
```
