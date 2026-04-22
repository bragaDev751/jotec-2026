"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-blue-950/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 tracking-tighter">
          VIII JOTEC
        </span>
        
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#sobre" className="text-blue-200 hover:text-yellow-400 transition-colors">Sobre</a>
          <a href="#palestrantes" className="text-blue-200 hover:text-yellow-400 transition-colors">Palestrantes</a>
          <a href="#faq" className="text-blue-200 hover:text-yellow-400 transition-colors">FAQ</a>
          <a href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" className="bg-yellow-400 text-blue-950 px-5 py-2 rounded-full font-bold hover:bg-white hover:scale-105 transition-all">
            Inscrever-se
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-md border-b border-blue-800 p-6 flex flex-col gap-6 text-center animate-in slide-in-from-top-4">
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-yellow-400">Sobre</a>
          <a href="#palestrantes" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-yellow-400">Palestrantes</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-yellow-400">FAQ</a>
          <a 
            href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
            onClick={() => setIsOpen(false)}
            className="bg-yellow-400 text-blue-950 py-3 rounded-full font-bold"
          >
            Inscrever-se
          </a>
        </div>
      )}
    </nav>
  );
}