import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, RefreshCw, AlertCircle } from "lucide-react"

const mockListings = [
  {
    name: "Vintage Denim Jacket",
    platforms: ["eBay", "Poshmark", "Depop"],
    status: "published" as const,
    color: "bg-gradient-to-br from-amber-600 to-orange-700",
  },
  {
    name: "Nike Air Max 90",
    platforms: ["eBay", "Mercari"],
    status: "publishing" as const,
    color: "bg-gradient-to-br from-blue-600 to-indigo-700",
  },
  {
    name: "Coach Mini Backpack",
    platforms: ["Poshmark"],
    status: "review" as const,
    color: "bg-gradient-to-br from-emerald-600 to-teal-700",
  },
]

const targetPlatforms = ["eBay", "Mercari", "Poshmark", "Depop", "Facebook"]

function StatusBadge({ status }: { status: "published" | "publishing" | "review" }) {
  if (status === "published") {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 shrink-0">
        <CheckCircle2 className="size-3" />
        Published
      </span>
    )
  }
  if (status === "publishing") {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-orange-400 shrink-0">
        <RefreshCw className="size-3 animate-spin" />
        Publishing…
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 text-[11px] font-medium text-amber-400 shrink-0">
      <AlertCircle className="size-3" />
      Needs review
    </span>
  )
}

function AppMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Floating activity pill */}
      <div className="absolute -top-4 -right-2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40 text-white text-xs font-semibold whitespace-nowrap">
        <span className="size-1.5 rounded-full bg-white animate-pulse" />
        +42 synced today
      </div>

      {/* Main dashboard card */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl shadow-black/60 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/60" />
            <span className="text-[11px] font-bold text-white/60 tracking-widest uppercase">
              Live Crosslisting Queue
            </span>
          </div>
          <span className="text-[11px] text-white/30 font-medium">3 active</span>
        </div>

        {/* Listing items */}
        <div className="divide-y divide-white/[0.05]">
          {mockListings.map((item) => (
            <div key={item.name} className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition-colors">
              <div className={`w-9 h-9 rounded-lg shrink-0 ${item.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{item.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {item.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] font-medium text-white/35 bg-white/5 px-1.5 py-px rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.05]">
          <span className="text-[11px] text-white/25">Synced 12s ago</span>
          <span className="text-[11px] text-orange-400/80 font-medium">View all →</span>
        </div>
      </div>

      {/* Floating mini status card */}
      <div className="absolute -bottom-5 -left-5 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 shadow-xl shadow-black/50">
        <div className="size-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
          <CheckCircle2 className="size-3.5 text-emerald-400" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white leading-none">All platforms live</p>
          <p className="text-[10px] text-white/30 mt-0.5">8 channels connected</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-zinc-950 min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at -5% 60%, rgba(249,115,22,0.13) 0%, transparent 65%)",
        }}
      />
      {/* Top edge glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.4) 40%, transparent 100%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/8 text-orange-400 text-xs font-semibold">
              <span className="size-1.5 rounded-full bg-orange-400 animate-pulse" />
              Crosslisting software in development
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6">
              List once.
              <br />
              Sell on every
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                marketplace.
              </span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
              The Resale Lab combines crosslisting software, real-world resale
              operations, and content creation to help modern resellers move
              faster and grow smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 h-11 px-6 text-sm font-semibold rounded-lg shadow-lg shadow-orange-500/20"
              >
                <a href="#pillars">
                  Explore Our Work
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/12 text-white bg-transparent hover:bg-white/6 hover:border-white/20 hover:text-white h-11 px-6 text-sm font-semibold rounded-lg"
              >
                <a href="#content">Follow Our Journey</a>
              </Button>
            </div>

            {/* Platform pills */}
            <div>
              <p className="text-[11px] text-white/25 uppercase tracking-widest mb-3 font-medium">
                Listing to
              </p>
              <div className="flex flex-wrap gap-2">
                {targetPlatforms.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1 rounded-full text-xs font-medium text-white/45 border border-white/8 bg-white/[0.03]"
                  >
                    {p}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white/25">
                  + 3 more
                </span>
              </div>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
            <div className="w-full max-w-[340px]">
              <AppMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
