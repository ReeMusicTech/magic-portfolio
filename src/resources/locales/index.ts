import type { Locale } from "@/i18n/config";
import en from "./en";
import es from "./es";
import pt from "./pt";
import type { SiteContent } from "./shared";

const contents: Record<Locale, SiteContent> = { en, es, pt };

/** Returns the translated site content (person, home, about, blog, ...) for a locale */
export function getContent(locale: Locale): SiteContent {
  return contents[locale] ?? en;
}

export type { SiteContent };
