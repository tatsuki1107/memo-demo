import React from "react";
import { Input } from "antd";

const InputMemo = ({ size, style, onChange }) => {
  return (
    <>
      <Input placeholder="Basic usage"
        size={size}
        style={style}
        onChange={onChange} />
    </>
  )
};

export default InputMemo;
