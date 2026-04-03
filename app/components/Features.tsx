"use client";

import {
  Warehouse,
  Activity,
  BarChart3,
  IndianRupee,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const features = [
  {
    icon: Warehouse,
    title: "Intelligent Inventory",
    description:
      "Predictive stock alerts, multi-warehouse tracking, and automated reorder triggers that keep your capital flowing.",
    large: true,
    hasImage: true,
    accentColor: "from-purple-50 to-slate-50",
    iconBg: "bg-purple-100",
    iconColor: "text-[#5a32fa]",
  },
  {
    icon: Activity,
    title: "Real-Time Production",
    description:
      "Live status tracking, OEE monitoring, and quality control at every stage.",
    large: false,
    accentColor: "from-green-50 to-slate-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Decision-Ready Analytics",
    description:
      "Enjoy visually beautiful reports on yield, wastage, and cost variance directly to your CXO.",
    large: false,
    purple: true,
    accentColor: "from-[#5a32fa] to-purple-700",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    icon: IndianRupee,
    title: "Cashflow & Finance",
    description:
      "Integrated ledgers, automated GST compliance, and receivable alerts to keep your books healthy.",
    large: false,
    accentColor: "from-amber-50 to-slate-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Built for the way Indian factories <br className="hidden sm:block" />
              actually work.
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem
                key={feature.title}
                className={feature.large ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  className={`rounded-2xl p-8 h-full card-hover relative overflow-hidden ${
                    feature.purple
                      ? "bg-gradient-to-br from-[#5a32fa] to-purple-700 text-white shadow-xl shadow-purple-600/20"
                      : "bg-white border border-slate-100 shadow-sm"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}
                  >
                    <Icon size={26} className={feature.iconColor} />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] ${
                      feature.purple ? "text-white" : "text-foreground"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed max-w-md ${
                      feature.purple ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Warehouse Image Placeholder for large card */}
                  {feature.hasImage && (
                    <div className="mt-8 rounded-xl bg-gradient-to-br from-purple-50 to-slate-100 border border-purple-100/50 p-6 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                      {/* Stylized warehouse illustration */}
                      <div className="flex items-end gap-3 opacity-60">
                        <div className="w-16 h-24 bg-purple-200/60 rounded-t-lg" />
                        <div className="w-12 h-32 bg-purple-300/50 rounded-t-lg" />
                        <div className="w-20 h-20 bg-purple-200/40 rounded-t-lg" />
                        <div className="w-14 h-28 bg-purple-300/60 rounded-t-lg" />
                        <div className="w-10 h-16 bg-purple-200/50 rounded-t-lg" />
                      </div>
                      <div className="absolute bottom-3 right-4 glass rounded-lg px-3 py-2 text-xs font-semibold text-[#5a32fa]">
                        3 Warehouses Active
                      </div>
                    </div>
                  )}

                  {/* Subtle Pattern on purple card */}
                  {feature.purple && (
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                      <svg viewBox="0 0 100 100" fill="none">
                        <circle cx="80" cy="20" r="40" stroke="white" strokeWidth="0.5" />
                        <circle cx="80" cy="20" r="60" stroke="white" strokeWidth="0.5" />
                        <circle cx="80" cy="20" r="80" stroke="white" strokeWidth="0.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
