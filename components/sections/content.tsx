import { ExternalLink } from "lucide-react"

const platforms = [
  {
    name: "YouTube",
    handle: "@TheResaleLab",
    desc: "Full-length storage unit hauls, flip reveals, P&L breakdowns, and software build vlogs. The full story, uncut.",
    href: "#",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.07)",
    border: "rgba(239,68,68,0.15)",
    type: "Long-form video",
  },
  {
    name: "TikTok",
    handle: "@theresalelab",
    desc: "Quick flip reveals, reselling tips, before-and-after storage unit finds, and bite-sized reselling content.",
    href: "#",
    color: "rgba(255,255,255,0.55)",
    bg: "rgba(255,255,255,0.025)",
    border: "rgba(255,255,255,0.08)",
    type: "Short-form video",
  },
  {
    name: "Facebook",
    handle: "The Resale Lab",
    desc: "Community updates, Facebook Marketplace sourcing content, and business highlights for the reselling community.",
    href: "#",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.15)",
    type: "Community & posts",
  },
]

const topics = [
  "Storage unit hauls",
  "Flip reveals",
  "P&L breakdowns",
  "Sourcing strategies",
  "Software builds",
  "Pricing for profit",
  "Facebook Marketplace",
  "eBay tips & tricks",
]

export default function ContentSection() {
  return (
    <section
      id="content"
      className="relative py-28 overflow-hidden"
      style={{ background: "#111111" }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at -5% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
              Pillar 02 · Content Creation
            </p>
            <h2
              className="font-black uppercase leading-none text-white mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Follow
              <br />
              The{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hustle.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-5">
              We document the real side of reselling — the storage units, the hauls,
              the flips, the software we&apos;re building, and the actual P&L. No scripted
              drama. Just the business as it happens.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Channels launching soon. Subscribe and follow for authentic reselling
              content from operators who are actually in the field every day.
            </p>

            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white/30 border border-white/[0.07]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Platform cards */}
          <div className="space-y-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group block p-5 rounded-2xl relative overflow-hidden transition-all duration-200"
                style={{
                  background: platform.bg,
                  border: `1px solid ${platform.border}`,
                }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${platform.color}40, transparent)`,
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold"
                      style={{
                        background: `${platform.color}14`,
                        color: platform.color,
                        borderColor: `${platform.color}30`,
                      }}
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ background: platform.color }}
                      />
                      {platform.name}
                    </div>
                    <span className="text-zinc-600 text-xs">{platform.handle}</span>
                  </div>
                  <ExternalLink className="size-4 text-zinc-700 group-hover:text-orange-400 transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mt-3">
                  {platform.desc}
                </p>
                <div
                  className="flex items-center justify-between mt-4 pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-[10px] text-zinc-700 font-semibold uppercase tracking-wider">
                    {platform.type}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "rgba(249,115,22,0.5)" }}
                  >
                    Launching Soon
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
