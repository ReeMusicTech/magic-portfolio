import { defaultLocale, getDictionary, localeTags, type Locale } from "@/i18n";

export function formatDate(date: string, includeRelative = false, locale: Locale = defaultLocale) {
  const t = getDictionary(locale).date;
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = t.yearsAgo(yearsAgo);
  } else if (monthsAgo > 0) {
    formattedDate = t.monthsAgo(monthsAgo);
  } else if (daysAgo > 0) {
    formattedDate = t.daysAgo(daysAgo);
  } else {
    formattedDate = t.today;
  }

  const fullDate = targetDate.toLocaleString(localeTags[locale], {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
