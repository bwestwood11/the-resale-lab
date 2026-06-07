import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero"
import PlatformsSection from "@/components/sections/platforms"
import AboutSection from "@/components/sections/about"
import PillarsSection from "@/components/sections/pillars"
import CrosslistingSection from "@/components/sections/crosslisting"
import StorageSection from "@/components/sections/storage"
import ContentSection from "@/components/sections/content"
import TrustSection from "@/components/sections/trust"
import ContactSection from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlatformsSection />
        <AboutSection />
        <PillarsSection />
        <CrosslistingSection />
        <StorageSection />
        <ContentSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
