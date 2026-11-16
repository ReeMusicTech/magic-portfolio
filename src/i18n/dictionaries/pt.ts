import type { Dictionary } from "./en";

const pt: Dictionary = {
  nav: {
    home: "Início",
    language: "Idioma",
    switchTheme: (mode) => `Mudar para o modo ${mode === "dark" ? "escuro" : "claro"}`,
  },
  home: {
    latestFromBlog: "Novidades do blog",
  },
  about: {
    scheduleCall: "Agende uma conversa",
  },
  blog: {
    earlierPosts: "Publicações anteriores",
    recentPosts: "Publicações recentes",
    onThisPage: "Nesta página",
    thumbnailOf: "Miniatura de",
  },
  work: {
    projects: "Projetos",
    relatedProjects: "Projetos relacionados",
    readCaseStudy: "Ler estudo de caso",
    viewProject: "Ver projeto",
  },
  playlist: {
    recentPlaylists: "Playlists recentes",
  },
  newsletter: {
    donateNow: "Doe agora",
    invalidEmail: "Por favor, insira um endereço de e-mail válido.",
  },
  footer: {
    playWith: "Toque a música com",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe.",
  },
  routeGuard: {
    protected: "Esta página é protegida por senha",
    password: "Senha",
    submit: "Enviar",
    incorrect: "Senha incorreta",
  },
  headingLink: {
    copied: "Link copiado para a área de transferência.",
    failed: "Não foi possível copiar o link.",
  },
  date: {
    today: "Hoje",
    yearsAgo: (n) => `há ${n} ${n === 1 ? "ano" : "anos"}`,
    monthsAgo: (n) => `há ${n} ${n === 1 ? "mês" : "meses"}`,
    daysAgo: (n) => `há ${n} ${n === 1 ? "dia" : "dias"}`,
  },
};

export default pt;
