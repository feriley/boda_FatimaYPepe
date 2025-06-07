💍 Web Boda Fátima & Pepe - DAW 2024
Fernando Iglesias Leyva

📑 Índice
Introducción

Funcionalidades

Tecnologías

Instalación

Uso

Documentación

Figma

Conclusión

Licencia

Contacto

🌟 Introducción
Proyecto: Página web interactiva para la boda de Fátima y Pepe, con sistema de confirmación de asistencia.

Motivación: Crear un regalo digital especial para mi hermana, permitiendo a los invitados:

Confirmar asistencia

Indicar restricciones alimenticias

Sugerir canciones

Consultar detalles del evento

Objetivos:
✅ Diseño elegante y responsive
✅ Formulario funcional con almacenamiento en MongoDB
✅ Despliegue profesional en Vercel + Render
✅ Experiencia UX optimizada

✨ Funcionalidades
Confirmación de asistencia en 4 pasos

Info detallada de ceremonia y celebración

Cuenta atrás interactiva

Sección de contacto directo con los novios

Admin Dashboard (pendiente implementar)

🛠 Tecnologías
Área	Stack
Frontend	React 18 + Vite	Tailwind CSS	GSAP (animaciones)	Lucide Icons
Backend	Spring Boot 3	MongoDB	Docker
Despliegue	Vercel (Front)	Render (Back)	MongoDB Atlas
Herramientas	Figma (diseño)	Postman (API testing)
🚀 Instalación
Requisitos previos:
Node.js ≥18

JDK 17

Docker

Cuentas en Vercel/Render/MongoDB Atlas

Pasos:
Frontend:

bash
git clone [repo-url]
cd frontend
npm install
npm run dev
Backend:

docker
docker build -t boda-api .
docker run -p 8080:8080 boda-api
Variables de entorno:
Crear .env en frontend:

env
VITE_API_URL=https://api-web-boda.onrender.com
📱 Uso
Los invitados acceden a: https://web-boda-xi.vercel.app

Completan el formulario (4 pasos)

Reciben confirmación por email (pendiente implementar)

Los novios consultan confirmaciones en MongoDB Atlas

📚 Documentación
Diagramas técnicos (enlace a Google Drive con UMLs)

Endpoints API

http
POST /api/invitaciones
GET /api/invitaciones

🎨 Figma

https://www.figma.com/design/9EFxoG1ht5Xg8UGbj8Tlnr/Figma-TFG-WEB_BODA?node-id=0-1&t=IfEMdvmzAJ0MQHJM-1

🎯 Conclusión
Proyecto que combina habilidades técnicas de DAW con un propósito personal emotivo. Desafíos superados:

Integración React-Spring Boot

Animaciones performantes

Despliegue full-stack

📜 Licencia
MIT License © 2024 Fernando Iglesias

📧 Contacto
Autor: Fernando Iglesias Leyva
Email: feriley8@gmail.com
