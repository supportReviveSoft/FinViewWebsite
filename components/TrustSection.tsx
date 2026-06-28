const points = [
  {
    heading: "Your data never leaves your device",
    body: "Unlike cloud-based tools that sync your financial data to remote servers, FinView stores everything locally. No account creation, no cloud sync, no data sharing — ever.",
    color: "from-blue-500 to-blue-600 shadow-blue-600/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    heading: "Free forever — no subscription",
    body: "While tools like YNAB, Quicken, and Tiller charge $79–$109/year, FinView is completely free. No freemium limits, no premium tiers for core features.",
    color: "from-amber-500 to-amber-600 shadow-amber-600/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    heading: "Built for FIRE & retirement planning",
    body: "Model your FIRE number, safe withdrawal rates, and post-retirement portfolio sustainability. Run Monte Carlo simulations across salary, investments, and net worth timelines.",
    color: "from-violet-500 to-violet-600 shadow-violet-600/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    heading: "The offline Mint alternative",
    body: "Looking for a Mint replacement? FinView gives you projections and planning tools — not just tracking — with full privacy. Your data lives on your machine, not in a data center.",
    color: "from-emerald-500 to-emerald-600 shadow-emerald-600/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Private by design. Free by choice.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            FinView was built for people who want powerful financial planning without giving up their privacy or paying a subscription.
          </p>
        </div>

        {/* Cost comparison strip */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-14 flex-wrap">
          <div className="text-center">
            <div className="font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-slate-300 line-through">$79–109/yr</div>
            <div className="text-xs text-slate-400 mt-1">Typical YNAB / Quicken / Tiller plan</div>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-300 flex-shrink-0">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <div className="text-center">
            <div className="font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-emerald-600">$0 forever</div>
            <div className="text-xs text-slate-400 mt-1">FinView — no catch</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <div key={p.heading} className="flex gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-sm transition-all">
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-sm`}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{p.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
