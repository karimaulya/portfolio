import Hero from '../components/Hero'
import Services from '../components/Services'
import Experience from '../components/Experience'
import PortfolioPreview from '../components/PortfolioPreview'
import Marquee from '../components/Marquee'
import ContactCta from '../components/ContactCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <PortfolioPreview />
      <Marquee />
      <ContactCta />
    </>
  )
}
