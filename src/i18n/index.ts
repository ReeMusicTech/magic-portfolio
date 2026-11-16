import type { Locale } from "./config";
import en, { type Dictionary } from "./dictionaries/en";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = { en, es, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
export * from "./config";
