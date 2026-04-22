import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import StickyCTA from "@/components/StickyCTA";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal"; 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Speakers /></Reveal>
        <Reveal><FAQ /></Reveal>
        <StickyCTA />
      </div>

      <footer className="py-10 border-t border-blue-900 text-center text-blue-400 text-sm">
        <p>© 2026 VIII JOTEC - Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}