export enum LANGUAGE {
  EN = "en-US",
  VI = "vi-VN",
}

export type LanguageItem = {
  value: string;
  name: string;
  img: string;
};

export const languages: LanguageItem[] = [
  {
    value: LANGUAGE.EN,
    name: "English",
    img: "/img/flag-en.svg",
  },
  {
    value: LANGUAGE.VI,
    name: "Việt Nam",
    img: "/img/flag-vi.svg",
  },
];

export const LanguagesSupported = languages.map((item) => item.value);

export const getLanguage = (locale: string): string => {
  if (locale) {
    return locale.replace("-", "_");
  }
  return LanguagesSupported[0].replace("-", "_");
};
