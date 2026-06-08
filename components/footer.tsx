import { Separator } from "@/components/ui/separator"

const footerNav = [
  {
    label: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Verticals",
    links: [
      { name: "Reselling", href: "#reselling" },
      { name: "Software", href: "#software" },
      { name: "Content", href: "#content" },
    ],
  },
  {
    label: "Social",
    links: [
      { name: "YouTube", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "Facebook", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-black text-black tracking-tight shrink-0"
                style={{ background: "#f97316" }}
              >
                TRL
              </div>
              <p className="text-base font-black text-white">The Resale Lab</p>
            </div>
            <p className="text-xs text-zinc-600 font-semibold mb-4">
              The Resale Lab, LLC · Registered Business
            </p>
            <p className="text-sm text-zinc-600 max-w-xs leading-relaxed mb-4">
              Storage unit reselling, crosslisting software, and authentic reselling
              content. A registered LLC.
            </p>
            <a
              href="mailto:contact@theresalelab.com"
              className="text-sm text-orange-500 hover:text-orange-400 transition-colors font-semibold"
            >
              contact@theresalelab.com
            </a>
          </div>

          <div className="flex gap-10 sm:gap-16">
            {footerNav.map((section) => (
              <div key={section.label}>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">
                  {section.label}
                </p>
                <div className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator style={{ background: "rgba(255,255,255,0.06)" }} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6">
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} The Resale Lab, LLC. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">Reselling · Software · Content</p>
        </div>
      </div>
    </footer>
  )
}
