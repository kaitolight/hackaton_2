import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container-flex">
        <div className="landing-container">
          <div className="landing-flex">
            <div className="first-container-landing">
              <p className="container-title">New on the platform?</p>
              <button className="container-button" onClick={handleRegister}>
                Please register!
              </button>
            </div>
            <div className="second-container-landing">
              <p className="container-title">Already registered?</p>
              <button className="container-button" onClick={handleLogin}>
                Please login!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
