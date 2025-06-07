import React, { useState, useEffect } from "react";
import { Heart, Music, Gift, Camera } from "lucide-react";
import { motion } from "framer-motion"; // Importación faltante

const Footer = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [
    { icon: <Heart size={36} className="text-rose-500 fill-rose-500" />, label: "Amor" },
    { icon: <Music size={36} className="text-amber-600" />, label: "Música" },
    { icon: <Gift size={36} className="text-rose-400" />, label: "Regalos" },
    { icon: <Camera size={36} className="text-amber-700" />, label: "Memorias" }
  ];

  // Rotación de íconos cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-amber-100 to-amber-50 py-12 text-center border-t border-amber-200 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-rose-400/20 rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
              filter: "blur(20px)"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Ícono animado */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <motion.div
            key={currentIcon}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {icons[currentIcon].icon}
            <span className="text-xs text-amber-700 mt-1">
              {icons[currentIcon].label}
            </span>
          </motion.div>
        </div>

        {/* Cita romántica */}
        <p className="text-amber-800 font-serif italic text-xl mb-4 md:text-2xl">
          "El amor no se mira, se siente. Y aún así, ¡qué bonito se ve!"
        </p>

        {/* Detalles de contacto */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="tel:+34640029783" className="text-amber-700 hover:text-rose-500 transition-colors">
            Contacto: Pepe
          </a>
          <a href="tel:+34671458624" className="text-amber-700 hover:text-rose-500 transition-colors">
            Contacto: Fátima
          </a>
        </div>

        {/* Créditos con efecto hover */}
        <div className="group">
          <p className="text-amber-600 text-sm inline-block border-b border-transparent group-hover:border-amber-600 transition-all">
            Hecho con amor para Fátima y Pepe - {new Date().getFullYear()}
          </p>
          <span className="block text-xs text-amber-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Gracias por compartir este día especial con nosotros
          </span>
        </div>

        {/* Efecto de firmas */}
        <div className="flex justify-center mt-8 gap-8 opacity-80 hover:opacity-100 transition-opacity">
          <div className="font-homemade text-amber-700">Fátima</div>
          <div className="text-4xl text-rose-400 leading-none">❤</div>
          <div className="font-homemade text-amber-700">Pepe</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;