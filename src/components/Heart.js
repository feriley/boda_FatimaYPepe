import React, { useEffect } from "react";
import { gsap } from "gsap";

const Heart = () => {
  useEffect(() => {
    const heartColors = ["#ff6b6b", "#fcc2d7", "#ffa8a8"];
    const hearts = [];
    const heartCount = 5; // Reducido a solo 5 corazones

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.fontSize = `${gsap.utils.random(18, 28)}px`;
      heart.style.left = `${gsap.utils.random(5, 95)}%`;
      heart.style.top = `${gsap.utils.random(10, 90)}%`;
      heart.style.opacity = "0";
      heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
      heart.style.zIndex = "5";
      heart.style.pointerEvents = "none";
      heart.style.willChange = "transform, opacity";
      document.body.appendChild(heart);
      hearts.push(heart);

      // Animación de aparición/desaparición
      const timeline = gsap.timeline({
        delay: gsap.utils.random(0, 15),
        repeat: -1,
        repeatDelay: gsap.utils.random(8, 20)
      });

      timeline
        .set(heart, { y: 0, rotation: 0 })
        .to(heart, { 
          opacity: gsap.utils.random(0.3, 0.6),
          duration: 1.5,
          ease: "sine.inOut"
        })
        .to(heart, {
          y: `-=${gsap.utils.random(30, 60)}`,
          x: `+=${gsap.utils.random(-20, 20)}`,
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(4, 8),
          ease: "sine.inOut"
        })
        .to(heart, { 
          opacity: 0,
          duration: 2,
          ease: "sine.in",
          onComplete: () => {
            gsap.set(heart, {
              left: `${gsap.utils.random(5, 95)}%`,
              top: `${gsap.utils.random(10, 90)}%`
            });
          }
        });
    };

    // Crear corazones
    for (let i = 0; i < heartCount; i++) {
      createHeart();
    }

    return () => {
      hearts.forEach(heart => heart.remove());
    };
  }, []);

  return null;
};


export default Heart;