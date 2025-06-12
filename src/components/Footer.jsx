import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-amber-200 relative overflow-hidden" style={{ backgroundColor: "#e6e9d8" }}>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Frase principal */}
        <p className="text-[#33312d] font-serif italic text-xl md:text-2xl mb-4">
          “Solo se ve bien con el corazón, lo esencial es invisible a los ojos”
        </p>

        {/* Hashtag */}
        <p className="text-[#33312d] text-sm md:text-base mb-6 tracking-wide font-semibold">
          #BodaFa&amp;Pepo
        </p>

        {/* Créditos */}
        <div className="group">
          <p className="text-amber-600 text-sm inline-block border-b border-transparent group-hover:border-amber-600 transition-all">
            Hecho con amor para Fátima y Pepe 
          </p>
          <span className="block text-xs text-amber-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Gracias por compartir este día especial con nosotros
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
