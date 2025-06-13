import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CalendarDays } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function PreparationSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const iconRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-09-26T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      gsap.to(counterRef.current, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(iconRef.current, {
      rotation: -30,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(iconRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "+=0.5");

    gsap.from(
      [titleRef.current, textRef.current, counterRef.current, imageRef.current],
      {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      boxShadow: "0 0 30px rgba(210, 160, 140, 0.6)",
      duration: 1.5,
      ease: "power2.out"
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 text-center font-homemade text-primaryText overflow-hidden"
      style={{
        backgroundImage: "url('/img/fondo3final.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/20 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div ref={iconRef} className="flex justify-center mb-8">
          <CalendarDays 
            size={56} 
            className="text-[#793036] drop-shadow-lg" 
            strokeWidth={1.5}
          />
        </div>

        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl mb-6 font-bold tracking-wide text-[#33312d]"
        >
          Prepárate para el gran día
        </h2>

        <p
          ref={textRef}
          className="text-2xl mb-8 font-medium text-[#33312d]"
        >
          Faltan...
        </p>

        <div
          ref={counterRef}
          className="text-5xl md:text-6xl mb-14 font-bold tracking-tight text-[#81846c]"
        >
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="block min-w-[3ch]">{timeLeft.days}</span>
              <span className="text-xl mt-2">días</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block min-w-[3ch]">{timeLeft.hours}</span>
              <span className="text-xl mt-2">horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block min-w-[3ch]">{timeLeft.minutes}</span>
              <span className="text-xl mt-2">min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block min-w-[3ch]">{timeLeft.seconds}</span>
              <span className="text-xl mt-2">seg</span>
            </div>
          </div>
        </div>

<div
  ref={imageRef}
  className="relative z-[100] w-full max-w-2xl mx-auto"
>
  <img
    src="/img/Pacificofinal.png"
    alt="Eventos del día"
    className="block w-full h-auto"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = '/img/fallback-eventos.png';
    }}
  />
</div>
      </div>
    </section>
  );
}
