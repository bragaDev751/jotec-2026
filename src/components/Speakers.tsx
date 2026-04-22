import Image from 'next/image';

const speakers = [
  { id: 1, name: 'Ana Silva', title: 'Especialista em IA Aplicada', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400', bio: 'Pioneira em soluções de IA para o setor financeiro.' },
  { id: 2, name: 'Bruno Costa', title: 'Arquiteto de Dados', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400', bio: 'Mestre em Big Data e streaming de alto desempenho.' },
  { id: 3, name: 'Carla Dias', title: 'Head de Conexões', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400', bio: 'Focada em construir ecossistemas de inovação.' },
];

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-24 px-6 bg-blue-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-white tracking-tight">
          Nossos <span className="text-yellow-400">Palestrantes</span> de Elite
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((s) => (
            <div key={s.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-blue-900 border border-blue-800 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-yellow-400/50">
                  <Image src={s.image} alt={s.name} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{s.name}</h3>
                <p className="text-yellow-400 font-medium mb-4 text-sm uppercase">{s.title}</p>
                <p className="text-blue-100 text-sm">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}