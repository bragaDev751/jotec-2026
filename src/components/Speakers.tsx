"use client";
import Image from "next/image";
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const speakers = [
  { 
    id: 1, 
    name: 'Renato Rodrigues', 
    role: 'IA em Tempo Real e IoT', 
    image: '/RENATO RODRIGUES.jpg' 
  },
  { 
    id: 2, 
    name: 'Tiago Linhares', 
    role: 'Transformação Digital e IA', 
    image: '/Tiago Linhares.jpg' 
  },
  { 
    id: 3, 
    name: 'Emannuel Diego', 
    role: 'Visão Computacional na Agricultura', 
    image: '/Emannuel Diego.jpg' 
  },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-24 px-6 relative bg-blue-950 overflow-hidden">
      
      {/* Background sutil para manter o padrão */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Time de <span className="text-purple-400">Elite</span>
          </motion.h2>
          <p className="text-blue-200/60 text-lg max-w-xl mx-auto">
            Palestrantes confirmados para as trilhas magnas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {speakers.map((s, index) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full max-w-[320px] group"
            >
              {/* Card Principal */}
              <div className="relative bg-blue-900/10 border border-purple-500/10 rounded-[2.5rem] p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-blue-900/20">
                
                {/* Container da Imagem com tamanho equilibrado */}
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-[2rem] border-2 border-purple-500/20 shadow-xl">
                  <Image 
                    src={s.image} 
                    alt={s.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay sutil para dar acabamento */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400 opacity-60" />
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {s.name}
                    </h3>
                  </div>
                  
                  <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <p className="text-[11px] font-black text-purple-300 uppercase tracking-[0.15em]">
                      {s.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow sutil atrás do card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 to-blue-600/0 rounded-[2.6rem] -z-10 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}