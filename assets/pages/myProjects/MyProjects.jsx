import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./myProjects.css";
import Nav from "../../components/nav/Nav";

import FeedRSSMyprojects from "../../components/FeedRSSMyprojects";

function MyProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      navigate("/myProjects");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        <div className="feed-outer-flex">
          <FeedRSSMyprojects />
        </div>
      </div>
      <div className="viewProjet"></div>
    </div>
  );
}

export default MyProjects;
