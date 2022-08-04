import { Card } from "antd";
import React from "react";
import TypographyText from "../../Atoms/Typography/Text";

const Memo = ({ date, text }) => {
  return (
    <Card style={{ width: 300 }}>
      <TypographyText type="default" text={date} />
      <TypographyText type="default" text={text} />
    </Card>
  );
};

export default Memo;
