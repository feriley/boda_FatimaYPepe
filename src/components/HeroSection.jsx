import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const namesRef = useRef();
  const iconRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.5 } });

    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
    })
      .from(
        namesRef.current,
        {
          y: 40,
          opacity: 0,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .from(
        iconRef.current,
        {
          scale: 0.7,
          opacity: 0,
          rotation: -15,
          ease: "back.out(2.5)",
          duration: 1.5,
        },
        "-=0.5"
      );
  }, { scope: sectionRef });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo optimizado */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/Pacifico.png')",
          backgroundColor: "#fff",
        }}
      />
      
      {/* Capa de opacidad sutil */}
      <div className="absolute inset-0 bg-white bg-opacity-5 z-10" />

      {/* Contenido principal */}
      <section
        ref={sectionRef}
        className="relative w-full h-full flex flex-col items-center justify-center z-20"
      >
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center px-4 py-12 sm:py-20">
          {/* Título */}
          <h2
            ref={titleRef}
            className="pb-8 sm:pb-12 md:pb-16 font-sunday text-4xl xs:text-5xl sm:text-6xl md:text-7xl uppercase text-[#33312d] leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          >
            ¡Nos casamos!
          </h2>

          {/* Nombres - Añadido mt-6 para bajar el texto */}
          <div
            ref={namesRef}
            className="flex flex-row items-center justify-center gap-14 sm:gap-20 md:gap-24 lg:gap-30 pb-12 sm:pb-16 md:pb-20 text-[#81846c] font-homemade text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none mt-6"
          >
            <span>Fátima</span>
            <span>+</span>
            <span>Pepe</span>
          </div>

          {/* Icono central con ajuste de posición */}
          <div className="w-full flex justify-center px-4 relative">
            <div className="relative">
              <img
                ref={iconRef}
                src="/img/icono1.png"
                alt="Icono boda"
                className="max-w-[90%] w-64 sm:w-80 md:w-96 lg:w-[460px] h-auto drop-shadow-lg"
                style={{
                  position: 'relative',
                  left: '-5%',
                  transform: 'translateX(10px)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}