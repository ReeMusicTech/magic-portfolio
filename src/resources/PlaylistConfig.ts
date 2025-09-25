export interface PlaylistConfig {
  title: string;
  description: string;
  platform: "spotify" | "youtube" | "apple";
  url: string;
  featured?: boolean;
}

// Configuración de las playlists - personaliza aquí tus enlaces y descripciones
export const playlistsConfig: PlaylistConfig[] = [
  {
    title: "Music to lobby hotel",
    description: "Set the perfect tone for your hotel lobby — click to explore a curated soundtrack designed to welcome, relax, and impress.",
    platform: "spotify",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd", // Reemplaza con tu playlist ID
    featured: true,
  },
  {
    title: "Afternoon at the restaurant",
    description: "Play the perfect afternoon vibe — a warm, peaceful soundtrack designed to elevate your restaurant's midday experience.",
    platform: "youtube",
    url: "https://music.youtube.com/playlist?list=RDCLAK5uy_k8g1g4g", // Reemplaza con tu playlist ID
    featured: true,
  },
  {
    title: "A little bit of Jazz",
    description: "Brew the perfect mood — click to enjoy smooth jazz curated for coffee and conversation.",
    platform: "apple",
    url: "https://music.apple.com/playlist/", // Reemplaza con tu playlist ID
  },
  {
    title: "Catalog",
    description: "Discover my full catalog of royalty-free music — crafted to set the perfect atmosphere for any business.",
    platform: "youtube",
    url: "https://music.youtube.com/channel/", // Reemplaza con tu canal ID
  },
  {
    title: "The best music for a fashion store",
    description: "Click to set the trend — the ultimate music playlist tailored for fashion-forward retail spaces.",
    platform: "spotify",
    url: "https://open.spotify.com/playlist/", // Reemplaza con tu playlist ID
  },
];

// Configuración de las plataformas de donación
export const donationConfig = {
  paypal: "https://www.paypal.com/donate/?business=TU_EMAIL&currency_code=USD",
  kofi: "https://ko-fi.com/ricardoaya",
  // Puedes agregar más plataformas aquí
};

// Textos personalizables
export const playlistTexts = {
  mainTitle: "Music that I have created in order to set the mood for a point of sale.",
  mainDescription: "Each playlist is carefully crafted to enhance the customer experience in commercial environments. All tracks are original and 100% royalty-free, ensuring smooth and legal use across your point of sale. Explore the different moods and styles available on your favorite platform.",
  supportTitle: "Support Ricardo",
  supportDescription: "Your contribution helps us keep creating music tailored for businesses around the world. Every donation fuels the mission to make music accessible, legal, and brand-focused for restaurants, hotels, cafés, and more.",
  supportThanks: "Thank you for your support!",
};