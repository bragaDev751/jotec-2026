"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Preciso ter conhecimento prévio?", a: "Não! A JOTEC é feita para todos os níveis, do iniciante ao avançado. Nosso foco é a troca de experiências e o aprendizado prático." },
  { q: "O evento terá certificado?", a: "Sim! Todos os participantes que confirmarem presença no evento receberão certificado oficial de horas complementares." },
  { q: "Onde vai ser?", a: "Divulgaremos os locais do evento em breve." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Dúvidas <span className="text-yellow-400">Frequentes</span>
        </h2>
        <p className="text-blue-200">Algo ainda não está claro? Confira as respostas abaixo.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <motion.div 
            key={i} 
            className={`group bg-blue-900/20 rounded-2xl border transition-all duration-300 overflow-hidden ${
              openIndex === i ? 'border-yellow-400/50 bg-blue-900/40 shadow-lg shadow-yellow-400/5' : 'border-blue-800/50 hover:border-blue-700'
            }`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <span className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                {item.q}
              </span>
              <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-yellow-400 text-blue-950' : 'bg-blue-800 text-blue-300'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-6 pb-6 text-sm text-blue-200 leading-relaxed border-t-0">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}