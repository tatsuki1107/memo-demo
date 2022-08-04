import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const TypographyTitle = ({ memo, level }) => {
  return (
    <>
      <Title level={level}>{memo}</Title>
    </>
  )
};

export default TypographyTitle;
