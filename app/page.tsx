import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero"
import StatsSection from "@/components/sections/stats"
import PillarsSection from "@/components/sections/pillars"
import StorageSection from "@/components/sections/storage"
import CrosslistingSection from "@/components/sections/crosslisting"
import ContentSection from "@/components/sections/content"
import AboutSection from "@/components/sections/about"
import ContactSection from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PillarsSection />
        <StorageSection />
        <CrosslistingSection />
        <ContentSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
