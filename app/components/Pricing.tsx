"use client";

import { Check } from "lucide-react";
import { FadeIn } from "./AnimationWrapper";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Pricing based on the control your operations need
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              We know every factory is slightly different. Book a call to align on the workflows that matter now, and map out a tailored rollout plan and pricing schedule.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
              {/* Highlight strip at the top */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#5a32fa]" />

              <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] mb-2 mt-2">
                Custom Factory Setup
              </h3>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                Pricing scales securely based on user volume, integration requirements, and custom workflow demands.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-left">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#5a32fa]" strokeWidth={3} />
                    </div>
                    Tailored master data configuration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#5a32fa]" strokeWidth={3} />
                    </div>
                    Flexible user licensing models
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#5a32fa]" strokeWidth={3} />
                    </div>
                    Guided role-based onboarding
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#5a32fa]" strokeWidth={3} />
                    </div>
                    Phased workflow deployments
                  </li>
                </ul>
              </div>

              <div className="max-w-xs mx-auto">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("demo");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-4 bg-[#5a32fa] text-white font-bold rounded-xl shadow-lg shadow-purple-600/25 hover:bg-purple-700 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
