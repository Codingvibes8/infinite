 import type { Metadata } from "next"
 import Hero from "@/components/hero"
// import Services from "@/components/services"
// import About from "@/components/about"
// import Portfolio from "@/components/portfolio"
// import Contact from "@/components/contact"
// import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "DevSolutions | Professional Web Development Services",
  description:
    "Professional web development services including custom websites, workflow automation, social media management, and SEO optimization.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
   
      <Hero />
   {/*    <Services />
      <About />
      <Portfolio />
      <CTA />
      <Contact /> */}
    </main>
  )
}
