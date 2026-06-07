import { ExternalLink } from "lucide-react"

const platforms = [
  {
    name: "YouTube",
    description: "Storage unit hauls, reselling vlogs & business updates",
    href: "#",
    pill: "bg-red-500/10 text-red-400 border-red-500/20",
    dot: "bg-red-500",
  },
  {
    name: "Instagram",
    description: "Behind-the-scenes inventory & business highlights",
    href: "#",
    pill: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    dot: "bg-pink-500",
  },
  {
    name: "TikTok",
    description: "Short-form reselling content, finds & tips",
    href: "#",
    pill: "bg-white/5 text-white/50 border-white/10",
    dot: "bg-white/30",
  },
]

export default function ContentSection() {
  return (
    <section id="content" className="relative bg-zinc-900 py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              Content & Social Media
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Follow the
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                journey.
              </span>
            </h2>
            <p className="text-zinc-400 text-[17px] leading-relaxed mb-5">
              We document parts of our reselling operations and business growth
              through YouTube and social media — storage unit hauls, software
              updates, individual item flips, and an honest look at what building
              a resale business actually looks like.
            </p>
            <p className="text-zinc-400 text-[17px] leading-relaxed">
              The content is real, not scripted. We share wins and setbacks alike
              — because that&apos;s what running a real business looks like.
            </p>
          </div>

          <div className="space-y-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${platform.pill}`}>
                    <span className={`size-1.5 rounded-full ${platform.dot}`} />
                    {platform.name}
                  </div>
                  <span className="text-zinc-500 text-sm">{platform.description}</span>
                </div>
                <ExternalLink className="size-4 text-zinc-700 group-hover:text-orange-400 transition-colors shrink-0 ml-3" />
              </a>
            ))}

            <p className="text-zinc-700 text-xs pt-1 px-1">
              Social channels launching soon — currently in active development.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
