"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-04-25T08:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

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
    <section className="py-20 px-6 bg-blue-900/20 border-y border-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm font-bold text-yellow-400 mb-8 uppercase tracking-[0.2em]">
          As inscrições encerram em
        </h3>
        
        <div className="flex justify-center gap-3 md:gap-6 mb-12">
          {[
            { label: "Dias", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Seg", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-blue-950/50 p-4 rounded-2xl border border-blue-800/50 w-20 md:w-28 backdrop-blur-sm">
              <div className="text-3xl md:text-5xl font-bold text-white tabular-nums">{item.value}</div>
              <div className="text-[10px] text-blue-400 uppercase mt-2 tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>

        <a 
          href="https://doity.com.br/seu-link-aqui" 
          target="_blank"
          className="inline-block bg-yellow-400 hover:bg-white text-blue-950 font-bold py-5 px-12 rounded-full text-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] transition-all duration-300 animate-pulse hover:animate-none"
        >
          GARANTIR MINHA VAGA
        </a>
      </div>
    </section>
  );
}