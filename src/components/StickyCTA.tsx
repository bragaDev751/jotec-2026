export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-blue-950/80 backdrop-blur-lg border-t border-white/10 md:hidden z-50">
      <a 
        href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
        target="_blank"
        className="flex justify-center items-center w-full bg-yellow-400 text-blue-950 font-bold py-4 rounded-xl text-lg shadow-lg hover:bg-white transition-all"
      >
        QUERO MINHA VAGA
      </a>
    </div>
  );
}