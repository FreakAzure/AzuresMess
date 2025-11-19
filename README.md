# Azure's Mess - Portfolio Personal

Un portfolio personal moderno construido con React, diseñado con mobile first y dark mode con paleta de colores azules y morados.

## 🚀 Características

- ✨ Diseño moderno y responsive (mobile first)
- 🌙 Dark mode con paleta de colores azules y morados
- 📱 Totalmente responsive
- 🎨 Interfaz intuitiva y atractiva
- 📝 Sección de proyectos con capacidad de agregar nuevos
- 📄 Sección de CV con experiencia, educación y habilidades
- 🔗 Enlaces a redes sociales

## 🛠️ Tecnologías

- React 18
- Vite
- Tailwind CSS
- React Icons

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🚀 Despliegue

El proyecto incluye configuraciones para diferentes plataformas de hosting:

### Vercel
El archivo `vercel.json` está configurado para manejar rutas del cliente automáticamente.

### Netlify
El archivo `netlify.toml` y `public/_redirects` están configurados para redirigir todas las rutas a `index.html`.

### Apache
El archivo `public/.htaccess` está incluido para servidores Apache. Asegúrate de que `mod_rewrite` esté habilitado.

### Nginx
Si usas Nginx, añade esta configuración a tu servidor:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Importante**: Sin estas configuraciones, al recargar la página en rutas como `/cv` o `/projects` obtendrás un error 404. Todas las rutas deben redirigirse a `index.html` para que React Router funcione correctamente.

## 📝 Personalización

### Colores
Los colores pueden ser modificados en `tailwind.config.js` en la sección `colors`.

### Contenido
- Edita los componentes en `src/components/` para personalizar el contenido
- Actualiza los enlaces de redes sociales en `Hero.jsx` y `Footer.jsx`
- Modifica la información del CV en `CV.jsx`
- Agrega tus proyectos desde la interfaz o edita `App.jsx`

## 📄 Licencia

MIT

