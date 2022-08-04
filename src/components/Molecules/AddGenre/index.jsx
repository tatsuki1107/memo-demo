import React, { useState } from "react";
import { Form } from "antd";
import ButtonSubmit from "../../Atoms/Button";
import InputMemo from "../../Atoms/Input";
import { db } from "../../../firebase";

const AddGenre = () => {
  const [genre, setGenre] = useState('');
  const onFinish = async () => {
    try {
      const addG = await db.collection('genre').add({ genre: genre });
      console.log('add genre!!', addG.id)
    } catch (e) {
      console.error('Error adding document:', e)
    }
  }
  return (
    <Form onFinish={onFinish}>
      <Form.Item value={genre}>
        <InputMemo
          size="default"
          onChange={e => { setGenre(e.target.value) }} />
      </Form.Item>
      <Form.Item>
        <ButtonSubmit name="ジャンルを追加する" />
      </Form.Item>
    </Form>
  );
};

export default AddGenre;
