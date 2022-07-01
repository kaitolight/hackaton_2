import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Person from "./UserInfo/person.jpg";
import "../styles/FeedRSS.css";

function FeedRSSMyprojects() {
  const [newProject, setNewProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setNewProject(res.data))
      .catch((err) => console.log(err));
  }, []);
const myProjects = newProject.find(projet => projet.user.id === 10)
console.log(myProjects)
  return (
    <>
      <div className="feed-outer-flex">
        {newProject.filter(projet => projet.user.id === 10).map((data) => (
          <div className="feed-container" key={data.id}>
            <div className="feed-flex">
              <img src={Person} alt={data.author} className="feed-img" />
              <h2 className="feed-title">Blabla</h2>
              <div className="flex-category">
                <h2 className="feed-title">
                  From {data.agency.name}, in {data.category.name}
                </h2>
              </div>
            </div>
            <div className="flex-desc">
              <div className="feed-desc">
                <h2 className="desc-title">
                  Author, launched{" "}
                  {moment(data.createdAt).format("MMMM Do YYYY")}
                </h2>
                <p className="desc-text">{data.description}</p>
              </div>
            </div>
            <div className="flex-button">
              <button
                // onClick={() => handleComments(data)}
                className="comment-button"
              >
                View comments
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeedRSSMyprojects;
