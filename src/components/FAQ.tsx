const faqs = [
  { q: "Preciso ter conhecimento prévio?", a: "Não! A JOTEC é feita para todos os níveis, do iniciante ao avançado." },
  { q: "O evento terá certificado?", a: "Sim, todos os participantes que confirmarem presença receberão certificado de horas complementares." },
  { q: "Onde vai ser?", a: "O evento será realizado no [Local] e também transmitido online." },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-white">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div 
            key={i} 
            className="group bg-blue-900/20 p-6 rounded-2xl border border-blue-800 transition-all duration-300 hover:border-yellow-400/30 hover:bg-blue-900/40"
          >
            <h4 className="font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
              {item.q}
            </h4>
            <p className="text-sm text-blue-200 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}