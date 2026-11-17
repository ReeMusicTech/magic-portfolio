import { About, Blog, Home, Playlist, Newsletter, Person, Social, Work } from "@/types";

export type PlaylistItem = {
  title: string;
  description: string;
  platform: "spotify" | "youtube" | "apple";
  url: string;
  featured?: boolean;
};

export type PlaylistPage = {
  intro: string;
  supportTitle: string;
  supportDescription: string;
  supportThanks: string;
  items: PlaylistItem[];
};

export type SiteContent = {
  person: Person;
  social: Social;
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
  playlist: Playlist;
  playlistPage: PlaylistPage;
  work: Work;
};

/** Data that does not change between languages */
export const basePerson = {
  firstName: "Ricardo",
  lastName: "Aya",
  name: "Ricardo Aya",
  avatar: "/images/avatar.jpg",
  email: "ricardo.aya@bido.app",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
} as const;

export const socialLinks = {
  github: "https://github.com/ReeMusicTech",
  linkedin: "https://www.linkedin.com/in/ricardo-aya-47715520/",
  whatsapp: "https://wa.me/573002155611",
  email: `mailto:${basePerson.email}`,
};

export const calendarLink = "https://meetings.hubspot.com/ricardo-aya1";

export const featuredHref = "/work/building-bido-a-blanket-music-licensing-platform";

export const playlistUrls = {
  lobby: "https://open.spotify.com/playlist/1eCz0Dd3pNvFVBlgpHx8Zm",
  restaurant: "https://music.youtube.com/playlist?list=PL9oikhlzCWtmiN7kmdVxusq_EHAcz1Ot2",
  jazz: "https://music.apple.com/mx/album/data-driven-dreams-vol-2/1822592670",
  catalog: "https://music.youtube.com/browse/MPADUCujl0XxYFeJo6xqaGBe5Zdw",
  fashion: "https://open.spotify.com/playlist/5wPaFaBKUL0rjEUa52Ybfj",
  christmas: "https://open.spotify.com/playlist/4SR4w3Z8ElUk1Tt5EIVB7v",
};

export const projectImages = {
  bido: "/images/projects/project-01/cover-01.jpg",
  figma1: "/images/projects/project-01/cover-02.jpg",
  figma2: "/images/projects/project-01/cover-03.jpg",
  next: "/images/projects/project-01/cover-04.jpg",
  troly: "/images/projects/project-02/troly-home.webp",
};
