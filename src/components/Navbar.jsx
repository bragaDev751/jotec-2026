"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Destaques", href: "#sobre" },
  { name: "Palestrantes", href: "#palestrantes" },
  { name: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-blue-950/80 border-b border-purple-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo VIII JOTEC" width={120} height={40} className="h-10 w-auto" />
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium items-center text-white">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="uppercase tracking-widest hover:text-purple-400 transition-all duration-300 border-b border-transparent hover:border-purple-400"
            >
              {link.name}
            </a>
          ))}
          
          <a href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
             target="_blank"
             className="bg-purple-600/20 border border-purple-500 text-purple-200 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all">
            Inscrição
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-md border-b border-purple-900 p-6 flex flex-col gap-6 text-center animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg text-white uppercase tracking-widest hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
            onClick={() => setIsOpen(false)}
            target="_blank"
            className="border border-purple-500 text-purple-300 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white"
          >
            Inscrição
          </a>
        </div>
      )}
    </nav>
  );
}