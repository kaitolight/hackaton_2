import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState("");
  const [job, setJob] = useState("");
  const [working, setWorking] = useState(false);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAgency = (e) => {
    setAgency(e.target.value);
  };
  const handleJob = (e) => {
    setJob(e.target.value);
  };
  const handleWorking = (e) => {
    setWorking(e.target.checked);
  };

  return (
    <>
      <div className="register-flex">
        <div className="signup-form">
          <h1 className="title-signup">Formulaire d'inscription</h1>
          <p className="register-first-p">► Firstname</p>
          <input
            placeholder="Your firstname"
            className="register-input"
            value={firstname}
            onChange={handleFirstname}
          />
          <p className="register-p">► Lastname</p>
          <input
            placeholder="Your lastname"
            className="register-input"
            value={lastname}
            onChange={handleLastname}
          />
          <p className="register-p">► Email address</p>
          <input
            placeholder="Your email address"
            className="register-input"
            value={email}
            onChange={handleEmail}
          />
          <p className="register-p">► Password</p>
          <input
            placeholder="Your password"
            className="register-input"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <p className="register-p">► Affiliated agency</p>
          <input
            placeholder="Your agency"
            className="register-input"
            value={agency}
            onChange={handleAgency}
          />
          <p className="register-p">► Job</p>
          <input
            placeholder="Your job"
            className="register-input"
            value={job}
            onChange={handleJob}
          />
          <p className="register-p">► Are you currently working?</p>
          <input
            type="checkbox"
            className="register-checkbox"
            value={working}
            onChange={handleWorking}
          />
        </div>
      </div>
    </>
  );
}

export default Register;
