# Landing Page de Beland

Bienvenido al repositorio del landing page de Beland. Este proyecto es una aplicación web moderna, responsive y funcional construida para presentar la visión y los servicios de Beland, una iniciativa enfocada en construir un ecosistema circular y sostenible.

## Descripción General

Este proyecto sirve como la cara pública de Beland, diseñado para ser visualmente atractivo, rápido y completamente adaptable a cualquier dispositivo (móvil, tablet y escritorio). La aplicación presenta las diferentes áreas de Beland, desde eventos y reciclaje incentivado hasta un blog informativo y una visión a futuro con el "Reto Guinness".

## Tecnologías Utilizadas

La aplicación está construida sobre un stack tecnológico moderno y robusto, enfocado en el rendimiento y la experiencia de desarrollo.

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Librería de UI:** [React](https://react.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de UI:** [ShadCN UI](https://ui.shadcn.com/) - Una colección de componentes reutilizables y accesibles.
- **Inteligencia Artificial (IA):** [Genkit (Google AI)](https://firebase.google.com/docs/genkit) - Utilizado para funcionalidades de IA, como el envío de correos de bienvenida a través del boletín.
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Linting y Formateo:** ESLint y Prettier (integrados en Next.js)

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la mantenibilidad y escalabilidad.

```
/
├── src/
│   ├── app/                # Enrutamiento principal de la aplicación (App Router)
│   │   ├── api/            # Rutas de API (ej. /api/newsletter)
│   │   ├── blog/           # Página y vista detallada del blog
│   │   ├── circularity/    # Página de "Circularidad como un Servicio"
│   │   ├── territories/    # Página de "Territorios Beland"
│   │   ├── layout.tsx      # Layout principal de la aplicación
│   │   └── page.tsx        # Página de inicio (Home)
│   │
│   ├── ai/                 # Lógica de Inteligencia Artificial con Genkit
│   │   ├── flows/          # Flujos de Genkit (ej. envío de email)
│   │   └── templates/      # Plantillas (ej. template HTML para el correo)
│   │
│   ├── components/         # Componentes de React reutilizables
│   │   ├── blog/           # Componentes específicos del blog (PostCard, Pagination)
│   │   ├── home/           # Componentes de las secciones de la página de inicio
│   │   ├── layout/         # Componentes de la estructura (Header, Footer)
│   │   └── ui/             # Componentes base de ShadCN (Button, Card, etc.)
│   │
│   ├── hooks/              # Hooks de React personalizados (ej. useScrollSpy, useToast)
│   │
│   ├── lib/                # Funciones de utilidad y datos estáticos
│   │   ├── data.ts         # Datos estáticos (testimonios, posts del blog)
│   │   └── utils.ts        # Funciones de utilidad (ej. cn para clases de Tailwind)
│   │
│   └── types/              # Definiciones de tipos de TypeScript
│
├── public/                 # Archivos estáticos (imágenes, fuentes)
│
└── tailwind.config.ts      # Configuración de Tailwind CSS
```

## Características Implementadas

### Navegación y Diseño
- **Diseño Responsive:** Totalmente adaptado para una visualización óptima en ordenadores, tablets y dispositivos móviles.
- **Navegación Intuitiva:** Un encabezado fijo con enlaces a las secciones principales.
- **Scroll-Spy:** El enlace de la barra de navegación se resalta automáticamente para indicar en qué sección de la página se encuentra el usuario.
- **Modo Claro y Oscuro:** Soporte para cambiar entre temas de color.

### Secciones del Landing Page
1.  **Hero:** Sección principal de bienvenida con un llamado a la acción claro.
2.  **Features (Características):** Presenta los pilares de Beland (Eventos, Reciclaje, Compras, Reuniones) con enlaces que redirigen a una futura página de autenticación.
3.  **About (Sobre Nosotros):** Incluye la historia de Beland, testimonios de la comunidad y una línea de tiempo de hitos importantes.
4.  **Media Gallery (Experiencia Beland):** Una galería de imágenes que muestra el impacto y las actividades de Beland.
5.  **Guinness Challenge (Reto Guinness):** Una sección dedicada a la iniciativa para romper un Récord Guinness, con métricas de impacto.
6.  **CTA (Llamado a la acción):** Enlaces directos a las páginas de "Circularidad" y "Territorios".
7.  **Blog Preview:** Muestra los 3 artículos más recientes del blog.

### Funcionalidades Adicionales
- **Suscripción al Boletín:** Un formulario en el pie de página que, al ser completado, utiliza un flujo de IA (Genkit) para:
    1.  Recibir el correo del usuario a través de una API.
    2.  Enviar un correo de bienvenida desde `belandproject@gmail.com` usando una plantilla HTML personalizable.
    3.  Gestiona URLs para entornos de desarrollo y producción para los enlaces de registro/login.
- **Páginas de Contenido:**
    - **/blog**: Un listado completo de todos los artículos con paginación.
    - **/blog/[slug]**: Vista detallada para cada artículo del blog.
    - **/circularity**: Página dedicada a explicar "Circularidad como un Servicio".
    - **/territories**: Página que muestra el modelo de impacto local de Beland.

## Cómo Empezar (Desarrollo)

Para ejecutar este proyecto en un entorno de desarrollo local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade las credenciales necesarias (por ejemplo, para la API de Google AI).

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:9002`.
```

