import React from "react";
import I18N from "./i18n";
import { getLocaleOnServer } from "@/i18n/server";
import { LANGUAGE } from "@/i18n/language";

export type II18NServerProps = {
  children: React.ReactNode;
};

const I18NServer = async ({ children }: II18NServerProps) => {
  const locale = getLocaleOnServer() || LANGUAGE.EN;

  return <I18N {...{ locale }}>{children}</I18N>;
};

export default I18NServer;
