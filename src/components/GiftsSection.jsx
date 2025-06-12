import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GiftsSection() {
  const [copied, setCopied] = useState(false);
  const iban = "ES09 0186 5001 6905 2353 0046";

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
        backgroundImage: "url('/img/fondo3final.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl mb-4 text-[#33312d] font-homemade relative z-10 font-bold tracking-wider"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Lista de Bodas
      </motion.h2>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Imagen */}
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
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
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
            <p className="text-xl md:text-2xl mb-6 font-homemade font-bold text-[#33312d] leading-relaxed drop-shadow-sm">
              El mejor regalo es compartir este día contigo, pero si nos quieres hacer un regalo, aquí tienes nuestros datos:
            </p>

            <div className="inline-flex flex-col items-start gap-4">
              <motion.div
                className={`bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/50 transition-colors ${
                  copied ? "ring-4 ring-yellow-400/50" : ""
                }`}
                animate={copied ? { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-2xl md:text-3xl font-mono font-bold tracking-wide text-[#33312d] select-all">
                  {iban}
                </p>
              </motion.div>

              <motion.button
                onClick={handleCopy}
                className="px-6 py-3 rounded-xl bg-white/90 text-[#33312d] font-homemade font-semibold shadow hover:shadow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? "¡Copiado!" : "Copiar número"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
