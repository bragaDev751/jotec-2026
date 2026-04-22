
import { BrainCircuit, DatabaseZap, Unplug } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: "IA Aplicada",
    description: "Vá além do chat. Descubra como aplicar inteligência artificial real em problemas do dia a dia."
  },
  {
    icon: DatabaseZap,
    title: "Dados em Tempo Real",
    description: "Aprenda a arquitetar sistemas que processam e reagem a milhões de eventos instantaneamente."
  },
  {
    icon: Unplug,
    title: "Conexões Além do Código",
    description: "Faça networking com líderes do mercado e conecte-se com as empresas que estão moldando o futuro."
  }
];

export default function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 bg-blue-1000 overflow-hidden">
      {/* Elemento Visual de Fundo: Gradiente Radial para Profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* Coluna de Texto (Ocupa 2/5 do grid no Desktop) */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-blue-900 border border-blue-700 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              O PROPÓSITO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              A Ponte entre Teoria e o <span className="text-yellow-400">Futuro Prático</span>.
            </h2>
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A <strong className="text-white">JOTEC</strong> não é apenas uma sequência de palestras. É uma imersão tecnológica onde acadêmicos e profissionais se encontram para explorar os limites do desenvolvimento.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-blue-900/40 p-8 rounded-3xl border border-blue-800 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/10 ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center border border-blue-700 group-hover:bg-yellow-400 transition-colors">
                    <feature.icon className="w-7 h-7 text-yellow-400 group-hover:text-blue-950 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}