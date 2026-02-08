import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services"; // This is the glass grid
import Testimonials from "@/components/sections/Testimonials"; // Existing one is okay, just needs review
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
