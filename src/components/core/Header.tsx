import { Button, Row } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, SESSION_STORAGE_KEYS } from "../../constants";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const onChangeLanguage = (activeLanguage) => {
    i18n.changeLanguage(activeLanguage);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.LANGUAGE, activeLanguage);
  };

  return (
    <Row>
      <Button
        onClick={() => {
          onChangeLanguage(
            i18n.language === LANGUAGES.AR ? LANGUAGES.EN : LANGUAGES.AR
          );
        }}
      >
        Change Language
      </Button>
    </Row>
  );
};
