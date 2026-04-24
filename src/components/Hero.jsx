"use client";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center pt-20 overflow-hidden bg-blue-950">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="space-y-6 max-w-3xl z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-purple-500/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">
            VIII JOTEC 2026
          </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-lg"
        >
          PRIMEIRO LOTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">ABERTO!</span>
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 font-light"
        >
          Garanta sua vaga na jornada de tecnologia mais aguardada do ano.
        </motion.p>
      </div>

      <motion.a 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
        target="_blank"
        className="group mt-12 bg-purple-600 hover:bg-purple-500 text-white font-bold py-5 px-10 rounded-xl text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all z-10 flex items-center gap-2"
      >
        INSCREVER-SE AGORA
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.a>
    </section>
  );
}