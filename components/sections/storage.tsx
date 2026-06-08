import { CheckCircle2, MapPin, Package, Tag } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Step = {
  num: string
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    num: "01",
    icon: MapPin,
    title: "Scout & Bid",
    desc: "We locate storage unit auctions at local facilities. When tenants abandon units, the contents are sold publicly. We evaluate each unit fast — estimating value vs. risk before bidding.",
  },
  {
    num: "02",
    icon: Package,
    title: "Sort & Photograph",
    desc: "Every unit is sorted systematically. Sellable items are photographed, researched, and priced using live market comps. We don't guess — every listing is backed by real data.",
  },
  {
    num: "03",
    icon: Tag,
    title: "List & Sell Fast",
    desc: "Inventory goes live across multiple platforms using our own crosslisting software. What takes most resellers hours takes us minutes. We move product quickly and reinvest the capital.",
  },
]

const recentFlips = [
  { item: "Vintage Levi's 501", bought: "$8", sold: "$45", days: 2, profit: 37 },
  { item: "Nike Air Force 1 '07", bought: "$22", sold: "$95", days: 4, profit: 73 },
  { item: "Coach Signature Bag", bought: "$15", sold: "$68", days: 1, profit: 53 },
]

function StorageUnitArt() {
  const slats = 20
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Door */}
      <div className="relative" style={{ aspectRatio: "4/3", background: "#080808" }}>
        {/* Interior glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(249,115,22,0.24) 0%, transparent 55%)",
          }}
        />

        {/* Box silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-4 pb-4 pointer-events-none z-[5]">
          <div className="w-8 h-10 rounded-sm" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="w-12 h-16 rounded-sm" style={{ background: "rgba(255,255,255,0.09)" }} />
          <div className="w-6 h-7 rounded-sm" style={{ background: "rgba(255,255,255,0.15)" }} />
          <div className="w-10 h-13 rounded-sm" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="w-7 h-9 rounded-sm" style={{ background: "rgba(255,255,255,0.11)" }} />
          <div className="w-5 h-6 rounded-sm" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* Corrugated slats */}
        {Array.from({ length: slats }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-x-0 z-10"
            style={{
              top: `${(i / slats) * 100}%`,
              height: `${100 / slats}%`,
              background:
                i % 2 === 0
                  ? "rgba(255,255,255,0.022)"
                  : "rgba(0,0,0,0.22)",
              borderBottom: "1px solid rgba(0,0,0,0.28)",
            }}
          />
        ))}

        {/* Base glow */}
        <div
          className="absolute bottom-0 inset-x-0 z-[8]"
          style={{
            height: "35%",
            background:
              "linear-gradient(to top, rgba(249,115,22,0.14), transparent)",
          }}
        />

        {/* Lock bar */}
        <div
          className="absolute bottom-9 inset-x-8 h-4 rounded-full z-20"
          style={{
            background: "rgba(63,63,70,0.85)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        />

        {/* Unit number */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded z-20"
          style={{
            background: "rgba(0,0,0,0.75)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span className="text-[10px] font-black text-white/40 tracking-[0.2em]">
            UNIT #247
          </span>
        </div>

        {/* Auction badge */}
        <div
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded"
          style={{
            background: "rgb(249,115,22)",
            boxShadow: "0 4px 14px rgba(249,115,22,0.45)",
          }}
        >
          <span className="size-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-black text-white tracking-widest uppercase">
            Auction Live
          </span>
        </div>
      </div>

      {/* Info bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "#111111",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div>
          <p className="text-sm font-bold text-white">Winning Bid: $185</p>
          <p className="text-xs text-zinc-600 mt-0.5">Est. resale: $750–$1,200</p>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <CheckCircle2 className="size-3.5 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-400">Won</span>
        </div>
      </div>
    </div>
  )
}

export default function StorageSection() {
  return (
    <section
      id="reselling"
      className="relative py-28 overflow-hidden"
      style={{ background: "#111111" }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 105% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
              Pillar 01 · Storage Unit Reselling
            </p>
            <h2
              className="font-black uppercase leading-none text-white mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Real Finds.
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
                Real Flips.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              We actively source inventory from abandoned storage unit auctions and
              Facebook Marketplace. Every item is physically acquired, sorted,
              photographed, and listed. This is not dropshipping — it&apos;s real
              operations.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-10">
              Every unit is a mystery. We&apos;ve built a disciplined process for
              evaluating, bidding, sorting, and listing that makes each acquisition
              consistently profitable.
            </p>

            <div className="space-y-3">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.num}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                      <span className="text-[10px] font-black text-orange-500 tracking-wider">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Icon className="size-4 text-orange-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1 text-sm">{step.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 lg:pt-4">
            <StorageUnitArt />

            {/* Recent flips table */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="px-4 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                  Recent Flips
                </p>
              </div>
              {recentFlips.map((flip, i) => (
                <div
                  key={flip.item}
                  className="flex items-center gap-4 px-4 py-3"
                  style={{
                    background:
                      i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                    borderBottom:
                      i < recentFlips.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <p className="flex-1 text-sm font-semibold text-white truncate">
                    {flip.item}
                  </p>
                  <p className="text-xs text-zinc-600 shrink-0">
                    Bought {flip.bought} · {flip.days}d
                  </p>
                  <p className="text-sm font-black text-emerald-400 shrink-0 tabular-nums">
                    +${flip.profit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
