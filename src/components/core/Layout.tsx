import * as React from "react";
import { useTranslation } from "react-i18next";
import { Content } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { LANGUAGES } from "../../constants";
import { SEO } from "../seo";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
  meta: {
    title: string;
    description: string;
  };
};

export const Layout = ({ meta, children }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ direction: i18n.language === LANGUAGES.EN ? "ltr" : "rtl" }}>
      <SEO {...meta} />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
