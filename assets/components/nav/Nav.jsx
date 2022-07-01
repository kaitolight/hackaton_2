import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div id="navContainer">
      <Link to="/UserDashboard" className="buttonHome">
        <h1>HOME</h1>
      </Link>
      <UserInfo />
      <div className="othersButtonsContainer">
        <Link to="/filter-projects" className="othersButtons">
          <h1>FILTER PROJECTS</h1>
        </Link>
        <Link to="/UserDashboard" className="othersButtons">
          <h1>SEARCH A PROJECT</h1>
        </Link>
        <Link to="/createProjet" className="othersButtons">
          <h1>CREATE A PROJECT</h1>
        </Link>
      </div>
      <p>Made with 🧡 by SYMREACT's team </p>
    </div>
  );
}

export default Nav;
