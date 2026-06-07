import { Building2, Package, Layers, Star, Film, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type TrustPoint = {
  icon: LucideIcon
  title: string
  description: string
  iconClass: string
}

const trustPoints: TrustPoint[] = [
  {
    icon: Building2,
    title: "Registered LLC",
    description:
      "The Resale Lab is a formally registered limited liability company — not a side project or informal operation.",
    iconClass: "bg-blue-500/12 text-blue-400",
  },
  {
    icon: Package,
    title: "Real Inventory, Real Sales",
    description:
      "We run active resale inventory purchased at auction and listed on live marketplace platforms. This is an operating business.",
    iconClass: "bg-amber-500/12 text-amber-400",
  },
  {
    icon: Layers,
    title: "Software-Driven Operations",
    description:
      "We use and build technology to run our operations — because the best tools get built by people who need them most.",
    iconClass: "bg-orange-500/12 text-orange-400",
  },
  {
    icon: Star,
    title: "Marketplace Experience",
    description:
      "Hands-on experience selling on eBay, Mercari, and other platforms — not just theory, but operational knowledge.",
    iconClass: "bg-yellow-500/12 text-yellow-400",
  },
  {
    icon: Film,
    title: "Documented Journey",
    description:
      "We make our progress public through content. Not just the wins — the full reality of building a business.",
    iconClass: "bg-rose-500/12 text-rose-400",
  },
  {
    icon: ShieldCheck,
    title: "Built for the Long Term",
    description:
      "Every decision is made with a sustainable, long-term business in mind — not short-term flipping.",
    iconClass: "bg-emerald-500/12 text-emerald-400",
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="relative bg-zinc-950 py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(249,115,22,0.07) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
            Why Trust Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            A real company.{" "}
            <span className="text-white/35">Real operations.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The Resale Lab isn&apos;t a concept — it&apos;s an active business with
            registered legal standing, real inventory, and skin in the game.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.06] hover:border-white/12 transition-all duration-300"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${point.iconClass}`}>
                  <Icon className="size-4" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{point.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
