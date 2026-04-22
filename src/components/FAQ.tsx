"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Preciso ter conhecimento prévio?", a: "Não! A JOTEC é feita para todos os níveis." },
  { q: "O evento terá certificado?", a: "Sim, emitiremos certificado oficial de horas." },
  { q: "Onde vai ser?", a: "No [Local] e com transmissão ao vivo." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Dúvidas Frequentes</h2>
      <div className="border-t border-blue-900/50">
        {faqs.map((item, i) => (
          <div key={i} className="border-b border-blue-900/50">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              className="w-full py-5 text-left flex justify-between items-center group"
            >
              <span className="text-sm font-medium text-blue-200 group-hover:text-yellow-400 transition-colors">
                {item.q}
              </span>
              {openIndex === i ? <Minus className="w-4 h-4 text-yellow-400" /> : <Plus className="w-4 h-4 text-blue-500" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-xs text-blue-400 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}