# Quickbet 🎥

Quickbet es una aplicación de películas desarrollada con Next.js. Permite a los usuarios explorar información sobre películas populares, buscar títulos específicos y ver detalles como sinopsis, calificación y más.

## Características 🚀

- Lista de películas populares y recientes.
- Búsqueda de películas por título.
- Detalles de cada película, incluyendo sinopsis, calificación, y fecha de lanzamiento.
- Diseño responsivo para dispositivos móviles y de escritorio.

## Tecnologías utilizadas 🛠️

- [Next.js](https://nextjs.org/) - Framework React para aplicaciones web.
- [SASS](https://sass-lang.com/) - Preprocesador CSS para estilos personalizados.
- [TMDB API](https://www.themoviedb.org/documentation/api) - API para obtener datos de películas.

## Requisitos previos 📋

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (v16 o superior)
- npm o yarn

## Instalación 🔧

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/quickbet.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd quickbet
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

4. Crea un archivo `.env.local` en la raíz del proyecto y añade tu clave de la API de TMDB:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=tu_clave_api
   ```

## Uso 🔥

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

2. Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Estructura del proyecto 📂

```plaintext
.
├── app              # Carpeta principal de la aplicación
│   ├── assets       # Archivos estáticos como imágenes
│   ├── components   # Componentes reutilizables
│   ├── context      # Contextos para el manejo de estado global
│   ├── favoritos    # Funcionalidades relacionadas con favoritos
│   ├── generos      # Gestión de géneros de películas
│   ├── interface    # Interfaces TypeScript para tipos
│   ├── movies       # Funcionalidades relacionadas con películas
│   ├── search       # Componentes de búsqueda
│   ├── services     # Lógica para interactuar con la API
│   ├── templates    # Plantillas reutilizables
│   └── utils        # Funciones auxiliares (por ejemplo, manejo de datos)
├── .env.local       # Variables de entorno (no incluido en el repositorio)
├── package.json     # Dependencias y scripts del proyecto
├── tsconfig.json    # Configuración de TypeScript
└── README.md        # Documentación del proyecto
```

## Despliegue 🚀

Para desplegar la aplicación, sigue los pasos de tu plataforma favorita, como [Vercel](https://vercel.com/):

1. Crea un nuevo proyecto en Vercel y conecta este repositorio.
2. Asegúrate de configurar las variables de entorno en la sección de configuración del proyecto en Vercel.
3. Despliega la aplicación y accede a tu URL pública.

## Contribución 🤝

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad:

   ```bash
   git checkout -b nueva-funcionalidad
   ```

3. Realiza tus cambios y haz un commit:

   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```

4. Envía tus cambios a tu fork:

   ```bash
   git push origin nueva-funcionalidad
   ```

5. Abre un pull request en este repositorio.

## Licencia 📄

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar Quickbet! 🎬 Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.
