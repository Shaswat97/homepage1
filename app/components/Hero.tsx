"use client";

import { ArrowRight, Play } from "lucide-react";
import { FadeIn } from "./AnimationWrapper";
import { motion } from "framer-motion";

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl shadow-black/[0.08] border border-slate-200/60 p-6 relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-medium text-muted-light uppercase tracking-wider">
              Dashboard Overview
            </p>
            <h3 className="text-lg font-bold text-foreground mt-0.5 font-[family-name:var(--font-space-grotesk)]">
              Financial Summary
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-green-600">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs font-medium text-muted-light mb-1">Gross Revenue</p>
            <p className="text-xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">₹24.8L</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="text-xs font-semibold text-green-600">+12.4%</span>
              <span className="text-xs text-muted-light">vs last month</span>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs font-medium text-muted-light mb-1">Payables</p>
            <p className="text-xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">₹9.2L</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="text-xs font-semibold text-orange-500">-3.1%</span>
              <span className="text-xs text-muted-light">vs last month</span>
            </div>
          </div>
        </div>

        {/* Mini Chart Placeholder */}
        <div className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-xl p-4 border border-purple-100/50">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-muted">Monthly Production Trend</p>
            <span className="text-xs font-semibold text-[#5a32fa]">FY 2025-26</span>
          </div>
          {/* SVG Chart */}
          <svg viewBox="0 0 300 60" className="w-full h-12" fill="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5a32fa" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#5a32fa" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q30 45 60 38 T120 28 T180 18 T240 22 T300 10"
              stroke="#5a32fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M0 50 Q30 45 60 38 T120 28 T180 18 T240 22 T300 10 V60 H0 Z"
              fill="url(#chartFill)"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating Element - Yield */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -right-4 top-8 z-20 animate-float"
      >
        <div className="glass rounded-xl px-4 py-3 shadow-xl shadow-black/[0.06] border border-purple-100/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-light font-medium">Yield</p>
              <p className="text-sm font-bold text-green-600 font-[family-name:var(--font-space-grotesk)]">94.2%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Element - GRN */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -left-4 bottom-24 z-20 animate-float-delayed"
      >
        <div className="glass rounded-xl px-4 py-3 shadow-xl shadow-black/[0.06] border border-green-100/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#5a32fa]/10 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5a32fa"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-light font-medium">GRN Received</p>
              <p className="text-sm font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">PO-1247</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 translate-x-8 translate-y-8">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#5a32fa]/10 via-purple-200/20 to-transparent blur-2xl" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#5a32fa] animate-pulse" />
                <span className="text-xs font-semibold text-[#5a32fa] tracking-wide uppercase">
                  Manufacturing Operations System
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight font-[family-name:var(--font-space-grotesk)]">
                Stop running your factory on{" "}
                <span className="italic text-[#5a32fa] relative">
                  spreadsheets.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 8 Q75 2, 150 6 T298 4"
                      stroke="#5a32fa"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
                Plan2Yield seamlessly connects your operations. From procurement
                to warehouse, production lines and invoices. Real-time
                visibility, zero friction.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#demo"
                  id="hero-get-started"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#5a32fa] text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#tour"
                  id="hero-watch-tour"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-slate-700 font-semibold hover:text-[#5a32fa] transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <Play size={16} className="text-[#5a32fa] ml-0.5" fill="#5a32fa" />
                  </div>
                  Watch 2-minute Tour
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="mt-12 flex items-center gap-6 text-sm text-muted-light">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Dashboard Mockup */}
          <FadeIn delay={0.3} direction="left" className="hidden lg:block">
            <DashboardMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
