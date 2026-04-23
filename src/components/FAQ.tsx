"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Preciso ter conhecimento prévio?", a: "Não! A JOTEC é feita para todos os níveis. Nosso foco é a troca de experiências e o aprendizado prático." },
  { q: "O evento terá certificado?", a: "Sim! Todos os participantes recebem certificado oficial de horas complementares." },
  { q: "Onde vai ser?", a: "Divulgaremos os detalhes do local em breve." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-blue-950 relative overflow-hidden">
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Dúvidas <span className="text-purple-400">Frequentes</span>
          </h2>
          <p className="text-blue-200/60">Perguntas comuns sobre o evento.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i 
                  ? 'bg-blue-900/50 border-purple-500/40' 
                  : 'bg-blue-900/20 border-purple-500/20 hover:border-purple-500/50'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className={`font-semibold transition-colors ${openIndex === i ? 'text-purple-400' : 'text-white'}`}>
                  {item.q}
                </span>
                <div className={`p-1 rounded-full transition-all duration-300 ${openIndex === i ? 'rotate-180 bg-purple-500 text-white' : 'bg-blue-950 text-blue-300'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-6 pb-6 text-sm text-blue-200/80 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}