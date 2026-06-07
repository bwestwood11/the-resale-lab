import { CheckCircle2, ArrowRight, Zap, Layers, BarChart3 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const platforms = [
  { name: "eBay", active: true },
  { name: "Mercari", active: true },
  { name: "Poshmark", active: true },
  { name: "Depop", active: true },
  { name: "Facebook", active: false },
  { name: "Etsy", active: false },
]

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "List once, publish everywhere",
    description:
      "Fill out one form. We handle formatting, field mapping, and publishing to every platform simultaneously.",
  },
  {
    icon: Layers,
    title: "Unified inventory dashboard",
    description:
      "Track every listing, across every platform, in one place. Know what's live, sold, and needs attention at a glance.",
  },
  {
    icon: BarChart3,
    title: "Smarter workflow automation",
    description:
      "Automate title optimization, pricing rules, and category mapping — so you can focus on sourcing, not data entry.",
  },
]

export default function CrosslistingSection() {
  return (
    <section id="crosslisting" className="relative bg-zinc-900 py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              Crosslisting App
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              One listing.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Eight platforms.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We&apos;re building a crosslisting app designed specifically for
              resellers who need to move inventory fast. Built by resellers, for
              resellers — every feature solves a real problem we face ourselves.
            </p>

            {/* Feature list */}
            <div className="space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-500/12 flex items-center justify-center mt-0.5">
                      <Icon className="size-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Platform pipeline visual */}
          <div className="lg:pt-6">
            {/* Single listing card */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Your listing draft</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Vintage Denim Jacket</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Size M · Good condition · $45</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-3 px-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-orange-500/40 to-white/5" />
              <div className="shrink-0 w-7 h-7 rounded-full bg-orange-500/15 flex items-center justify-center">
                <ArrowRight className="size-3.5 text-orange-400" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-orange-500/40 to-white/5" />
            </div>

            {/* Platform grid */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Published across</p>
              <div className="grid grid-cols-3 gap-2">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors ${
                      p.active
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-white/[0.03] border-white/8 text-white/25"
                    }`}
                  >
                    {p.active ? (
                      <CheckCircle2 className="size-3 shrink-0" />
                    ) : (
                      <span className="size-3 rounded-full border border-white/15 shrink-0" />
                    )}
                    {p.name}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/25 mt-3 text-center">+ 2 more platforms coming soon</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
