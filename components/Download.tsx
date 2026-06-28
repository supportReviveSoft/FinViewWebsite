"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

const BASE_URL = "https://finviewstorage.blob.core.windows.net/releases";

async function fetchLatestVersion(): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/latest-mac.yml`, { cache: "no-store" });
    const text = await res.text();
    const match = text.match(/^version:\s*(.+)$/m);
    return match ? match[1].trim() : "1.1.34";
  } catch {
    return "1.1.34";
  }
}

function buildUrls(version: string) {
  return {
    "mac-arm":   `${BASE_URL}/finView-${version}-arm64.dmg`,
    "mac-intel": `${BASE_URL}/finView-${version}.dmg`,
    windows:     `${BASE_URL}/finView%20Setup%20${version}.exe`,
    linux:       `${BASE_URL}/finView-${version}-arm64.AppImage`,
  };
}

const PLATFORM_INFO = {
  "mac-arm":   { label: "macOS Apple Silicon", sub: "Apple M Series", ext: "DMG" },
  "mac-intel": { label: "macOS Intel",         sub: "Intel Core",      ext: "DMG" },
  windows:     { label: "Windows",             sub: "Windows 10 / 11", ext: "EXE" },
  linux:       { label: "Linux",               sub: "ARM64 · AppImage", ext: "AppImage" },
};

type Platform = keyof typeof PLATFORM_INFO;
const OTHER_PLATFORMS: Platform[] = ["mac-intel", "windows", "linux"];

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V5.25L11 3.75v8.25h9zM3 13h6v6.42L3 18V13zm17 0h-9v8.25l9-1.5V13z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.121.799.523 1.579 1.343 2.422.755.77 2.229 1.44 4.07 1.334 2.64-.155 3.956-2.19 5.228-2.19.272 0 .545.066.804.217.984.568 2.396 1.098 4.015 1.098 1.418 0 2.689-.411 3.506-1.155.801-.728 1.138-1.723 1.138-2.84 0-1.44-.727-2.927-1.789-4.208-.509-.622-1.073-1.226-1.655-1.84-.957-1.009-1.838-2.1-2.239-3.358-.256-.81-.284-1.7-.176-2.586.142-1.127.643-2.185.802-3.297.124-.859-.051-1.798-.562-2.463-.514-.669-1.316-.953-2.17-.953zm-.083 1.665c.432 0 .832.149 1.104.44.27.289.367.674.294 1.154-.129.896-.613 1.94-.769 3.116-.127 1.007-.096 2.04.229 3.093.461 1.466 1.447 2.686 2.411 3.702.573.605 1.131 1.2 1.636 1.818.962 1.175 1.545 2.447 1.545 3.556 0 .787-.221 1.468-.731 1.934-.511.468-1.451.788-2.63.788-1.321 0-2.596-.49-3.418-.963-.448-.258-.907-.386-1.35-.386-1.617 0-2.994 2.19-5.224 2.33-1.508.089-2.664-.415-3.239-1.006-.574-.59-.843-1.162-.927-1.716-.084-.554.01-1.195.232-1.875.504-1.508 1.664-3.069 2.516-4.073.866-1.024 1.218-2.054 1.303-3.318.065-1.502-.69-4.775 2.316-5.002a5.1 5.1 0 0 1 .402-.018zm.109 2.003c-2.158 0-2.41 2.644-2.356 3.881.055 1.25-.24 2.467-1.179 3.582-.92 1.09-2.062 2.607-2.532 4.022-.208.625-.273 1.196-.211 1.677.063.479.271.894.702 1.337.432.445 1.29.835 2.486.758 1.895-.112 3.172-2.19 4.734-2.19.406 0 .813.099 1.208.326.71.41 1.927.906 3.246.906 1.042 0 1.944-.31 2.447-.772.49-.444.649-.985.649-1.615 0-.856-.495-2.004-1.447-3.163-.516-.629-1.073-1.235-1.655-1.856-.989-1.044-2.044-2.34-2.567-3.999-.272-.86-.311-1.801-.204-2.689.111-.881.604-1.92.758-2.997.065-.449.005-.78-.196-1.017-.199-.235-.526-.39-.933-.39z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const trust = [
  { icon: "🔒", text: "No account required" },
  { icon: "📴", text: "Works fully offline" },
  { icon: "🛡️", text: "Data stays on device" },
];

export default function Download() {
  const [version, setVersion] = useState("1.1.20");
  const [urls, setUrls] = useState(buildUrls("1.1.20"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestVersion().then((v) => {
      setVersion(v);
      setUrls(buildUrls(v));
      setLoading(false);
    });
  }, []);

  return (
    <section id="download" className="py-24 px-6 relative overflow-hidden">
      {/* Deep blue background — authority, trust */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-wide">
              Latest release {loading ? "…" : `v${version}`}
            </span>
          </div>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Download FinView</h2>
          <p className="text-white/60 text-lg">Free forever. No credit card. No cloud.</p>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-8 mb-10 flex-wrap">
          {trust.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-white/70 text-sm">
              <span>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>

        {/* Primary card — Mac Apple Silicon */}
        <div className="bg-white/10 border border-white/15 rounded-2xl p-8 mb-4 text-center shadow-2xl backdrop-blur-sm">
          <div className="flex justify-center mb-4 text-white/90">
            <AppleIcon />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{PLATFORM_INFO["mac-arm"].label}</h3>
          <p className="text-white/50 text-sm mb-1">{PLATFORM_INFO["mac-arm"].sub}</p>
          <p className="text-white/35 text-xs mb-6">
            {loading ? "Fetching version…" : `Version ${version} · ${PLATFORM_INFO["mac-arm"].ext}`}
          </p>

          {loading ? (
            <div className="inline-flex items-center gap-3 bg-white/20 text-white/60 font-semibold px-10 py-3.5 rounded-xl text-base">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="80" strokeDashoffset="60"/>
              </svg>
              Loading…
            </div>
          ) : (
            <a
              href={urls["mac-arm"]}
              onClick={() => track("download_clicked", { platform: "mac-arm", version })}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-blue-50 text-blue-700 font-bold px-10 py-3.5 rounded-xl text-base transition-all duration-150 hover:-translate-y-px shadow-xl"
            >
              <DownloadIcon />
              Download for Mac
            </a>
          )}
        </div>

        {/* Other platforms */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {OTHER_PLATFORMS.map((platform) => (
            <div key={platform} className="bg-white/8 border border-white/12 hover:bg-white/15 rounded-2xl p-5 flex items-center justify-between transition-all group">
              <div className="flex items-center gap-3">
                <div className="text-white/70">
                  {platform === "windows" ? <WindowsIcon /> : platform === "linux" ? <LinuxIcon /> : <AppleIcon />}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{PLATFORM_INFO[platform].label}</div>
                  <div className="text-white/40 text-xs">{PLATFORM_INFO[platform].sub} · {PLATFORM_INFO[platform].ext}</div>
                </div>
              </div>
              {loading ? (
                <span className="text-white/30 text-xs">Loading…</span>
              ) : (
                <a
                  href={urls[platform]}
                  onClick={() => track("download_clicked", { platform, version })}
                  className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                >
                  <DownloadIcon />
                  Download
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-white/30 text-xs">
          macOS: Right-click → Open if Gatekeeper prompts. &nbsp;·&nbsp; Windows: &ldquo;More info&rdquo; → &ldquo;Run anyway&rdquo; if SmartScreen prompts.
        </p>
      </div>
    </section>
  );
}
