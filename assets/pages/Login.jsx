import React, { useState } from "react";

import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDefault = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="login-flex">
        <div className="signup-form">
          <form onSubmit={handleDefault}>
            <h1 className="title-login">Formulaire d'inscription</h1>
            <p className="login-first-p">► Email</p>
            <input
              placeholder="Your email"
              className="login-input"
              value={email}
              onChange={handleEmail}
            />
            <p className="login-p">► Password</p>
            <input
              placeholder="Your password"
              className="login-input"
              type="password"
              value={password}
              onChange={handlePassword}
            />
            <div className="button-flex">
              <button className="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
