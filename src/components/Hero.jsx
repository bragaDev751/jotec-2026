"use client";
import { ArrowRight, Gift } from 'lucide-react';
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
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">
            VIII JOTEC 2026
          </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-lg"
        >
          PRÉ-VENDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">EXCLUSIVA!</span>
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 font-light"
        >
          VIII JOTEC - Garanta seu ingresso com BRINDE!
        </motion.p>
      </div>

      <motion.a 
        href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
        target="_blank"
        className="group mt-10 bg-yellow-400 hover:bg-white text-blue-950 font-bold py-5 px-10 rounded-xl text-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all z-10 flex items-center gap-2"
      >
        COMPRAR AGORA - LOTE LIMITADO!
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.a>

      <motion.div 
        className="mt-12 p-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-md max-w-lg shadow-2xl z-10"
      >
        <div className="flex items-center justify-center gap-3 text-yellow-400 mb-2">
            <Gift className="w-5 h-5" />
            <h3 className="font-bold uppercase tracking-widest text-sm">Receba um brinde exclusivo</h3>
        </div>
        <p className="text-blue-100/80 text-sm">Kit JOTEC e pin exclusivo (LIMITADO!)</p>
      </motion.div>
    </section>
  );
}