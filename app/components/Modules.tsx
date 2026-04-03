"use client";

import {
  Users,
  ShoppingCart,
  Truck,
  Settings,
  Package,
  ShieldCheck,
  FileText,
  CreditCard,
  Footprints,
  LayoutDashboard,
  Database,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const modules = [
  { icon: Users, label: "CRM" },
  { icon: ShoppingCart, label: "Sales Orders" },
  { icon: Truck, label: "Procurement" },
  { icon: Settings, label: "BOM & Production" },
  { icon: Package, label: "WIP Inventory" },
  { icon: ShieldCheck, label: "Quality Control" },
  { icon: FileText, label: "Subcontract Accounts" },
  { icon: CreditCard, label: "Unified Notes (Debit/Credit)" },
  { icon: Footprints, label: "Activity Trail" },
  { icon: LayoutDashboard, label: "Dashboards" },
  { icon: Database, label: "Master Data" },
];

export default function Modules() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
              11 Modules. Infinite Possibilities.
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <StaggerItem key={mod.label}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm card-hover group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#5a32fa] group-hover:border-[#5a32fa] transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#5a32fa] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-[#5a32fa] transition-colors duration-300">
                      {mod.label}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
