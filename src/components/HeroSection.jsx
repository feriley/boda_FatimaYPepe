import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const nameFatimaRef = useRef();
  const plusRef = useRef();
  const namePepeRef = useRef();
  const iconRef = useRef();
  const petalsContainerRef = useRef();

  // Animación de pétalos mejorada
  useEffect(() => {
    const createOrganicPetals = () => {
      const petalCount = 12; // Cantidad de pétalos
      const container = petalsContainerRef.current;

      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.className = "absolute bg-contain bg-no-repeat z-10 pointer-events-none";

        // Configuración inicial aleatoria
        gsap.set(petal, {
          backgroundImage: "url('/img/petal.png')",
          width: `${gsap.utils.random(20, 35)}px`,
          height: `${gsap.utils.random(20, 35)}px`,
          left: `${gsap.utils.random(-10, 110)}%`, // Permite empezar fuera de pantalla
          top: `${gsap.utils.random(-20, -10)}%`,
          opacity: gsap.utils.random(0.4, 0.8),
          rotation: gsap.utils.random(0, 360),
          x: gsap.utils.random(-50, 50)
        });

        container.appendChild(petal);

        // Animación única para cada pétalo
        const duration = gsap.utils.random(18, 25);
        const delay = gsap.utils.random(0, 15);

        gsap.to(petal, {
          y: `+=${window.innerHeight + 200}`,
          x: `+=${gsap.utils.random(-150, 150)}`,
          rotation: `+=${gsap.utils.random(-360, 360)}`,
          duration: duration,
          delay: delay,
          ease: "none",
          onComplete: restartPetalAnimation,
          onCompleteParams: [petal],
          repeat: -1
        });
      }

      function restartPetalAnimation(petal) {
        gsap.set(petal, {
          y: `${gsap.utils.random(-20, -10)}%`,
          x: `+=${gsap.utils.random(-50, 50)}`,
          left: `${gsap.utils.random(-10, 110)}%`
        });
      }
    };

    createOrganicPetals();

    return () => {
      // Limpieza al desmontar
      if (petalsContainerRef.current) {
        petalsContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Animación principal del hero
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.5 } });

    tl.from(titleRef.current, { 
      y: -50, 
      opacity: 0,
      duration: 1.2
    })
    .from(nameFatimaRef.current, { 
      y: 40, 
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(plusRef.current, { 
      scale: 0, 
      rotation: 180,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.5")
    .from(namePepeRef.current, { 
      y: 40, 
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(iconRef.current, { 
      scale: 0.7, 
      opacity: 0,
      rotation: -15,
      ease: "back.out(2.5)",
      duration: 1.5
    }, "-=0.5");

    // Efecto de anillo de boda sutil
    const ring = document.createElement("div");
    ring.className = "absolute inset-0 flex items-center justify-center z-30 pointer-events-none";
    ring.innerHTML = `
      <svg viewBox="0 0 100 100" class="w-64 h-64 opacity-0">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="283" stroke-dashoffset="283"/>
      </svg>
    `;
    sectionRef.current.appendChild(ring);

    tl.to(ring.querySelector("circle"), {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power2.inOut"
    }, "+=1")
    .to(ring.querySelector("svg"), {
      opacity: 0.7,
      scale: 1.3,
      duration: 2
    }, "-=2")
    .to(ring, {
      opacity: 0,
      duration: 1.5,
      onComplete: () => ring.remove()
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-between px-6 py-20 font-homemade text-primaryText bg-white overflow-hidden"
    >
      {/* Contenedor de pétalos - Versión mejorada */}
      <div 
        ref={petalsContainerRef} 
        className="absolute inset-0 overflow-hidden pointer-events-none"
      />
      
      {/* Imagen de fondo */}
      <img
        src="/img/fondo_2.png"
        alt="Fondo boda"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover z-0"
      />
      <div className="absolute inset-0 bg-white bg-opacity-5 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center justify-start h-full text-center">
        {/* Título "¡Nos casamos!" */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl tracking-wide pt-12 pb-16 text-accentText font-homemade text-[#793036]"
        >
          ¡Nos casamos!
        </h2>

        {/* Nombres de los novios */}
        <div className="relative flex flex-col items-center gap-6 text-[#54514a] font-homemade pb-16">
          <h1 ref={nameFatimaRef} className="text-5xl md:text-7xl">
            Fátima
          </h1>
          <div ref={plusRef} className="text-4xl md:text-5xl">
            +
          </div>
          <h1 ref={namePepeRef} className="text-5xl md:text-7xl">
            Pepe
          </h1>
        </div>

        {/* Icono central */}
        <div className="mb-10">
          <img
            ref={iconRef}
            src="/img/icono1.png"
            alt="Icono boda"
            className="w-40 md:w-56 lg:w-64 h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}