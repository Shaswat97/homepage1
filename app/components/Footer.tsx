"use client";

import { FadeIn } from "./AnimationWrapper";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#5a32fa] flex items-center justify-center">
                <span className="text-white font-bold text-xs font-[family-name:var(--font-space-grotesk)]">
                  P2Y
                </span>
              </div>
              <span className="text-base font-bold text-foreground tracking-tight font-[family-name:var(--font-space-grotesk)]">
                Plan2Yield
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-light">
              <a
                href="#"
                className="hover:text-[#5a32fa] transition-colors"
                id="footer-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#5a32fa] transition-colors"
                id="footer-terms"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-[#5a32fa] transition-colors"
                id="footer-contact"
              >
                Contact
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-center sm:items-end gap-1 text-sm text-slate-600">
              <p>Email: <a href="mailto:shaswatjsr97work@gmail.com" className="hover:text-[#5a32fa] transition-colors font-medium">shaswatjsr97work@gmail.com</a></p>
              <p>Phone: <a href="tel:+918003569861" className="hover:text-[#5a32fa] transition-colors font-medium">+91 8003569861</a></p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-light">
              © {new Date().getFullYear()} Plan2Yield. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
