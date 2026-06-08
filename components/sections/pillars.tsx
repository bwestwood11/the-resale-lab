import { ArrowRight, Warehouse, Film, Layers } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Pillar = {
  lot: string
  icon: LucideIcon
  category: string
  title: string
  desc: string
  status: string
  href: string
  accent: string
}

const pillars: Pillar[] = [
  {
    lot: "LOT 01",
    icon: Warehouse,
    category: "Operations",
    title: "Storage Unit Reselling",
    desc: "We bid on abandoned storage units at public auction and source from Facebook Marketplace. Real inventory, physically acquired, sorted, photographed, and listed — not dropshipped.",
    status: "Active",
    href: "#reselling",
    accent: "#f97316",
  },
  {
    lot: "LOT 02",
    icon: Film,
    category: "Content",
    title: "YouTube & Social Media",
    desc: "We document the real side of reselling — storage hauls, individual flips, P&L breakdowns, and software builds. Authentic content on YouTube, TikTok, and Facebook.",
    status: "Ongoing",
    href: "#content",
    accent: "#f59e0b",
  },
  {
    lot: "LOT 03",
    icon: Layers,
    category: "Software",
    title: "Crosslisting App",
    desc: "List once, publish everywhere. We're building the crosslisting tool resellers actually need — built by people who flip inventory daily and test every feature on real listings.",
    status: "In Development",
    href: "https://omventa.com/",
    accent: "#f97316",
  },
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative py-28" style={{ background: "#0a0a0a" }}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              className="font-black uppercase leading-none text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Three Pillars.
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>One Company.</span>
            </h2>
            <p className="text-zinc-600 text-sm max-w-xs leading-relaxed sm:text-right">
              Ops informs software. Software scales ops. Content builds the brand. Each part feeds the others.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <a
                key={pillar.lot}
                href={pillar.href}
                className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Hover top border */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)`,
                  }}
                />

                {/* Lot tag + status */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded"
                    style={{
                      color: pillar.accent,
                      background: `${pillar.accent}18`,
                      border: `1px solid ${pillar.accent}30`,
                    }}
                  >
                    {pillar.lot}
                  </span>
                  <span className="text-[10px] font-bold text-white/25 uppercase tracking-wider">
                    {pillar.status}
                  </span>
                </div>

                {/* Watermark number */}
                <div
                  className="absolute right-3 top-12 text-8xl font-black leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(255,255,255,0.03)",
                  }}
                >
                  {pillar.lot.split(" ")[1]}
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${pillar.accent}14`,
                    color: pillar.accent,
                  }}
                >
                  <Icon className="size-5" />
                </div>

                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-2">
                  {pillar.category}
                </p>
                <h3 className="text-lg font-black text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  {pillar.desc}
                </p>

                <div
                  className="flex items-center justify-between mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-[10px] text-white/15 uppercase tracking-widest font-bold">
                    Learn more
                  </span>
                  <ArrowRight className="size-4 text-white/15 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
