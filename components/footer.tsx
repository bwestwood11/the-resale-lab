import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Software", href: "#crosslisting" },
  { label: "Storage", href: "#storage" },
  { label: "Content", href: "#content" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <p className="text-xl font-bold">
              The <span className="text-orange-500">Resale</span> Lab
            </p>
            <p className="text-sm text-white/40 mt-1">The Resale Lab, LLC</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} The Resale Lab, LLC. All rights reserved.
          </p>
          <a
            href="mailto:contact@theresalelab.com"
            className="text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            contact@theresalelab.com
          </a>
        </div>
      </div>
    </footer>
  )
}
