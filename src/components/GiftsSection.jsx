import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function GiftsSection() {
  const [copied, setCopied] = useState(false);
  const iban = "ES00 0000 0000 0000 0000 0000";

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-8 text-center font-homemade overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/fondo_cuentaAtras.jfif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl mb-4 text-accentText relative z-10 font-bold tracking-wider"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Regalos
      </motion.h2>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Icono regalo */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/img/icono_regalo.png"
                alt="Regalo"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-yellow-200 opacity-20 blur-xl -z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Texto y cuenta */}
          <motion.div
            className="w-full md:w-3/5 text-left pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
          >
            <p className="text-lg md:text-xl mb-6 text-[#793036] leading-relaxed">
              <span className="font-bold">¡Vuestro cariño es el mejor regalo!</span>
              <br /><br />
              Lo que más ilusión nos hace es que nos acompañéis el próximo 26 de septiembre
              para brindar, bailar y vivir juntos un día inolvidable.
              <br /><br />
              Pero si además queréis tener un detalle, os lo agradeceremos de corazón.
              <br />
              Aquí os dejamos nuestro número de cuenta, por si queréis contribuir a esta nueva aventura juntos.
            </p>

            <div className="inline-flex flex-col items-start gap-4">
              <motion.div
                className={`bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 transition-colors ${
                  copied ? "ring-4 ring-yellow-400/50" : ""
                }`}
                animate={copied ? { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl md:text-2xl font-mono font-bold tracking-widest text-[#793036]">
                  {iban}
                </p>
              </motion.div>

              <motion.button
                onClick={handleCopy}
                className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#793036] px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{copied ? "¡Copiado!" : "Copiar número"}</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confetis animados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 6 + 4;
          return (
            <motion.div
              key={i}
              className="rounded-full absolute"
              style={{
                width: size,
                height: size,
                backgroundColor: ["#F87171", "#60A5FA", "#FBBF24", "#34D399", "#A78BFA"][i % 5],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["-10%", "120%"],
                x: [0, (Math.random() - 0.5) * 100],
                rotate: [0, Math.random() > 0.5 ? 180 : -180],
                opacity: [1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
