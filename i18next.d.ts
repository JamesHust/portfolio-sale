import type common from "@/i18n/en-US/common";

interface I18nNamespaces {
  common: typeof common;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
