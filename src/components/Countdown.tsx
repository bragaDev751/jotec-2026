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
    <section className="py-24 px-6 bg-gradient-to-b from-blue-950 via-purple-950/20 to-blue-950 border-y border-purple-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-purple-400 font-bold mb-12 uppercase tracking-[0.3em] text-xs">Faltam apenas</h3>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="relative bg-blue-950/50 backdrop-blur-md p-6 rounded-3xl border border-purple-500/20 w-24 md:w-32">
              <div className="text-4xl md:text-5xl font-bold text-white">{value}</div>
              <div className="text-[10px] text-purple-300 uppercase mt-2 tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        <a 
          href="https://doity.com.br/jotec--jornada-de-tecnologia-dos-academicos-de-sistemas-de-informacao-1" 
          target="_blank" 
          className="inline-block bg-yellow-400 text-blue-950 font-bold py-5 px-12 rounded-xl shadow-[0_0_40px_rgba(250,204,21,0.2)] hover:shadow-[0_0_60px_rgba(250,204,21,0.4)] hover:bg-white transition-all"
        >
          GARANTIR MINHA VAGA
        </a>
      </div>
    </section>
  );
}