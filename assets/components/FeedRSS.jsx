import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Person from "./UserInfo/person.jpg";
import "../styles/FeedRSS.css";

function FeedRSS() {
  const [newProject, setNewProject] = useState([]);
  console.log(newProject);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setNewProject(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="feed-outer-flex">
        {newProject.map((data) => (
          <div className="feed-container" key={data.id}>
            <div className="feed-flex">
              <img src={Person} alt={data.author} className="feed-img" />
              <h2 className="feed-title">{data.user.firstName}</h2>
              <div className="flex-category">
                <h2 className="feed-title">
                  From {data.agency.name}, in {data.category.name}
                </h2>
              </div>
            </div>
            <div className="flex-desc">
              <div className="feed-desc">
                <h2 className="desc-title">
                  {data.name}, launched in{" "}
                  {moment(data.createdAt).format("MMMM Do YYYY")}
                </h2>
                <p className="desc-text">{data.description}</p>
              </div>
            </div>
            <div className="flex-button">
              <button className="comment-button">View comments</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeedRSS;
