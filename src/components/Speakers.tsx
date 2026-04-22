"use client";
import { UserCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const speakers = [
  { id: 1, name: 'Revelação I', title: '', isMystery: true },
  { id: 2, name: 'Revelação II', title: '', isMystery: true },
  { id: 3, name: 'Revelação III', title: '', isMystery: true },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-32 px-6 bg-blue-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block bg-blue-900 border border-blue-700 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            O TIME DE ELITE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Palestrantes</span>
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">
            Grandes nomes da tecnologia estão confirmados. Prepare-se para conexões que vão transformar sua visão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((s) => (
            <motion.div 
              key={s.id} 
              whileHover={{ y: -5 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-blue-700/50 to-transparent hover:from-yellow-400/50 transition-all duration-500"
            >
              <div className="bg-blue-900/60 rounded-3xl p-8 flex flex-col items-center text-center h-full backdrop-blur-xl border border-blue-800/50 shadow-2xl shadow-blue-950/30">
                
                <div className="relative w-36 h-36 rounded-full bg-blue-950 flex items-center justify-center mb-8 border-2 border-blue-800 shadow-inner overflow-hidden group-hover:border-yellow-400/50 transition-colors">
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent animate-pulse" />
                  <div className="absolute -inset-2 bg-blue-600/10 rounded-full blur-xl animate-pulse delay-150" />
                  
                  <UserCircle2 className="w-20 h-20 text-blue-800 relative z-10 group-hover:text-yellow-400/70 transition-colors duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-blue-900 p-2 rounded-full border border-blue-700 z-20 group-hover:border-yellow-400/50">
                    <Sparkles className="w-4 h-4 text-yellow-400/60 group-hover:text-yellow-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-yellow-400 transition-colors">
                  {s.name}
                </h3>
                
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/5 text-yellow-400 text-xs rounded-full font-bold uppercase tracking-widest border border-yellow-400/20 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  {s.title}
                </span>

                <p className="text-blue-200 text-sm mt-5 leading-relaxed">
                  Pioneiro em soluções disruptivas, com trajetória focada na JOTEC 2026.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}