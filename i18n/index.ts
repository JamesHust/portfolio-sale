import Cookies from "js-cookie";

import { LANGUAGE, LanguagesSupported } from "@/i18n/language";
import { changeLanguage } from "i18next";

export const i18n = {
  defaultLocale: LANGUAGE.EN,
  locales: LanguagesSupported,
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const setLocaleOnClient = async (locale: Locale, reloadPage = true) => {
  Cookies.set('locale', locale);
  await changeLanguage(locale);
  reloadPage && location.reload();
};

export const getLocaleOnClient = (): Locale => {
  return (Cookies.get('locale') as Locale) || i18n.defaultLocale;
};
