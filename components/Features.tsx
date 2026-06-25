import Image from "next/image";

const highlights = [
  { value: "100%", label: "Private & offline", color: "text-blue-600" },
  { value: "5",    label: "User profiles",     color: "text-blue-600" },
  { value: "AI",   label: "Built-in assistant",color: "text-blue-600" },
  { value: "Free", label: "No subscription",   color: "text-blue-600" },
];

const smallFeatures = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    title: "Salary Projection",
    desc: "Model salary growth with custom rates and Monte Carlo simulations.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 17V13"/><path d="M12 17V8"/><path d="M17 17V11"/></svg>,
    title: "Investment Modeling",
    desc: "Project 401(k), IRA, and taxable accounts with compound growth.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: "Asset Tracking",
    desc: "Track real estate and assets with custom appreciation rates.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: "Retirement Planning",
    desc: "Model post-retirement sustainability and safe withdrawal rates.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/><path d="M1 21h22"/><path d="M9 7h6"/><path d="M9 11h6"/></svg>,
    title: "Pension Calculator",
    desc: "Compare lump sum vs annuity and calculate break-even age.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    title: "Debt Payoff",
    desc: "Track mortgage schedules and project home equity over time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {highlights.map((h) => (
            <div key={h.label} className="text-center bg-white border border-slate-100 rounded-2xl py-8 px-4 shadow-sm hover:shadow-md transition-all">
              <div className={`text-4xl font-bold mb-1 ${h.color}`}>{h.value}</div>
              <div className="text-sm text-slate-400 font-medium">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Everything you need to plan your financial future
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Built for people who want clarity — not subscriptions, cloud accounts, or data sharing.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4">

          {/* Hero tile — AI Assistant (2×2) with screenshot */}
          <div className="lg:col-span-2 lg:row-span-2 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-2xl p-6 transition-all duration-200 flex flex-col overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-sm shadow-blue-600/20 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Financial Assistant</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Context-aware AI advisor built into every module. Ask questions, run what-if scenarios, and get actionable insights.</p>
            <div className="mt-auto grid grid-cols-3 gap-2">
              {["Salary", "Investments", "Retirement", "Assets", "Pension", "Net Worth"].map((t) => (
                <span key={t} className="text-xs text-slate-400 font-medium bg-slate-50 border border-slate-100 rounded-lg px-2 py-1.5 text-center">{t}</span>
              ))}
            </div>
          </div>

          {/* Wide tile — Net Worth with screenshot (2×1) */}
          <div className="lg:col-span-2 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-2xl p-6 transition-all duration-200 overflow-hidden">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-600/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">Net Worth Summary</h3>
                <p className="text-slate-500 text-sm">All projections unified in one view — income, assets, investments, and total net worth.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src="/finview_projections_breakdown.png"
                alt="Projections breakdown"
                width={700}
                height={220}
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Standard 1×1 tiles */}
          {smallFeatures.map((f) => (
            <div key={f.title} className="bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 rounded-2xl p-6 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-sm shadow-blue-600/20">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
