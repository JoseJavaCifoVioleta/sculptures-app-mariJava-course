# 🏛️ Sculptures App — Catálogo Interactivo y CRUD con React & Neon

![React](https://img.shields.io/badge/React-19.3-61dafb?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white)
![Neon Postgres](https://img.shields.io/badge/Neon-Data_API_REST-00E599?logo=postgresql&logoColor=black)
![Centre](https://img.shields.io/badge/Centre-CIFO_La_Violeta-orange?logo=google-maps&logoColor=white)
![SOC](https://img.shields.io/badge/SOC-Generalitat_de_Catalunya-blue)
![Especialitat](https://img.shields.io/badge/Curs-IFCD0021--1-green)

Aplicación web Single Page Application (SPA) desarrollada con **React.js** y **Vite**, orientada a la gestión y visualización de un catálogo de esculturas públicas internacionales. 

El proyecto combina una **galería interactiva** con controles avanzados de estado (`useState`), navegación por rutas declarativas (`react-router-dom`), gestión centralizada de estado con **React Context** (`useContext` y custom hook `useSculptures`) y persistencia en la nube mediante **Neon Postgres** a través de su **Data API REST** con autenticación anónima.

---

## 🚀 Funcionalidades Principales

### 1. 🖼️ Galería Interactiva (`/`)
* **Navegación tipo Carrusel:** Desplazamiento secuencial con botones *Next* y *Previous*.
* **Control de Loop (Wrap-around):** Modo cíclico opcional que permite saltar de la última escultura a la primera y viceversa sin bloqueos.
* **Tira de Miniaturas:** Visualización rápida de todas las obras del catálogo con acceso directo.
* **Sistema de Likes:** Botón reactivo por obra (`🤍 Like` / `❤️ Liked`) que mantiene su estado en memoria.
* **Descripción Dinámica:** Truncado de texto a 100 caracteres con botón alternante *Show more / Show less*.
* **Efectos Visuales e Interactividad:** 
  * Selector de color de fondo dinámico.
  * Checkbox para activar animación fluida de escala y transición en la fotografía.

### 2. 📋 Gestión Completa CRUD (`Neon DB`)
* **Create (`/sculptures/new`):** Formulario controlado para dar de alta nuevas esculturas con validaciones.
* **Read (`/sculptures/:id`):** Vista de detalle individual con renderizado condicional del campo opcional `location`.
* **Update (`/sculptures/:id/edit`):** Formulario dual que precarga los datos actuales y actualiza el registro en Neon.
* **Delete (`/sculptures/remove`):** Panel de gestión para eliminar registros de la base de datos con diálogo de confirmación previo.
* **Filtro (`/sculptures/filter`):** Búsqueda reactiva por año sobre los datos sincronizados en memoria.
* **Página 404:** Control de rutas no existentes con vista amigable de *"Página no encontrada"*.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología / Herramienta | Propósito |
|---|---|---|
| **Frontend Core** | [React 19](https://react.dev/) | Biblioteca para la interfaz basada en componentes y hooks |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) | Entorno de desarrollo ultrarrápido y compilación optimizada |
| **Enrutamiento** | [React Router 7](https://reactrouter.com/) | SPA declarativa con rutas anidadas (`Layout`, `NavLink`, `Outlet`) |
| **Gestión de Estado** | React Context (`useContext`) | Estado global reactivo mediante el hook `useSculptures` |
| **Base de Datos Cloud** | [Neon Postgres](https://neon.tech/) | Base de datos serverless con Data API REST |
| **SDK de Conexión** | `@neondatabase/neon-js` | Cliente HTTP ligero con Neon Auth (Anonymous Access) |

---

## 📐 Arquitectura de Datos

```text
               ┌────────────────────────────────────────────────────────┐
               │           Neon Postgres (Serverless Cloud)             │
               └───────────────────────────┬────────────────────────────┘
                                           │ Data API REST (HTTP)
                                           ▼
               ┌────────────────────────────────────────────────────────┐
               │         src/Neon.js (@neondatabase/neon-js)            │
               └───────────────────────────┬────────────────────────────┘
                                           │ unwrap() & SculptureApiService
                                           ▼
               ┌────────────────────────────────────────────────────────┐
               │      SculpturesContext.jsx  <SculpturesProvider>       │
               │  (Estado global: sculptures, loading, error, acciones)  │
               └───────────────────────────┬────────────────────────────┘
                                           │ useSculptures()
                     ┌─────────────────────┼─────────────────────┐
                     ▼                     ▼                     ▼
              SculptureListPage   SculptureFormPage    SculptureRemovePage
                 (Galería)          (Create/Edit)           (Delete)
```

---

## 📦 Puesta en Marcha en Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/JoseJavaCifoVioleta/sculptures-app-mariJava-course.git
cd sculptures-app-mariJava-course
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto tomando como plantilla `.env.example`:

```env
VITE_NEON_AUTH_URL=https://<tu-instancia>.neonauth.<region>.aws.neon.tech/neondb/auth
VITE_NEON_DATA_API_URL=https://<tu-instancia>.apirest.<region>.aws.neon.tech/neondb/rest/v1
```

> **Nota:** Recuerda habilitar el rol `anonymous` con permisos `SELECT, INSERT, UPDATE, DELETE` en tu consola de Neon y añadir `http://localhost:5173` a los dominios de confianza (*Trusted domains*).

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible de inmediato en [http://localhost:5173](http://localhost:5173).

---

## 🏫 Centro de Formación y Programa

Proyecto desarrollado como parte del itinerario formativo profesional en:

* **Centro:** [CIFO Barcelona - La Violeta (SOC - Servei Públic d'Ocupació de Catalunya)](https://serveiocupacio.gencat.cat/ca/soc/com-ens-organitzem/centres-propis-formacio-cifo-cfpa/centres-dinnovacio-i-formacio-ocupacional-cifo/cifo-barcelona-la-violeta/)
* **Ubicación:** Barcelona, Catalunya
* **Especialidad:** Fullstack júnior web developer amb Java
* **Código de curso:** `IFCD0021-1`

---

## 👥 Equipo de Desarrollo

| Miembro | Perfil de GitHub |
|---|---|
| 👩‍💻 **Mari** | [@mariJava-course](https://github.com/mariJava-course) |
| 👨‍💻 **Eliecer Araujo** | [@elieceraraujo](https://github.com/elieceraraujo) |
| 👩‍💻 **Francesca Romano** | [@FrancescaRomano91](https://github.com/FrancescaRomano91) |
| 👩‍💻 **Sharona** | [@Mi-Sharona](https://github.com/Mi-Sharona) |
| 👨‍💻 **José** | [@JoseJavaCifoVioleta](https://github.com/JoseJavaCifoVioleta) |

---

## 📄 Licencia y Reconocimientos
* **Fuente de datos y enunciados:** Inspirado en el catálogo y ejercicios de práctica de [AlbertProfe/sculptures](https://github.com/AlbertProfe/sculptures).
* Proyecto con fines exclusivamente formativos y educativos.
