import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">
            VIII JOTEC 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
          IA, Dados e <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Conexões</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-200 italic font-light">
          O Poder do Tempo Real. Prepare-se para o futuro da tecnologia.
        </p>
      </div>

      <a 
        href="https://doity.com.br/seu-link-aqui" 
        target="_blank"
        className="group mt-12 bg-yellow-400 hover:bg-white text-blue-950 font-bold py-5 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 flex items-center gap-2"
      >
        Inscrever-se Agora
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </section>
  );
}