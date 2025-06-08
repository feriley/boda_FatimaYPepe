# 💍 Web Boda Fátima & Pepe 

![Banner de proyecto](https://via.placeholder.com/1200x400/3d004d/ffffff?text=Elegante+Web+Boda) <!-- Agregar banner real -->

> Plataforma interactiva para la gestión de invitados en la boda de Fátima y Pepe

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://boda-fatima-y-pepe.vercel.app/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-green?logo=spring)](https://spring.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📚 Índice interactivo
1. [✨ Introducción](#-introducción)
2. [🚀 Funcionalidades](#-funcionalidades)
3. [🛠 Tecnologías](#-tecnologías)
4. [⚙️ Instalación](#️-instalación)
5. [📱 Uso](#-uso)
6. [📊 Documentación](#-documentación)
7. [🎨 Diseño en Figma](#-diseño-en-figma)
8. [✅ Conclusión](#-conclusión)
9. [📜 Licencia](#-licencia)
10. [📧 Contacto](#-contacto)

---

## ✨ Introducción
Proyecto especial creado como regalo de boda para mi hermana. Plataforma digital que permite a los invitados:

![Confirmación asistencia](https://via.placeholder.com/400x200/3d004d/ffffff?text=Proceso+4+pasos) <!-- Agregar captura real -->

- ✅ Confirmar asistencia
- 🍽️ Indicar restricciones alimenticias
- 🎵 Sugerir canciones
- 📅 Consultar detalles del evento

**Objetivos cumplidos:**
| Meta | Estado |
|------|--------|
| Diseño responsive | ✅ |
| Almacenamiento en MongoDB | ✅ |
| Despliegue profesional | ✅ |
| UX optimizado | ✅ |

---

## 🚀 Funcionalidades
### Flujo de confirmación (4 pasos)
1. Identificación de invitado 🔍
2. Confirmación asistencia ✅
3. Detalles alimenticios 🥗
4. Sugerencias musicales 🎶

### Secciones clave
- **📅 Cuenta regresiva interactiva** 
- **📍 Mapa de ubicaciones**
- **📬 Contacto directo con novios**
- **👤 Admin Dashboard** (en desarrollo)

![Vista previa secciones](https://via.placeholder.com/600x300/3d004d/ffffff?text=Secciones+Web) <!-- Agregar collage de pantallas -->

---

## 🛠 Tecnologías
### Frontend
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)

### Despliegue
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)
![Render](https://img.shields.io/badge/Render-46E3B7?logo=render)

---

## ⚙️ Instalación
```bash
# Frontend
git clone https://github.com/tu-usuario/web-boda.git
cd frontend
npm install
npm run dev

# Backend (requiere Docker)
docker build -t boda-api .
docker run -p 8080:8080 boda-api
