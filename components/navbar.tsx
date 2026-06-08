"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Operations", href: "#reselling" },
  { label: "Software", href: "#software" },
  { label: "Content", href: "#content" },
  { label: "About", href: "#about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-black text-black tracking-tight shrink-0"
              style={{ background: "#f97316" }}
            >
              TRL
            </div>
            <span className="hidden sm:block text-sm font-bold text-white tracking-tight">
              The Resale Lab
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold text-white/40 hover:text-white transition-colors tracking-[0.12em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:contact@theresalelab.com"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors font-medium"
            >
              contact@theresalelab.com
            </a>
            <a
              href="#software"
              className="inline-flex items-center h-7 px-3.5 rounded-full text-[11px] font-black text-black transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#f97316" }}
            >
              Software Waitlist
            </a>
          </div>

          <button
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(8,8,8,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <nav className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/45 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div
              className="pt-3 flex flex-col gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <a
                href="mailto:contact@theresalelab.com"
                className="text-xs text-white/25"
              >
                contact@theresalelab.com
              </a>
              <a
                href="#software"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center h-9 items-center rounded-full text-sm font-black text-black"
                style={{ background: "#f97316" }}
              >
                Software Waitlist
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
