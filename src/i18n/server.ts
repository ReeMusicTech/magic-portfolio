import { cookies, headers } from "next/headers";
import { getContent } from "@/resources/locales";
import { LOCALE_COOKIE, isLocale, matchLocale, type Locale } from "./config";
import { getDictionary } from "./index";

/**
 * Resolves the active locale on the server:
 * 1. the NEXT_LOCALE cookie (set by the language switcher)
 * 2. the browser's Accept-Language header
 * 3. the default locale
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const headerStore = await headers();
  return matchLocale(headerStore.get("accept-language"));
}

/** Locale + UI dictionary + translated site content, for server components */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale), content: getContent(locale) };
}
