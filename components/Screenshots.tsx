"use client";

import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    label: "Investment Growth",
    tag: "Investments",
    src: "/finview_post_retirement.png",
    width: 900,
    height: 340,
    desc: "Track 401(k), IRA, and portfolio growth over time with interactive charts.",
  },
  {
    label: "Asset vs Projected Value",
    tag: "Assets",
    src: "/finview_projected_value.png",
    width: 1200,
    height: 310,
    desc: "Compare current and projected values across all your accounts at a glance.",
  },
  {
    label: "Other Income Streams",
    tag: "Other Income",
    src: "/finview_other_incom.png",
    width: 900,
    height: 500,
    desc: "Model rental income, Social Security, side businesses, and more.",
  },
  {
    label: "Module Configuration",
    tag: "Settings",
    src: "/finview_modules.png",
    width: 900,
    height: 440,
    desc: "Enable only the modules you need — standard and premium, all configurable.",
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            See it in action
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real screenshots from the app — no mockups, no stock photos.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {screens.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => setActive(i)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${
                active === i
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Screenshot frame */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-3 bg-gradient-to-b from-blue-50 to-slate-50 rounded-3xl blur-xl opacity-80" />

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] bg-white">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">FinView — {screens[active].label}</span>
            </div>
            <div className="bg-[#f4f6fb] min-h-[280px] flex items-center justify-center p-6">
              <Image
                key={active}
                src={screens[active].src}
                alt={screens[active].label}
                width={screens[active].width}
                height={screens[active].height}
                className="w-full h-auto block rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-slate-400 text-sm mt-6">{screens[active].desc}</p>
      </div>
    </section>
  );
}
