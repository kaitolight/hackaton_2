import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./userDashboard.css";
import Nav from "../../components/nav/Nav";

import FeedRSS from "../../components/FeedRSS";

function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      navigate("/userDashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        <div className="feed-outer-flex">
          <FeedRSS />
        </div>
      </div>
      <div className="viewProjet"></div>
    </div>
  );
}

export default UserDashboard;
