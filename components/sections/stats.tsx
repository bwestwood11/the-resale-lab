const stats = [
  { value: "100+", label: "Items Flipped", note: "and growing" },
  { value: "8+", label: "Target Platforms", note: "for crosslisting" },
  { value: "3", label: "Business Verticals", note: "ops · software · content" },
  { value: "LLC", label: "Registered", note: "The Resale Lab, LLC" },
]

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-6 text-center ${
                i < stats.length - 1 ? "border-r" : ""
              } ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-bold text-zinc-400 mb-0.5">{stat.label}</p>
              <p className="text-xs text-zinc-600">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
