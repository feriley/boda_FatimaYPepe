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
  const petalsRef = useRef(null);

  // Cuenta regresiva mejorada con animación
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

      // Animación al cambiar los números
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

  // Animaciones con GSAP mejoradas
  useGSAP(() => {
    // Efecto de pétalos cayendo
    const createPetals = () => {
      const petalCount = 15;
      const container = petalsRef.current;

      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.className = "absolute bg-contain bg-no-repeat z-10 pointer-events-none";
        
        gsap.set(petal, {
          backgroundImage: "url('/img/petal.png')",
          width: `${gsap.utils.random(20, 35)}px`,
          height: `${gsap.utils.random(20, 35)}px`,
          left: `${gsap.utils.random(0, 100)}%`,
          top: `${gsap.utils.random(-20, -10)}%`,
          opacity: gsap.utils.random(0.4, 0.8),
          rotation: gsap.utils.random(0, 360),
          x: gsap.utils.random(-50, 50)
        });

        container.appendChild(petal);

        const duration = gsap.utils.random(15, 25);
        const delay = gsap.utils.random(0, 10);

        gsap.to(petal, {
          y: `+=${window.innerHeight + 100}`,
          x: `+=${gsap.utils.random(-100, 100)}`,
          rotation: `+=${gsap.utils.random(-180, 180)}`,
          duration: duration,
          delay: delay,
          ease: "sine.inOut",
          onComplete: () => {
            gsap.set(petal, {
              y: `${gsap.utils.random(-20, -10)}%`,
              x: `+=${gsap.utils.random(-50, 50)}`
            });
            gsap.to(petal, {
              y: `+=${window.innerHeight + 100}`,
              x: `+=${gsap.utils.random(-100, 100)}`,
              rotation: `+=${gsap.utils.random(-180, 180)}`,
              duration: duration,
              ease: "sine.inOut"
            });
          },
          repeat: -1
        });
      }
    };

    createPetals();

    // Animación del icono de calendario
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

    // Animación de entrada escalonada
    gsap.from([titleRef.current, textRef.current, counterRef.current, imageRef.current], {
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
    });

    // Efecto de brillo en la imagen
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
        backgroundImage: "url('/img/fondo_cuentaAtras.jfif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/20 z-0" />
      
      {/* Pétalos cayendo */}
      <div ref={petalsRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Icono animado */}
        <div ref={iconRef} className="flex justify-center mb-8">
          <CalendarDays 
            size={56} 
            className="text-[#793036] drop-shadow-lg" 
            strokeWidth={1.5}
          />
        </div>

        <h2 
          ref={titleRef} 
          className="text-4xl md:text-5xl mb-6 text-[#793036] font-bold tracking-wide"
        >
          Prepárate para el gran día
        </h2>

        <p 
          ref={textRef} 
          className="text-2xl mb-8 text-[#54514a] font-medium"
        >
          Faltan...
        </p>

        {/* Contador animado */}
        <div
          ref={counterRef}
          className="text-5xl md:text-6xl mb-14 font-bold tracking-tight text-[#793036]"
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
  className="relative z-[100] w-full max-w-2xl mx-auto p-4 rounded-xl shadow-xl"
>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="/img/eventos1.png"
      alt="Eventos del día"
      className="relative z-10 block w-full h-auto"
      onError={(e) => {
        e.target.onerror = null; 
        e.target.src = '/img/fallback-eventos.png';
      }}
    />
    {/* Fondo de respaldo */}
    <div className="absolute inset-0 bg-gray-50 z-0 flex items-center justify-center">
      <span className="text-gray-400">Imagen del evento</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}