import { CheckCircle2, ArrowRight, Zap, Layers, BarChart3, Bell } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "List once, publish everywhere",
    desc: "Fill one listing form. We handle field mapping, category translation, and simultaneous publishing across all connected platforms.",
  },
  {
    icon: Layers,
    title: "Unified inventory dashboard",
    desc: "Every listing on every platform in one place. See what's live, pending, or needs attention without switching tabs.",
  },
  {
    icon: BarChart3,
    title: "Smart pricing & automation",
    desc: "Automate title optimization, pricing rules, and category mapping. Focus on sourcing, not data entry.",
  },
  {
    icon: Bell,
    title: "Sold sync across platforms",
    desc: "When an item sells, mark it sold everywhere instantly. No double-sells, no manual updates, no headaches.",
  },
]

const platforms = [
  { name: "eBay", color: "#facc15", bg: "rgba(250,204,21,0.07)", border: "rgba(250,204,21,0.2)" },
  { name: "Mercari", color: "#f87171", bg: "rgba(248,113,113,0.07)", border: "rgba(248,113,113,0.2)" },
  { name: "Poshmark", color: "#f472b6", bg: "rgba(244,114,182,0.07)", border: "rgba(244,114,182,0.2)" },
  { name: "Depop", color: "#34d399", bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.2)" },
  { name: "Facebook", color: "#60a5fa", bg: "rgba(96,165,250,0.07)", border: "rgba(96,165,250,0.2)" },
  { name: "Etsy", color: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.2)" },
]

export default function CrosslistingSection() {
  return (
    <section
      id="software"
      className="relative py-28 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 110% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
              Pillar 03 · Crosslisting Software
            </p>
            <h2
              className="font-black uppercase leading-none text-white mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              List Once.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sell Everywhere.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-3">
              We&apos;re building the crosslisting tool we wish existed. Every feature is
              designed around real reseller workflows — tested on our own inventory
              before any user sees it.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-9">
              In active development. Join the waitlist to get early access and help
              shape the product with your feedback.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mt-0.5">
                      <Icon className="size-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-0.5 text-sm">{f.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center h-11 px-6 rounded-xl text-sm font-bold text-black transition-all hover:-translate-y-0.5"
              style={{
                background: "#f97316",
                boxShadow: "0 8px 20px rgba(249,115,22,0.25)",
              }}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>

          {/* Right: Platform pipeline */}
          <div className="lg:pt-4 space-y-3">
            {/* Draft listing */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10px] font-black text-white/25 uppercase tracking-widest mb-3">
                Your Draft Listing
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700 to-orange-800 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Vintage Denim Jacket · Size M
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Good condition · Asking $48
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow divider */}
            <div className="flex items-center gap-3 px-3">
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(249,115,22,0.45), transparent)",
                }}
              />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center ring-1 ring-orange-500/30"
                style={{ background: "rgba(249,115,22,0.12)" }}
              >
                <ArrowRight className="size-3.5 text-orange-400" />
              </div>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(249,115,22,0.45), transparent)",
                }}
              />
            </div>

            {/* Platform grid */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10px] font-black text-white/25 uppercase tracking-widest mb-3">
                Auto-Published To
              </p>
              <div className="grid grid-cols-3 gap-2">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold"
                    style={{
                      color: p.color,
                      background: p.bg,
                      border: `1px solid ${p.border}`,
                    }}
                  >
                    <CheckCircle2 className="size-3 opacity-70 shrink-0" />
                    {p.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "6+", l: "Platforms" },
                { v: "4hrs", l: "Saved/wk" },
                { v: "Live", l: "Sync" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-3 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-sm font-black text-white">{s.v}</p>
                  <p className="text-[10px] text-zinc-600 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Dev status */}
            <div
              className="p-3 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(249,115,22,0.04)",
                border: "1px solid rgba(249,115,22,0.18)",
              }}
            >
              <span className="size-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
              <p className="text-xs font-semibold" style={{ color: "rgba(249,115,22,0.8)" }}>
                In active development · waitlist open · early access launching soon
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
