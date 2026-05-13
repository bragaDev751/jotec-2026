"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users } from 'lucide-react';

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
    name: 'Eurico Magalhães', 
    role: 'Oficina 02', 
    topic: 'Workflow Fullstack Preciso com IAs Gratuitas', 
    images: ['/workshops/Cópia de EURICO.jpg'] 
  },
  { 
    id: 3, 
    name: 'Jean Pantoja', 
    role: 'Oficina 03', 
    topic: 'Meu Fluxo de Trabalho como Engenheiro de Qualidade na Era da IA', 
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
    topic: 'GameMaker Engine: Uma Introdução ao Desenvolvimento de Jogos 2D', 
    images: ['/workshops/DAMIAO.jpg'] 
  },
  { 
    id: 6, 
    name: 'Sharon Oliveira', 
    role: 'Oficina 06', 
    topic: 'Smart Católica: Experiências Instantâneas: Como o UI/UX Antecipa o Usuário', 
    images: ['/workshops/SHARON.jpg'] 
  },
  { 
    id: 7, 
    name: 'Aldenisa Peixoto', 
    role: 'Oficina 07', 
    topic: 'Videoteca: Acessibilidade na Web e Inclusão Digital no Século XXI', 
    images: ['/workshops/ALDENISA PEIXOTO.jpg'] 
  },
];

export default function Workshops() {
  return (
    <section id="oficinas" className="py-24 px-6 relative bg-blue-950 overflow-hidden">
      
      {/* Background decorativo estático */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Conhecimento Prático</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            OFICINAS <span className="text-purple-400 italic font-light tracking-normal">JOTEC</span>
          </motion.h2>
          
          <p className="text-blue-200/50 max-w-2xl mx-auto text-lg font-medium">
            Dia 21/05 — Sessões imersivas e práticas.
          </p>
        </div>
        
        {/* Grid ajustado para centralizar o último item quando sobrar */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {workshops.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative flex flex-col bg-blue-900/20 border border-purple-500/10 rounded-[2.5rem] p-8 text-left w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[380px] shadow-xl"
            >
              {/* Badge da Oficina */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] bg-purple-600 px-4 py-1.5 rounded-full">
                  {item.role}
                </span>
              </div>

              {/* Área das Imagens - Sem efeito de grayscale para mobile */}
              <div className="mb-6 flex justify-start h-20">
                {item.images.length > 1 ? (
                  <div className="flex -space-x-4">
                    {item.images.map((img, idx) => (
                      <div key={idx} className="relative w-20 h-20 rounded-[1.5rem] border-2 border-blue-950 overflow-hidden shadow-2xl ring-2 ring-purple-500/20">
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
                  <div className="relative w-20 h-20 rounded-[1.5rem] border-2 border-blue-950 overflow-hidden shadow-2xl ring-2 ring-purple-500/20">
                    <Image 
                      src={item.images[0]} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Texto do Tema */}
              <div className="flex-grow">
                <h3 className="text-xl font-black text-white leading-tight mb-4 tracking-tight">
                  {item.topic}
                </h3>
              </div>

              {/* Instrutor na Base */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">Instrutor(a)</p>
                <p className="text-xs font-bold text-blue-100 uppercase">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}