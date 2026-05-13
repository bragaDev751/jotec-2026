"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const workshops = [
  { 
    id: 1, 
    name: 'Prof. Me. Marcelo Martins & Prof. Ma. Ana Oliveira', 
    role: 'Oficina 01', 
    topic: 'UX e Acessibilidade Digital', 
    images: ['/workshops/MARCELO MARTINS.jpg', '/workshops/ANA OLIVEIRA.jpg'] 
  },
  { 
    id: 2, 
    name: 'Eurico', 
    role: 'Oficina 02', 
    topic: 'Workflow Fullstack Preciso com IAs Gratuitas', 
    images: ['/workshops/Cópia de EURICO.jpg'] 
  },
  { 
    id: 3, 
    name: 'Jean Pantoja', 
    role: 'Oficina 03', 
    topic: 'Engenharia de Qualidade na Era da IA', 
    images: ['/workshops/Jean.jpg'] 
  },
  { 
    id: 4, 
    name: 'Francisco Viana', 
    role: 'Oficina 04', 
    topic: 'Criando e Publicando Seu App Flutter na Play Store', 
    images: ['/workshops/FRANCISCO VIANA.PNG'] 
  },
  { 
    id: 5, 
    name: 'Damião Gomes', 
    role: 'Oficina 05', 
    topic: 'GameMaker Engine: Desenvolvimento de Jogos 2D', 
    images: ['/workshops/DAMIAO.jpg'] 
  },
  { 
    id: 6, 
    name: 'Sharon Oliveira', 
    role: 'Oficina 06', 
    topic: 'Smart Católica: UI/UX e a Antecipação do Usuário', 
    images: ['/workshops/SHARON.jpg'] 
  },
  { 
    id: 7, 
    name: 'Aldenisa Peixoto', 
    role: 'Oficina 07', 
    topic: 'Videoteca: Acessibilidade na Web e Inclusão Digital', 
    images: ['/workshops/ALDENISA PEIXOTO.jpg'] 
  },
];

export default function Workshops() {
  return (
    <section id="oficinas" className="py-24 px-6 relative bg-blue-950 overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Oficinas <span className="text-purple-400">Práticas</span>
          </motion.h2>
          <p className="text-blue-200/60 max-w-2xl mx-auto text-lg">
            Dia 21/05 — Sessões imersivas com especialistas do mercado.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {workshops.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-blue-900/10 border border-purple-500/10 rounded-[2.5rem] p-8 text-center backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px]"
            >
              <span className="absolute top-6 right-8 text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                {item.role}
              </span>

              {/* Área da Imagem */}
              <div className="relative h-32 mb-6 flex justify-center items-center">
                {item.images.length > 1 ? (
                  <div className="flex -space-x-4">
                    {item.images.map((img, idx) => (
                      <div key={idx} className="relative w-24 h-24 rounded-2xl border-2 border-purple-500/20 overflow-hidden shadow-xl bg-blue-900/50">
                        <Image 
                          src={img} 
                          alt={item.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative w-24 h-24 rounded-2xl border-2 border-purple-500/20 overflow-hidden shadow-xl bg-blue-900/50">
                    <Image 
                      src={item.images[0]} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight min-h-[60px] flex items-center justify-center tracking-tight">
                  {item.topic}
                </h3>
                
                <div className="pt-4 border-t border-purple-500/10">
                  <p className="text-xs font-bold text-purple-300 uppercase tracking-wider leading-relaxed">
                    {item.name}
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