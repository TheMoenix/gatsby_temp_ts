import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/core/Layout";

const IndexPage: React.FC<PageProps> = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <Layout {...props} meta={{ title: "title", description: "des" }}>
      {t("title.main")}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
