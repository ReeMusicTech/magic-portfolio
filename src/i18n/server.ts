import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, isLocale, matchLocale, type Locale } from "./config";

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
