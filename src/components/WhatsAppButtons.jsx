import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppButtons = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set(".whatsapp-button", {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.to(".whatsapp-button", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.2)",
    });

    gsap.to(".shine-effect", {
      x: "150%",
      duration: 2.5,
      repeat: -1,
      ease: "none",
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 px-4 my-12 overflow-hidden"
      style={{ backgroundColor: "#81846c" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-center font-homemade text-[#33312d] mb-3">
          ¿Tienes alguna duda?
        </h3>
        <p className="text-xl text-center font-homemade text-[#33312d] mb-10">
          Contacta con los novios
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          {/* Botón Novio */}
          <a
            href="https://wa.me/34640029783"
            className="whatsapp-button relative flex items-center gap-4 bg-[#81846c] text-white px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="shine-effect absolute top-0 left-0 w-20 h-full bg-white/30 transform -skew-x-12" />
            </div>
            <div className="bg-white/10 p-3 rounded-full backdrop-blur z-10">
              <span className="text-3xl">🤵</span>
            </div>
            <div className="text-left z-10">
              <p className="font-light text-sm text-white/80">Contactar con</p>
              <p className="font-bold text-lg text-white">El Novio</p>
              <p className="font-mono text-xs mt-1 text-white/60">Pepe</p>
            </div>
          </a>

          {/* Botón Novia */}
          <a
            href="https://wa.me/34671458624"
            className="whatsapp-button relative flex items-center gap-4 bg-[#81846c] text-white px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="shine-effect absolute top-0 left-0 w-20 h-full bg-white/30 transform -skew-x-12" />
            </div>
            <div className="bg-white/10 p-3 rounded-full backdrop-blur z-10">
              <span className="text-3xl">👰</span>
            </div>
            <div className="text-left z-10">
              <p className="font-light text-sm text-white/80">Contactar con</p>
              <p className="font-bold text-lg text-white">La Novia</p>
              <p className="font-mono text-xs mt-1 text-white/60">Fátima</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButtons;
