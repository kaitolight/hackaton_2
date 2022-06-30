import React from "react";
import { Navigate } from 'react-router-dom';
import "../styles/Login.css";

function Login({ canGoToUserDashboard, goToUserDashboard, setUser, user }) {
  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  if (canGoToUserDashboard) {
    return <Navigate to='/userDashboard' />
  }
  return (
    <>
      <div className="login-flex">
        <div className="signup-form">
          <form onSubmit={goToUserDashboard}>
            <h1 className="title-login">Formulaire de connexion</h1>
            <p className="login-first-p">► Email</p>
            <input
              placeholder="Your email"
              className="login-input"
              name="email"
              onChange={handleChange}
            />
            <p className="login-p">► Password</p>
            <input
              placeholder="Your password"
              className="login-input"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <div className="button-flex">
              <button className="login-button" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
