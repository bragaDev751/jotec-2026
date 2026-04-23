import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="bg-blue-950 min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="pt-20">
        <Hero />
        <About />
        <Speakers />
        
        <FAQ />
      </div>

      <footer className="py-10 border-t border-purple-900/10 text-center text-blue-400 text-sm bg-blue-950">
        <p>© 2026 VIII JOTEC - Todos os direitos reservados.</p>
      </footer>
      
      <StickyCTA />
    </main>
  );
}