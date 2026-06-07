import { Layers, Warehouse, Film, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Pillar = {
  icon: LucideIcon
  label: string
  title: string
  description: string
  tag: string
  href: string
  accent: string
  iconBg: string
}

const pillars: Pillar[] = [
  {
    icon: Layers,
    label: "Software",
    title: "Crosslisting App",
    description:
      "A platform that lets resellers list once and publish across eBay, Mercari, Depop, Poshmark, and more — saving hours every week and eliminating manual re-entry.",
    tag: "In Development",
    href: "#crosslisting",
    accent: "from-orange-500/20 to-amber-500/0",
    iconBg: "bg-orange-500/15 text-orange-400",
  },
  {
    icon: Warehouse,
    label: "Operations",
    title: "Storage Unit Reselling",
    description:
      "We source inventory from abandoned storage unit auctions, sort through it systematically, and resell valuable items across online marketplaces.",
    tag: "Active",
    href: "#storage",
    accent: "from-amber-500/15 to-amber-500/0",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: Film,
    label: "Content",
    title: "YouTube & Social",
    description:
      "We document our reselling journey — storage unit hauls, software builds, and the honest realities of building a resale business — through YouTube and social media.",
    tag: "Ongoing",
    href: "#content",
    accent: "from-rose-500/15 to-rose-500/0",
    iconBg: "bg-rose-500/15 text-rose-400",
  },
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative bg-zinc-950 py-28 overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Three pillars.{" "}
            <span className="text-white/40">One company.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Software powers operations. Operations fuel content. Content builds
            the brand. Every part of The Resale Lab reinforces the others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <a
                key={pillar.title}
                href={pillar.href}
                className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient fade */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${pillar.accent}`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.iconBg}`}>
                    <Icon className="size-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                    <ArrowUpRight className="size-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">
                  {pillar.label}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {pillar.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
