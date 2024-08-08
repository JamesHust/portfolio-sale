import { i18n, Locale } from ".";
import Negotiator from "negotiator";
import { cookies, headers } from "next/headers";
import { match } from "@formatjs/intl-localematcher";
import { LANGUAGE } from "@/i18n/language";

export const getLocaleOnServer = (): Locale | undefined => {
  const locales: string[] = i18n.locales;
  let languages: string[] | undefined;

  // get locale from cookie
  const localeCookie = cookies().get("locale");
  languages = localeCookie?.value ? [localeCookie.value] : [];

  if (i18n.defaultLocale) {
    return i18n.defaultLocale;
  }

  if (!languages.length) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    headers().forEach((value, key) => (negotiatorHeaders[key] = value));
    // Use negotiator and intl-localematcher to get best locale
    languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    // Validate languages
    if (!Array.isArray(languages) || languages.length === 0 || !languages.every((lang) => /^[\w-]+$/.test(lang))) {
      console.error(`Invalid languages: ${languages}`);
      languages = [LANGUAGE.VI];
    }

    // match locale
    return match(languages, locales, LANGUAGE.VI) as Locale;
  }
};
