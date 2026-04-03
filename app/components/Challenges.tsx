"use client";

import {
  Calendar,
  AlertTriangle,
  Gauge,
  FileWarning,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const challenges = [
  {
    icon: Calendar,
    title: "Sales Friction",
    description:
      "Missing delivery dates without knowing actual stock or production schedules.",
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    icon: AlertTriangle,
    title: "Procurement Gaps",
    description:
      "Surprise stockouts because Excel or ledgers lag actual material usage.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    icon: Gauge,
    title: "Production Blindness",
    description:
      "Wasteful machine downtime because nobody knows who is running which work orders.",
    color: "text-red-400",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    icon: FileWarning,
    title: "Finance Lag",
    description:
      "Invoices, debit notes, and cashflow reports that are always 15 days late.",
    color: "text-orange-400",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
];

export default function Challenges() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
              THE CHALLENGES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              The Reality Today
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover h-full group">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={item.color} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
