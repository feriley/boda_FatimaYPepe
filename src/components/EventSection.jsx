import React from "react";
import { motion } from "framer-motion";

function EventCard({ title, place, address, map, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl backdrop-blur-md"
    >
      <img src={icon} alt={title} className="w-14 h-14 mx-auto mb-4" />
      <h3 className="text-4xl text-primaryText mb-2 font-homemade">{title}</h3>
      <p className="text-primaryText text-lg mb-1">{place}</p>
      <p className="text-primaryText text-lg mb-4">{address}</p>
      <a
        href={map}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accentText text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition"
      >
        Ver en Google Maps
      </a>
    </motion.div>
  );
}

export default function EventSection() {
  return (
    <section
      className="relative w-full py-20 px-6 bg-cover bg-center text-center font-homemade text-primaryText"
      style={{ backgroundImage: "url('/img/fondo_cuentaAtras.jfif')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0" />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12"
      >
        <h2 className="text-4xl md:text-5xl text-accentText mb-4">
          Fecha y lugar de acontecimiento
        </h2>
        <p className="text-xl">26 de septiembre</p>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <EventCard
          title="Ceremonia"
          place="Iglesia Santa María la Blanca"
          address="Pl. Buen Suceso, s/n, Casco Antiguo, Sevilla"
          map="https://www.google.com/maps/place/Iglesia+de+Santa+Mar%C3%ADa+la+Blanca/@37.3865053,-5.9873392,16z/data=!3m1!4b1!4m6!3m5!1s0xd126c1c1935150f:0xe80076255099da5a!8m2!3d37.3865053!4d-5.9873392!16s%2Fg%2F122tcmll?entry=ttu"
          icon="/img/icono_ceremonia2.png"
        />

        <img
          src="/img/icono_flor.png"
          alt="Flor decorativa"
          className="w-16 md:w-24 lg:w-28 h-auto"
        />

        <EventCard
          title="Celebración"
          place="El  Pino   de   San   José"
          address="Carretera Nacional IV, Km 524.5 Torrepalma"
          map="https://maps.google.com?q=El+Pino+de+San+Jos%C3%A9+Torrepalma"
          icon="/img/icono_celebracionFinal.png"
        />
      </div>
    </section>
  );
}