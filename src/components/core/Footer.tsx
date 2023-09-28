import { Col, Row } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { FlexCenterColumnAndRow } from "../Layout";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Row>
      <Col md={24} xs={24}>
        <FlexCenterColumnAndRow>Footer</FlexCenterColumnAndRow>
      </Col>
    </Row>
  );
};
