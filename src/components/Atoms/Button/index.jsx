import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ButtonSubmit = ({ name }) => {
  return (
    <>
      <Button
        block
        type="primary"
        htmlType="submit"
      >{name}</Button>
    </>
  )
}

export default ButtonSubmit;
