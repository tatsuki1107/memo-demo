import React, { useState } from "react";
import InputMemo from "../../Atoms/Input";
import ButtonSubmit from "../../Atoms/Button";
import { Form } from "antd";

const AddMemo = () => {
  const [memo, setMemo] = useState('')
  const writeMemo = () => { };
  return (
    <Form onFinish={writeMemo}>
      <Form.Item value={memo}>
        <InputMemo
          size="large"
          onChange={e => { setMemo(e.target.value) }} />
      </Form.Item>
      <Form.Item>
        <ButtonSubmit name="メモする" />
      </Form.Item>
    </Form>
  );
};

export default AddMemo;
