"use client";
import { BrainCircuit, DatabaseZap, Unplug } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: BrainCircuit, title: "IA Aplicada", description: "Vá além do chat. Descubra como aplicar inteligência artificial real em problemas do dia a dia." },
  { icon: DatabaseZap, title: "Dados em Tempo Real", description: "Aprenda a arquitetar sistemas que processam e reagem a milhões de eventos instantaneamente." },
  { icon: Unplug, title: "Conexões Além do Código", description: "Networking estratégico com líderes de mercado que estão moldando o futuro." }
];

export default function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <span className="text-yellow-400 font-bold tracking-[0.2em] text-xs uppercase bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-700/50">O Propósito</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">A Ponte entre Teoria e o <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Futuro Prático</span>.</h2>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className={`bg-blue-950/40 p-8 rounded-3xl border border-blue-800/50 backdrop-blur-xl hover:border-yellow-400/30 transition-all ${i === 2 ? 'md:col-span-2' : ''}`}
              >
                <feature.icon className="w-8 h-8 text-yellow-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}