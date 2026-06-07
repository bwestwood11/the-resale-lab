const stats = [
  { value: "3", label: "Business verticals" },
  { value: "LLC", label: "Registered company" },
  { value: "8+", label: "Target platforms" },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              A resale company built around technology, operations, and growth.
            </h2>

            {/* Mini stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-zinc-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-zinc-900 mb-0.5">{s.value}</p>
                  <p className="text-xs text-zinc-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5 text-zinc-500 text-[17px] leading-relaxed">
            <p>
              The Resale Lab, LLC is a registered business built around the modern
              resale economy. We operate across three interconnected verticals:
              software development, real-world resale operations, and content
              creation — all centered on the belief that reselling can be run like
              a real, scalable business.
            </p>
            <p>
              We don&apos;t just talk about reselling. We do it every day. We build
              tools to make it more efficient. And we document the journey so others
              can learn from what we discover along the way.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
