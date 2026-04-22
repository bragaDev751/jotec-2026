"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date("2026-04-25T08:00:00").getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-blue-950/50 border-y border-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-blue-400 font-bold mb-10 uppercase tracking-[0.3em] text-xs">O contador não para</h3>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="relative bg-blue-900/30 p-4 rounded-2xl border border-blue-800 w-20 md:w-28 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
              <div className="text-3xl md:text-5xl font-mono font-bold text-white relative z-10">{value}</div>
              <div className="text-[10px] text-blue-400 uppercase mt-1 tracking-widest relative z-10">{label}</div>
            </div>
          ))}
        </div>

        <a href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" target="_blank" className="bg-yellow-400 text-blue-950 font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] transition-all animate-pulse">
          GARANTIR MINHA VAGA
        </a>
      </div>
    </section>
  );
}