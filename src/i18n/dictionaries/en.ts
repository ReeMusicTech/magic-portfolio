const en = {
  nav: {
    home: "Home",
    language: "Language",
    switchTheme: (mode: "light" | "dark") => `Switch to ${mode} mode`,
  },
  home: {
    latestFromBlog: "Latest from the blog",
  },
  about: {
    scheduleCall: "Schedule a call",
  },
  blog: {
    earlierPosts: "Earlier posts",
    recentPosts: "Recent posts",
    onThisPage: "On this page",
    thumbnailOf: "Thumbnail of",
  },
  work: {
    projects: "Projects",
    relatedProjects: "Related projects",
    readCaseStudy: "Read case study",
    viewProject: "View project",
  },
  playlist: {
    recentPlaylists: "Recent playlists",
  },
  newsletter: {
    donateNow: "Donate Now",
    invalidEmail: "Please enter a valid email address.",
  },
  footer: {
    playWith: "Play the music with",
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  },
  routeGuard: {
    protected: "This page is password protected",
    password: "Password",
    submit: "Submit",
    incorrect: "Incorrect password",
  },
  headingLink: {
    copied: "Link copied to clipboard.",
    failed: "Failed to copy link.",
  },
  date: {
    today: "Today",
    yearsAgo: (n: number) => `${n}y ago`,
    monthsAgo: (n: number) => `${n}mo ago`,
    daysAgo: (n: number) => `${n}d ago`,
  },
};

export type Dictionary = typeof en;

export default en;
