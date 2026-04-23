export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-blue-950/90 backdrop-blur-xl border-t border-purple-500/30 md:hidden z-50">
      <a 
        href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
        target="_blank"
        className="flex justify-center items-center w-full bg-yellow-400 text-blue-950 font-bold py-4 rounded-xl text-lg hover:bg-white hover:scale-[0.99] transition-all"
      >
        GARANTIR MINHA VAGA
      </a>
    </div>
  );
}