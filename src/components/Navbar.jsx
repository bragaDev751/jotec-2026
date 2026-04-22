"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-blue-950/80 backdrop-blur-md border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-yellow-400 tracking-tighter">VIII JOTEC</span>
        
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a>
          <a href="#palestrantes" className="hover:text-yellow-400 transition-colors">Palestrantes</a>
          <a href="https://doity.com.br/seu-link-aqui" className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            Inscrever-se
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-950 border-b border-blue-800 p-6 flex flex-col gap-4">
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg">Sobre</a>
          <a href="#palestrantes" onClick={() => setIsOpen(false)} className="text-lg">Palestrantes</a>
        </div>
      )}
    </nav>
  );
}