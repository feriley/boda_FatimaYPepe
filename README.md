💍 Web Boda Fátima & Pepe - DAW 2024
Fernando Iglesias Leyva

📑 Índice

1.Introducción

2.Funcionalidades

3.Tecnologías

4.Instalación

5.Uso

6.Documentación

7.Figma

8.Conclusión

9.Licencia

10.Contacto

🌟 1.Introducción
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

✨ 2.Funcionalidades
Confirmación de asistencia en 4 pasos

Info detallada de ceremonia y celebración

Cuenta atrás interactiva

Sección de contacto directo con los novios

Admin Dashboard (pendiente implementar)

🛠 3.Tecnologías
Área	Stack
Frontend	React 18 + Vite	Tailwind CSS	GSAP (animaciones)	Lucide Icons
Backend	Spring Boot 3	MongoDB	Docker
Despliegue	Vercel (Front)	Render (Back)	MongoDB Atlas
Herramientas	Figma (diseño)	Postman (API testing)
🚀 4.Instalación
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
📱 5.Uso
Los invitados acceden a: https://boda-fatima-y-pepe.vercel.app/

Completan el formulario (4 pasos)

Reciben confirmación por email (pendiente implementar)

Los novios consultan confirmaciones en MongoDB Atlas

📚6. Documentación
Diagramas técnicos:
-Caso de Uso     -Diargama de Clases      -Diagrama entindad relacion MongoDB
-De Pruebas      -Diagrama de despliegue  -Diagrama de flujo y de secuencia


Endpoints API

http
POST /api/invitaciones
GET /api/invitaciones

🎨 7.Figma

https://www.figma.com/design/9EFxoG1ht5Xg8UGbj8Tlnr/Figma-TFG-WEB_BODA?node-id=0-1&t=IfEMdvmzAJ0MQHJM-1

🎯 8.Conclusión
Proyecto que combina habilidades técnicas de DAW con un propósito personal emotivo. Desafíos superados:

Integración React-Spring Boot

Animaciones performantes

Despliegue full-stack

📜 9.Licencia
MIT License © 2024 Fernando Iglesias

📧 10.Contacto
Autor: Fernando Iglesias Leyva
Email: feriley8@gmail.com
