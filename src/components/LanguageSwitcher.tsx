"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Column, DropdownWrapper, Option, ToggleButton } from "@once-ui-system/core";

import { LOCALE_COOKIE, localeLabels, locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Header button with the i18n icon that switches the site between ES, EN and PT */
export const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const changeLocale = (value: string) => {
    setIsOpen(false);
    if (value === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${value}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
    // Server components read the cookie, so a refresh re-renders everything in the new language
    startTransition(() => router.refresh());
  };

  return (
    <DropdownWrapper
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom-end"
      selectedOption={locale}
      trigger={
        <ToggleButton
          prefixIcon="language"
          label={localeLabels[locale].short}
          selected={isOpen}
          disabled={isPending}
          aria-label={t.nav.language}
        />
      }
      dropdown={
        <Column padding="4" gap="2" minWidth={10}>
          {locales.map((code: Locale) => (
            <Option
              key={code}
              value={code}
              label={localeLabels[code].name}
              hasPrefix={localeLabels[code].short}
              selected={code === locale}
              onClick={changeLocale}
            />
          ))}
        </Column>
      }
    />
  );
};
