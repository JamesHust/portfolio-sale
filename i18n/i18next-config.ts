"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LANGUAGE, LanguagesSupported } from "@/i18n/language";

const loadLangResources = (lang: string) => ({
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  translation: require(`./${lang}/common`).default,
});

// Automatically generate the resources object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resources = LanguagesSupported.reduce((acc: any, lang: string) => {
  acc[lang] = loadLangResources(lang);
  return acc;
}, {});

i18n.use(initReactI18next).init({
  lng: undefined,
  fallbackLng: LANGUAGE.EN,
  resources,
});

export const changeLanguage = i18n.changeLanguage;
export default i18n;
