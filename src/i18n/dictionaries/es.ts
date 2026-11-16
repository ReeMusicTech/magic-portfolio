import type { Dictionary } from "./en";

const es: Dictionary = {
  nav: {
    home: "Inicio",
    language: "Idioma",
    switchTheme: (mode) => `Cambiar a modo ${mode === "dark" ? "oscuro" : "claro"}`,
  },
  home: {
    latestFromBlog: "Lo último del blog",
  },
  about: {
    scheduleCall: "Agenda una llamada",
  },
  blog: {
    earlierPosts: "Publicaciones anteriores",
    recentPosts: "Publicaciones recientes",
    onThisPage: "En esta página",
    thumbnailOf: "Miniatura de",
  },
  work: {
    projects: "Proyectos",
    relatedProjects: "Proyectos relacionados",
    readCaseStudy: "Leer caso de estudio",
    viewProject: "Ver proyecto",
  },
  playlist: {
    recentPlaylists: "Playlists recientes",
  },
  newsletter: {
    donateNow: "Donar ahora",
    invalidEmail: "Por favor ingresa un correo electrónico válido.",
  },
  footer: {
    playWith: "Reproduce la música con",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe.",
  },
  routeGuard: {
    protected: "Esta página está protegida con contraseña",
    password: "Contraseña",
    submit: "Enviar",
    incorrect: "Contraseña incorrecta",
  },
  headingLink: {
    copied: "Enlace copiado al portapapeles.",
    failed: "No se pudo copiar el enlace.",
  },
  date: {
    today: "Hoy",
    yearsAgo: (n) => `hace ${n} ${n === 1 ? "año" : "años"}`,
    monthsAgo: (n) => `hace ${n} ${n === 1 ? "mes" : "meses"}`,
    daysAgo: (n) => `hace ${n} ${n === 1 ? "día" : "días"}`,
  },
};

export default es;
