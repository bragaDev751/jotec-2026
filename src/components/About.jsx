"use client";
import { BrainCircuit, Code, Globe, Zap, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { 
    icon: BrainCircuit, 
    title: "Vanguarda em IA", 
    desc: "Palestras imersivas sobre LLMs, redes neurais e como a Inteligência Artificial está redefinindo o mercado de desenvolvimento." 
  },
  { 
    icon: Code, 
    title: "Workshops 'Mão na Massa'", 
    desc: "Laboratórios práticos com tecnologias reais. Saia do evento com código escrito e projetos iniciados, não apenas com teoria." 
  },
  { 
    icon: Globe, 
    title: "Networking Acadêmico", 
    desc: "Conecte-se com acadêmicos, líderes de tecnologia e potenciais mentores. O ambiente ideal para impulsionar sua carreira." 
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-blue-950 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-[10%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por que participar da <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">VIII JOTEC?</span>
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto font-light">
            Não é apenas um evento. É uma imersão completa no ecossistema tecnológico, desenhada para quem quer sair do básico e dominar o futuro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-purple-500/10 bg-blue-900/20 backdrop-blur-md flex flex-col items-start text-left hover:border-purple-500/30 hover:bg-blue-900/40 transition-all duration-300 group"
            >
              <div className="p-4 rounded-2xl bg-purple-950/50 mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-blue-200/60 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}