import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../routings/AuthService";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await signIn(email, password)
    } catch (e) {
      console.error(e)
    } finally {
      navigate('/');
    }
  }

  return (
    <section className="c-section">
      <div className="c-box">
        <p>LogIn画面</p>
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
          <button onClick={handleSubmit}>ログイン</button>
        </div>
        <Link to='/SignUp'>会員登録はこちら</Link>
      </div>
    </section>
  );
};

export default LogIn;
