import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Disclaimer — subdued, not boxed */}
        <p className="text-xs text-slate-400 leading-relaxed text-center max-w-2xl mx-auto mb-10">
          <strong className="text-slate-500 font-medium">Disclaimer:</strong> FinView is provided for informational and planning purposes only. It does not constitute financial, investment, tax, or legal advice. Projections are estimates based on user-provided inputs and assumptions. Always consult a qualified financial professional before making financial decisions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/finview_logo_blue.svg" alt="FinView" width={90} height={28} />
            <span className="text-slate-300 text-sm">by</span>
            <a href="https://www.revivesoft.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">ReviveSoft</a>
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#features" className="hover:text-slate-700 transition-colors">Features</a>
            <a href="#download" className="hover:text-slate-700 transition-colors">Download</a>
            <a href="https://www.revivesoft.net" target="_blank" rel="noopener noreferrer" className="hover:text-slate-700 transition-colors">revivesoft.net</a>
          </div>
        </div>

        <p className="text-center text-slate-300 text-xs mt-6">© 2025 ReviveSoft. All rights reserved.</p>
      </div>
    </footer>
  );
}
