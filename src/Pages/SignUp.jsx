import React, { useState } from "react";
import { useAuth } from "../routings/AuthService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await createUser(email, password);
    } catch (e) {
      console.error(e)
    } finally {
      navigate('/');
    }
  }
  return (
    <section className="c-section">
      <div className="c-box">
        <p>signUp画面</p>
        <div>
          <input
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="パスワード(6文字以上)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>登録</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
