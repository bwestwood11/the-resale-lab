const platforms = [
  { name: "eBay", color: "text-yellow-400" },
  { name: "Mercari", color: "text-red-400" },
  { name: "Poshmark", color: "text-rose-400" },
  { name: "Depop", color: "text-orange-400" },
  { name: "Facebook", color: "text-blue-400" },
  { name: "Etsy", color: "text-amber-400" },
  { name: "Vinted", color: "text-teal-400" },
  { name: "Amazon", color: "text-orange-400" },
]

export default function PlatformsSection() {
  return (
    <section className="bg-zinc-900 border-b border-white/8 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium shrink-0">
            Built for resellers on
          </p>
          <div
            className="w-px h-4 bg-white/10 hidden sm:block shrink-0"
            aria-hidden
          />
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2">
            {platforms.map((p) => (
              <span
                key={p.name}
                className={`text-sm font-semibold ${p.color} opacity-50 hover:opacity-80 transition-opacity cursor-default`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
