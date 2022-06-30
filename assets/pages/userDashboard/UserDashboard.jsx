import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userDashboard.css";
import Nav from "../../components/nav/Nav";
import moment from "moment";

import Person from "../../components/UserInfo/person.jpg";
import "../../styles/FeedRSS.css";

function UserDashboard() {
  const [newProject, setNewProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setNewProject(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const [comments, setComments] = useState([
  //   {
  //     id: 1,
  //     project_id: 1,
  //     author: "Anthony Gorsky",
  //     message: "This is a great project! I'd love to take part of it. :)",
  //   },
  //   {
  //     id: 2,
  //     porject_id: 1,
  //     author: "Julien Richard",
  //     message:
  //       "Seems like a legit project that could tremendously help the company. Count me in!",
  //   },
  //   {
  //     id: 3,
  //     project_id: 2,
  //     author: "Loris Chastanet",
  //     message:
  //       "I really like your project and 3D animations in general. Making 3D animations accessible to everyone is important to me.",
  //   },
  //   {
  //     id: 4,
  //     project_id: 2,
  //     authord: "Jean-François Morin",
  //     message:
  //       "I wholeheartedly agree with Loris, and I'd like to bring my expertise on the subject.",
  //   },
  //   {
  //     id: 5,
  //     project_id: 4,
  //     author: "Romain Guillemot",
  //     message:
  //       "Very impressive for an app coded over the weekend. I'm really interested to see your code.",
  //   },
  // ]);

  // const handleComments = () => {
  //   let newArray = [];
  //   if (comments.project_id === fake.id) {
  //     commentList.push(comments[0].author, comments[0].message);
  //   }
  //   console.log(commentList);
  // };

  // useEffect(() => {}, [handleComments]);

  // const [commentList, setCommentList] = useState([]);
  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        <div className="feed-outer-flex">
          {newProject.map((data) => (
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
