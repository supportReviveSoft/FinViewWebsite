import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white flex flex-col">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-blob-1 absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full bg-blue-400/30 blur-3xl" />
        <div className="hero-blob-2 absolute top-10 right-[-140px] w-[420px] h-[420px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="hero-blob-3 absolute top-72 left-1/3 w-[360px] h-[360px] rounded-full bg-indigo-300/20 blur-3xl" />
        {/* Fade to white so content stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full border-b border-slate-100">
        <div className="flex items-center">
          <Image src="/finview_logo_blue.svg" alt="FinView" width={140} height={42} priority />
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <a href="#features" className="text-slate-500 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">Features</a>
          <a href="#download" className="text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors ml-2">Download</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-0 max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-slate-600 text-xs font-semibold tracking-wide">Free Desktop App — Mac & Windows</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-slate-900 max-w-4xl mb-6">
          Plan your financial future<br />
          <span className="text-blue-600">with confidence</span>
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
          Free desktop app for retirement planning, salary projections, 401k &amp; IRA modeling, net worth tracking, and AI-powered financial advice — 100% offline, no account, no subscription.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-150 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-px"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Free
          </a>
          <a href="#features" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm">
            See all features
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* App screenshot — floating frame */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Glow behind the screenshot */}
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-100/60 to-transparent rounded-3xl blur-2xl" />

          {/* Browser/app chrome frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_30px_80px_-12px_rgba(0,0,0,0.18)] bg-white">
            {/* Window title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">FinView — Financial Summary</span>
            </div>
            <Image
              src="/finview_financial_summary.png"
              alt="FinView Financial Summary"
              width={1200}
              height={550}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>
      </div>

      {/* Platform icons — below the screenshot */}
      <div className="relative z-10 flex items-center justify-center gap-3 py-10">
        <span className="text-xs text-slate-400 font-medium">Available on</span>

        {/* Apple */}
        <div className="flex items-center justify-center w-9 h-9 border border-slate-200 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-600">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </div>

        {/* Windows */}
        <div className="flex items-center justify-center w-9 h-9 border border-slate-200 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-600">
            <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V5.25L11 3.75v8.25h9zM3 13h6v6.42L3 18V13zm17 0h-9v8.25l9-1.5V13z"/>
          </svg>
        </div>

        {/* Linux */}
        <div className="flex items-center justify-center w-9 h-9 border border-slate-200 bg-white rounded-full shadow-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-600">
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.121.799.523 1.579 1.343 2.422.755.77 2.229 1.44 4.07 1.334 2.64-.155 3.956-2.19 5.228-2.19.272 0 .545.066.804.217.984.568 2.396 1.098 4.015 1.098 1.418 0 2.689-.411 3.506-1.155.801-.728 1.138-1.723 1.138-2.84 0-1.44-.727-2.927-1.789-4.208-.509-.622-1.073-1.226-1.655-1.84-.957-1.009-1.838-2.1-2.239-3.358-.256-.81-.284-1.7-.176-2.586.142-1.127.643-2.185.802-3.297.124-.859-.051-1.798-.562-2.463-.514-.669-1.316-.953-2.17-.953zm-.083 1.665c.432 0 .832.149 1.104.44.27.289.367.674.294 1.154-.129.896-.613 1.94-.769 3.116-.127 1.007-.096 2.04.229 3.093.461 1.466 1.447 2.686 2.411 3.702.573.605 1.131 1.2 1.636 1.818.962 1.175 1.545 2.447 1.545 3.556 0 .787-.221 1.468-.731 1.934-.511.468-1.451.788-2.63.788-1.321 0-2.596-.49-3.418-.963-.448-.258-.907-.386-1.35-.386-1.617 0-2.994 2.19-5.224 2.33-1.508.089-2.664-.415-3.239-1.006-.574-.59-.843-1.162-.927-1.716-.084-.554.01-1.195.232-1.875.504-1.508 1.664-3.069 2.516-4.073.866-1.024 1.218-2.054 1.303-3.318.065-1.502-.69-4.775 2.316-5.002a5.1 5.1 0 0 1 .402-.018z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
