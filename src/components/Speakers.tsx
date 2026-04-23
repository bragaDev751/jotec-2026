"use client";
import { Lock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const speakers = [
  { id: 1, name: 'Atração Surpresa', role: 'Em breve' },
  { id: 2, name: 'Atração Surpresa', role: 'Em breve' },
  { id: 3, name: 'Atração Surpresa', role: 'Em breve' },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-32 px-6 relative overflow-hidden bg-blue-950">
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Time de <span className="text-purple-400">Elite</span>
          </h2>
          <p className="text-blue-200/60 text-xl max-w-2xl mx-auto">
            Preparando os nomes que irão transformar sua visão. 
            <span className="block text-sm mt-2 text-purple-400/80 font-bold tracking-widest uppercase">Novidades em breve</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((s) => (
            <motion.div 
              key={s.id} 
              whileHover={{ y: -5 }}
              className="group relative bg-blue-950/60 p-[2px] rounded-[2.5rem] border border-purple-500/10 backdrop-blur-xl transition-all duration-500"
            >
              <div className="bg-blue-950/90 rounded-[2.4rem] p-10 flex flex-col items-center text-center h-full opacity-80">
                
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full bg-blue-900/30 flex items-center justify-center border-2 border-dashed border-purple-500/30">
                    <Lock className="w-10 h-10 text-purple-500/30" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-900 p-3 rounded-full border-4 border-blue-950">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight opacity-70">
                    {s.name}
                  </h3>
                  <p className="text-sm font-bold text-blue-400/50 uppercase tracking-widest px-4 py-1.5 rounded-full inline-block border border-blue-900/50">
                    {s.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}