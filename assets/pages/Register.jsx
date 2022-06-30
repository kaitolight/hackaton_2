import React from "react";
import { Navigate } from 'react-router-dom';
import "../styles/Register.css";

function Register({ newUser, canGoToUserDashboard, setNewUser, goToUserDashboardFromRegister }) {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [agency, setAgency] = useState("");
  // const [job, setJob] = useState("");
  // const [working, setWorking] = useState(false);

  // const handleDefault = (e) => {
  //   e.preventDefault();
  // };
  // const handleFirstname = (e) => {
  //   setFirstname(e.target.value);
  // };
  // const handleLastname = (e) => {
  //   setLastname(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleAgency = (e) => {
  //   setAgency(e.target.value);
  // };
  // const handleJob = (e) => {
  //   setJob(e.target.value);
  // };
  // const handleWorking = (e) => {
  //   setWorking(e.target.checked);
  // };
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  if (canGoToUserDashboard) {
    return <Navigate to='/userDashboard' />
  }
  return (
    <>
      <div className="register-flex">
        <div className="signup-form">
          <form onSubmit={() => goToUserDashboardFromRegister(e, newUser)}>
            <h1 className="title-signup">Formulaire d'inscription</h1>
            <p className="register-first-p">► Firstname</p>
            <input
              placeholder="Your firstname"
              className="register-input"
              name="firstname"
              onChange={handleChange}
            />
            <p className="register-p">► Lastname</p>
            <input
              placeholder="Your lastname"
              className="register-input"
              name="lastname"
              onChange={handleChange}
            />
            <p className="register-p">► Email address</p>
            <input
              placeholder="Your email address"
              className="register-input"
              name="email"
              onChange={handleChange}
            />
            <p className="register-p">► Password</p>
            <input
              placeholder="Your password"
              className="register-input"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <p className="register-p">► Affiliated agency</p>
            <input
              placeholder="Your agency"
              className="register-input"
              name="agency"
              onChange={handleChange}
            />
            <p className="register-p">► Job</p>
            <input
              placeholder="Your job"
              className="register-input"
              name="job"
              onChange={handleChange}
            />
            <p className="register-p">► Are you currently working?</p>
            <input
              type="checkbox"
              className="register-checkbox"
              name="working"
              onChange={handleChange}
            />
            <div className="button-flex">
              <button className="register-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
