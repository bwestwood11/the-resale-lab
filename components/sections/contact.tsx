import { Mail, ArrowRight, Code2, MessageSquare, Package } from "lucide-react"

const contactTypes = [
  {
    icon: Code2,
    title: "Software Waitlist",
    desc: "Interested in early access to our crosslisting tool? Get on the list and help shape the product.",
  },
  {
    icon: MessageSquare,
    title: "Partnerships",
    desc: "Content collabs, business opportunities, or joint ventures in the resale space.",
  },
  {
    icon: Package,
    title: "General Inquiries",
    desc: "Questions about what we sell, how we operate, or anything else about The Resale Lab.",
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(249,115,22,0.45) 50%, transparent 90%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[10px] font-black text-orange-500 tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2
            className="font-black uppercase leading-none text-white mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
            }}
          >
            Let&apos;s Talk.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Whether you have a software question, want to partner, or just want to
            connect — reach out directly. We&apos;re real people who reply.
          </p>

          <a
            href="mailto:brett@resalelab.io"
            className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl text-base font-bold text-black transition-all hover:-translate-y-0.5"
            style={{
              background: "#f97316",
              boxShadow: "0 12px 32px rgba(249,115,22,0.3)",
            }}
          >
            <Mail className="size-5" />
            brett@resalelab.io
            <ArrowRight className="size-5" />
          </a>

          <p className="mt-5 text-zinc-600 text-sm font-semibold">
            We typically respond within 1–2 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactTypes.map((ct) => {
            const Icon = ct.icon
            return (
              <div
                key={ct.title}
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="size-5 text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5">{ct.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{ct.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
