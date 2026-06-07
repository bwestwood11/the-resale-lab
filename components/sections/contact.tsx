import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-28 overflow-hidden">
      {/* Subtle orange gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)",
        }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
            Contact
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-5">
            Get in touch.
          </h2>

          <p className="text-zinc-500 text-[17px] leading-relaxed mb-10">
            Interested in our software, want to collaborate, or have a question
            about our operations? We&apos;d love to hear from you.
          </p>

          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white border-0 h-12 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/20"
          >
            <a href="mailto:contact@theresalelab.com">
              <Mail className="mr-2.5 size-4" />
              contact@theresalelab.com
              <ArrowRight className="ml-2.5 size-4" />
            </a>
          </Button>

          <p className="mt-6 text-zinc-400 text-sm">
            We typically respond within 1–2 business days.
          </p>
        </div>
      </div>
    </section>
  )
}
