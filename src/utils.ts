import { i18n } from "i18next";
import { LANGUAGES } from "./constants";

export const getDirection = (i18n: i18n) => {
  if (i18n.language === LANGUAGES.EN) return "ltr";
  return "rtl";
};
