// WhatsAppButtons.js - Versión corregida
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppButtons = () => {
  const sectionRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  useEffect(() => {
    // Configuración inicial para evitar flickering
    gsap.set(".whatsapp-button", { 
      opacity: 0, 
      y: 30 
    });

    // Animación principal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    tl.to(".whatsapp-button", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.2)"
    });

    // Efecto de brillo persistente
    gsap.to(".shine-effect", {
      x: "150%",
      duration: 2.5,
      repeat: -1,
      ease: "none"
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 px-4 my-12 overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/img/fondo_cuentaAtras.jfif')" }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div ref={buttonsContainerRef} className="relative z-10 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-white text-center mb-10">
          ¿Tienes alguna duda?<br />
          <span className="text-amber-200">Contáctanos directamente</span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          {/* Botón Novio - Versión corregida */}
          <a
            href={`https://wa.me/34640029783`}
            className="whatsapp-button relative flex items-center gap-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="shine-effect absolute top-0 left-0 w-20 h-full bg-white/30 transform -skew-x-12" />
            </div>
            <div className="bg-white/20 p-3 rounded-full backdrop-blur z-10">
              <span className="text-3xl">🤵</span>
            </div>
            <div className="text-left z-10">
              <p className="font-light text-sm text-blue-100">Contactar con</p>
              <p className="font-bold text-lg">El Novio</p>
              <p className="font-mono text-xs mt-1 text-blue-200">Pepe</p>
            </div>
          </a>

          {/* Botón Novia - Versión corregida */}
          <a
            href={`https://wa.me/34671458624`}
            className="whatsapp-button relative flex items-center gap-4 bg-gradient-to-r from-rose-700 to-rose-500 text-white px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="shine-effect absolute top-0 left-0 w-20 h-full bg-white/30 transform -skew-x-12" />
            </div>
            <div className="bg-white/20 p-3 rounded-full backdrop-blur z-10">
              <span className="text-3xl">👰</span>
            </div>
            <div className="text-left z-10">
              <p className="font-light text-sm text-rose-100">Contactar con</p>
              <p className="font-bold text-lg">La Novia</p>
              <p className="font-mono text-xs mt-1 text-rose-200">Fátima</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButtons;