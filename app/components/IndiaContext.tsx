"use client";

import {
  Settings2,
  ArrowDownToLine,
  Cog,
  BarChart3,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const howItWorks = [
  {
    icon: Settings2,
    step: "Setup",
    description: "Define machines, materials, users.",
  },
  {
    icon: ArrowDownToLine,
    step: "Inward",
    description: "Record receipts, bills, payments.",
  },
  {
    icon: Cog,
    step: "Operate",
    description: "Produce, dispatch, invoice.",
  },
  {
    icon: BarChart3,
    step: "Control",
    description: "View reports, track margins.",
  },
];

const badges = [
  "INR-FIRST FINANCE",
  "USER ROLE GOVERNANCE",
  "MADE IN BHARAT",
  "ROLE-BASED ACCESS",
];

export default function IndiaContext() {
  return (
    <section className="py-24 lg:py-32 bg-purple-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-[family-name:var(--font-space-grotesk)]">
                Designed for Indian Sovereignty
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-lg">
                We understand the local nuances of manufacturing in India—from
                complex GST structures to diverse labor management.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/90 tracking-wider backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - How it works */}
          <FadeIn delay={0.15} direction="left">
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                How it works
              </h3>
              <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                {howItWorks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.step}>
                      <div className="flex items-start gap-4 group">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#5a32fa] group-hover:border-[#5a32fa] transition-all duration-300">
                            <Icon size={20} className="text-white/80 group-hover:text-white transition-colors" />
                          </div>
                          {index < howItWorks.length - 1 && (
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-5 bg-white/10" />
                          )}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-sm font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                            {item.step}
                          </h4>
                          <p className="text-sm text-white/50 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
