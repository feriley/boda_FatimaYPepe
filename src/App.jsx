import React from "react";


import HeroSection from "./components/HeroSection";
import EventSection from "./components/EventSection";
import PreparationSection from "./components/PreparationSection";
import GiftsSection from "./components/GiftsSection";
import RSVPForm from "./components/RSVPForm";
import WhatsAppButtons from "./components/WhatsAppButtons";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <EventSection />
      <PreparationSection />
      <GiftsSection />
      <RSVPForm />
      <WhatsAppButtons />
      <Footer />
    </div>
  );
}
