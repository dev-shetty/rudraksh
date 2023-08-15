import FAQs from "@/components/faqs"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"

export default function Landing() {
  return (
    <main>
      <Introduction />
      <HowItWorks />
      <FAQs />
      <Footer />
    </main>
  )
}
