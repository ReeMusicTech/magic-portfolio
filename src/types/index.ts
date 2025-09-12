export * from "./config.types";
export * from "./content.types";
export interface Playlist {
  // Propiedades existentes...
  id: string;
  name: string;
  // Agrega esta línea:
  path: string;
  label: string;
  title: string;
  description: string;
  // ... otras propiedades que ya tengas
}