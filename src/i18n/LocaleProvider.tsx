"use client";

import { createContext, useContext, useMemo } from "react";
import { getContent, type SiteContent } from "@/resources/locales";
import { defaultLocale, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./index";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  content: SiteContent;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  t: getDictionary(defaultLocale),
  content: getContent(defaultLocale),
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({ locale, t: getDictionary(locale), content: getContent(locale) }),
    [locale],
  );
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
