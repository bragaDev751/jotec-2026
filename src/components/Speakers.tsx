"use client";
import Image from "next/image";
import { Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const speakers = [
  { 
    id: 1, 
    name: 'Renato Rodrigues', 
    role: '19/05 — 19:00h',
    topic: 'IA EM TEMPO REAL NA PRÁTICA: DO SENSOR À DECISÃO INTELIGENTE COM IOT E DADOS',
    description: 'Explore a integração de hardware e inteligência para decisões instantâneas no mundo real.',
    image: '/RENATO RODRIGUES.jpg' 
  },
  { 
    id: 2, 
    name: 'Tiago Linhares', 
    role: '20/05 — 18:45h',
    topic: 'TRANSFORMAÇÃO DIGITAL ATRAVÉS DA INTELIGÊNCIA ARTIFICIAL',
    description: 'Como a IA está a redefinir modelos de negócios e a impulsionar a inovação global hoje.',
    image: '/Tiago Linhares.jpg' 
  },
  { 
    id: 3, 
    name: 'Emannuel Diego', 
    role: '20/05 — 19:50h',
    topic: 'IA E VISÃO COMPUTACIONAL NA AGRICULTURA: REVOLUÇÃO TECNOLÓGICA',
    description: 'O futuro da produção agrícola otimizado por algoritmos e processamento digital de imagem.',
    image: '/Emannuel Diego.jpg' 
  },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-24 px-6 relative bg-blue-950 overflow-hidden">
      
      {/* Background Decorativo sutil integrado ao azul */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
          >
            TIME DE <span className="text-purple-400">ELITE</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-purple-500/40 mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {speakers.map((s, index) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full max-w-[310px] min-h-[640px] flex group"
            >
              {/* Card Vertical integrado ao padrão de cores do site */}
              <div className="relative flex flex-col w-full bg-blue-900/10 border border-purple-500/10 rounded-[3.5rem] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-blue-900/20 overflow-hidden shadow-2xl">
                
                {/* Header: Foto e Nome */}
                <div className="relative z-10 mb-8">
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    <div className="w-full h-full rounded-[2.8rem] overflow-hidden border-2 border-purple-500/20 group-hover:border-purple-400 transition-all duration-500 shadow-inner">
                      <Image 
                        src={s.image} 
                        alt={s.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 p-2.5 rounded-2xl shadow-lg">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-purple-100 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-[10px] text-purple-400 font-black uppercase tracking-[0.25em] mt-2 bg-purple-500/5 py-1 rounded-full border border-purple-500/10">
                    {s.role}
                  </p>
                </div>

                {/* Meio: Tema centralizado */}
                <div className="relative z-10 flex-grow flex flex-col justify-center border-y border-purple-500/10 py-8 my-4">
                  <h4 className="text-[17px] font-black text-white leading-[1.3] tracking-tight uppercase italic group-hover:text-purple-300 transition-colors">
                    &quot;{s.topic}&quot;
                  </h4>
                </div>

                {/* Base: Descrição */}
                <div className="relative z-10 pt-4">
                  <div className="flex justify-center mb-3">
                    <Sparkles className="w-4 h-4 text-purple-500/20" />
                  </div>
                  <p className="text-[13px] text-blue-200/40 leading-relaxed font-medium italic">
                    {s.description}
                  </p>
                </div>

                {/* Efeito de brilho interno ao passar o mouse */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Aura Externa (Glow) */}
              <div className="absolute -inset-1 bg-gradient-to-b from-purple-600/10 to-blue-600/10 rounded-[3.6rem] -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}