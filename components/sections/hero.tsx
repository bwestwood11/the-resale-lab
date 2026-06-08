import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  AlertCircle,
  Package,
  TrendingUp,
  Zap,
} from "lucide-react"

type ListingStatus = "live" | "syncing" | "review"

const mockListings = [
  {
    name: "Vintage Levi's 501",
    sub: "Size M · Good condition",
    platforms: ["eBay", "Depop", "Posh"],
    status: "live" as ListingStatus,
    color: "from-amber-700 to-orange-800",
    price: "$68",
  },
  {
    name: "Nike Air Max 90",
    sub: "2023 · Worn twice",
    platforms: ["eBay", "Mercari"],
    status: "syncing" as ListingStatus,
    color: "from-sky-700 to-blue-800",
    price: "$145",
  },
  {
    name: "Coach Mini Backpack",
    sub: "Classic · Excellent",
    platforms: ["Poshmark"],
    status: "review" as ListingStatus,
    color: "from-emerald-700 to-teal-800",
    price: "$55",
  },
]

function StatusBadge({ status }: { status: ListingStatus }) {
  if (status === "live")
    return (
      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
        <CheckCircle2 className="size-3" />
        Live
      </span>
    )
  if (status === "syncing")
    return (
      <span className="flex items-center gap-1 text-[10px] font-bold text-orange-400">
        <RefreshCw className="size-3 animate-spin" />
        Syncing
      </span>
    )
  return (
    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400">
      <AlertCircle className="size-3" />
      Review
    </span>
  )
}

function DashboardMockup() {
  return (
    <div className="relative" style={{ transform: "rotate(-1.5deg)" }}>
      {/* Floating profit badge */}
      <div
        className="absolute -top-4 -right-2 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold whitespace-nowrap"
        style={{
          background: "rgb(16,185,129)",
          boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
        }}
      >
        <TrendingUp className="size-3" />
        +$312 this week
      </div>

      {/* Main window */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(18,18,20,0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <span className="size-2.5 rounded-full bg-red-500/60" />
          <span className="size-2.5 rounded-full bg-yellow-500/60" />
          <span className="size-2.5 rounded-full bg-green-500/60" />
          <span className="ml-3 text-[10px] font-bold text-white/25 tracking-widest uppercase">
            Crosslist Pro · Active
          </span>
          <span className="ml-auto text-[10px] text-white/20">3 items</span>
        </div>

        {/* Rows */}
        {mockListings.map((item, i) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-4 py-3"
            style={{
              borderBottom:
                i < mockListings.length - 1
                  ? "1px solid rgba(255,255,255,0.04)"
                  : "none",
            }}
          >
            <div
              className={`w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br ${item.color}`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {item.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {item.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-medium text-white/30 px-1.5 py-px rounded"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-white">{item.price}</p>
              <StatusBadge status={item.status} />
            </div>
          </div>
        ))}

        {/* Footer bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Package className="size-3 text-orange-400" />
            <span className="text-[10px] text-white/25">8 platforms connected</span>
          </div>
          <span className="text-[10px] font-semibold" style={{ color: "rgba(249,115,22,0.7)" }}>
            View all →
          </span>
        </div>
      </div>

      {/* Floating bottom badge */}
      <div
        className="absolute -bottom-5 -left-4 flex items-center gap-2.5 px-3 py-2 rounded-xl"
        style={{
          background: "rgb(24,24,27)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="size-7 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(249,115,22,0.12)" }}
        >
          <Zap className="size-3.5 text-orange-400" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white leading-none">
            Listed to 3 markets
          </p>
          <p className="text-[10px] text-white/30 mt-0.5">Auto-synced · just now</p>
        </div>
      </div>
    </div>
  )
}

const pillars = [
  { num: "01", label: "Storage Units" },
  { num: "02", label: "Content Creation" },
  { num: "03", label: "Crosslisting Software" },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#080808" }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 65% at -5% 65%, rgba(249,115,22,0.17) 0%, transparent 65%)",
        }}
      />
      {/* Top hairline */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.6) 50%, transparent 100%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded border"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  borderColor: "rgba(249,115,22,0.25)",
                }}
              >
                <span className="size-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[10px] font-black text-orange-400 tracking-widest uppercase">
                  The Resale Lab, LLC
                </span>
              </div>
              <span className="text-[10px] font-bold text-white/20 tracking-widest uppercase">
                Est. 2026
              </span>
            </div>

            {/* Headline — Barlow Condensed */}
            <h1
              className="font-black leading-none tracking-tight mb-6 uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 10vw, 7.5rem)",
              }}
            >
              <span className="block text-white">Buy Low.</span>
              <span className="block text-white">Sell High.</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Everywhere
              </span>
            </h1>

            <p
              className="text-white/50 leading-relaxed mb-8 max-w-lg"
              style={{ fontSize: "1.0625rem" }}
            >
              We source real inventory from abandoned storage unit auctions and
              Facebook Marketplace, build crosslisting software to publish to 8+
              platforms at once, and document the entire journey on YouTube and
              TikTok.
            </p>

            {/* Pillar badges */}
            <div className="flex flex-wrap gap-2 mb-9">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-[10px] font-black text-orange-500 tabular-nums">
                    #{p.num}
                  </span>
                  <span className="text-xs font-semibold text-white/40">{p.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pillars"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl text-sm font-bold text-black transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "#f97316",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.3)",
                }}
              >
                See What We Do
                <ArrowRight className="ml-2 size-4" />
              </a>
              <a
                href="https://omventa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl text-sm font-semibold text-white border border-white/[0.1] transition-all hover:border-white/[0.2]"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                Join Software Waitlist
              </a>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
            <div className="w-full max-w-[480px]">
              <DashboardMockup />
            </div>
          </div>

        </div>

        {/* Platform strip */}
        <div
          className="mt-20 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase mb-4">
            Crosslisting To
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { name: "eBay", src: "/ebay.png", width: 48, height: 20 },
              { name: "Mercari", src: "/Mercari.svg", width: 72, height: 20 },
              { name: "Poshmark", src: "/Poshmark.png", width: 80, height: 20 },
              { name: "Depop", src: "/Depop.png", width: 52, height: 20 },
              { name: "Facebook Marketplace", src: "/Facebook.png", width: 24, height: 24 },
              { name: "Etsy", src: "/Etsy.png", width: 48, height: 20 },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-center px-3 py-2 rounded-lg border border-white/[0.07]"
                style={{ background: "rgba(255,255,255,0.03)" }}
                title={platform.name}
              >
                <Image
                  src={platform.src}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className="opacity-40 object-contain"
                  style={{ maxHeight: "20px", width: "auto" }}
                />
              </div>
            ))}
            <span
              className="px-3 py-2 rounded-lg text-[11px] font-semibold text-white/20 border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              + More
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
