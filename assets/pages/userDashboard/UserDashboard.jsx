import React from "react";
import "./userDashboard.css";
import Nav from "../../components/nav/Nav";
import moment from "moment";

import Person from "../../components/UserInfo/person.jpg";
import FeedRSS from "../../components/FeedRSS";

function UserDashboard() {
  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        <div className="feed-outer-flex">
          <FeedRSS />
        </div>
      </div>
      <div className="viewProjet">
        {/* {commentList.map((data) => (
          <div className="comment-container">
            <h2 className="comment-title">By {data.author}</h2>
            <div className="message-flex">
              <div className="comment-message">
                <p className="comment-text">${data.message}</p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default UserDashboard;
