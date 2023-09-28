import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { ConfigProvider } from "antd";
import { LANGUAGES, SESSION_STORAGE_KEYS } from "./src/constants";
import { useEffect } from "react";
import i18n from "./src/locales/i18";
import { I18nextProvider } from "react-i18next";
import "./src/theme/variables.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  useEffect(() => {
    const activeLanguage =
      sessionStorage.getItem(SESSION_STORAGE_KEYS.LANGUAGE) || LANGUAGES.AR;
    if (activeLanguage !== i18n.language) {
      i18n.changeLanguage(activeLanguage);
      sessionStorage.setItem(SESSION_STORAGE_KEYS.LANGUAGE, activeLanguage);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        direction={i18n.language === LANGUAGES.EN ? "ltr" : "rtl"}
        theme={{
          token: {
            colorPrimary: "#0F3C5A",
            colorSuccess: "#4ea64e",
            colorWarning: "#c5871f",
            colorError: "#9c3b3b",
            colorLink: "#27918D",
            colorInfo: "#27918D",
            fontSize: 16,
          },
        }}
      >
        {element}
      </ConfigProvider>
    </I18nextProvider>
  );
};
