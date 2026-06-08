import { CheckCircle2 } from "lucide-react"

const statCards = [
  { val: "LLC", label: "Registered Company", sub: "The Resale Lab, LLC" },
  { val: "3", label: "Verticals", sub: "Ops · Software · Content" },
  { val: "8+", label: "Platforms", sub: "For crosslisting" },
  { val: "Real", label: "Operations", sub: "No dropshipping" },
]

const points = [
  "We physically handle every item we sell — no dropshipping or retail arbitrage",
  "Our crosslisting software is tested on our own daily operations before any public launch",
  "All content is filmed from real flips, not staged or recreated scenarios",
  "A registered LLC — not a side hustle or a hobby project",
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
              About The Resale Lab
            </p>
            <h2
              className="font-black uppercase leading-tight text-zinc-900 mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Built by operators.
              <br />
              Not just observers.
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Most reselling content is affiliate-driven or built by people who haven&apos;t
              sourced a storage unit. We&apos;re different — a registered LLC doing the work,
              building the tools, and documenting what&apos;s real.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {statCards.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm"
                >
                  <p
                    className="text-3xl font-black text-orange-500 mb-0.5 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    {s.label}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10 space-y-5">
            <p className="text-zinc-600 text-lg leading-relaxed">
              The Resale Lab, LLC is a registered business built around the modern
              resale economy. We operate across three interconnected verticals —
              software development, real-world resale operations, and content creation —
              all founded on the belief that reselling is a legitimate, scalable business
              when operated professionally.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              We source inventory from abandoned storage unit auctions and Facebook
              Marketplace, build tools to streamline the resale workflow, and document
              the journey so other resellers can learn from our wins and our mistakes alike.
            </p>

            <div className="pt-2 space-y-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
