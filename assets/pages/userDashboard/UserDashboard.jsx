import React, { useState, useEffect } from "react";
import "./userDashboard.css";
import Nav from "../../components/nav/Nav";
import FeedRSS from "../../components/FeedRSS";

import Person from "../../components/UserInfo/person.jpg";
import "../../styles/FeedRSS.css";

function UserDashboard() {
  // const [fake, setFake] = useState([
  //   {
  //     id: 1,
  //     image: { Person },
  //     author: "Loris Chastanet",
  //     category: "Finance",
  //     title: "Every",
  //     date: "06/04/2019",
  //     agency: "Paris",
  //     desc: "Every.io lets you set up and manage all your Finance and HR operations in one place — Bank Accounts, Corporate Cards, Bill Pay, HR, Payroll, Benefits, and Web3 Wallets. We’re super friendly to Web3 and international founders. Get started in under 10 minutes.",
  //   },
  //   {
  //     id: 2,
  //     image: { Person },
  //     author: "Anthony Gorsky",
  //     category: "IT",
  //     title: "Shift",
  //     date: "28/09/2020",
  //     agency: "Marseilles",
  //     desc: "Convert text or SVG file to the 3D, right in your browser. Build cool 3D animations for your website, app, social media, or thumbnails. It's super easy: Upload → Customize → Animate.",
  //   },
  //   {
  //     id: 3,
  //     image: { Person },
  //     author: "Julien Richard",
  //     category: "Music",
  //     title: "WiredVibe",
  //     date: "14/12/2017",
  //     agency: "Nantes",
  //     desc: "WiredVibe is a neuroscience-based music platform that improves your focus in less than 10 minutes. Our technology generates personalized sound therapies using health data (via Google), and weather conditions based on your current location.",
  //   },
  //   {
  //     id: 4,
  //     image: { Person },
  //     author: "Jean-François Morin",
  //     category: "IT",
  //     title: "Coldbrew",
  //     date: "31/01/2022",
  //     agency: "Lilles",
  //     desc: "A fun little app I built over a weekend. Select your favorite macOS apps using a visual interface. Then install them with a single terminal command (apps will install with Homebrew). Share a link to your selection with others, or bookmark it for later.",
  //   },
  // ]);

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
  console.log(commentList);
  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        <div className="feed-outer-flex">
          {fake.map((data) => (
            <div className="feed-container" key={data.id}>
              <div className="feed-flex">
                <img src={Person} alt={data.author} className="feed-img" />
                <h2 className="feed-title">{data.author}</h2>
                <div className="flex-category">
                  <h2 className="feed-title">
                    From {data.agency}, in {data.category}
                  </h2>
                </div>
              </div>
              <div className="flex-desc">
                <div className="feed-desc">
                  <h2 className="desc-title">
                    {data.title}, launched {data.date}
                  </h2>
                  <p className="desc-text">{data.desc}</p>
                </div>
              </div>
              <div className="flex-button">
                <button
                  onClick={() => handleComments(data)}
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
        {commentList.map((data) => (
          <div className="comment-container">
            <h2 className="comment-title">By {data.author}</h2>
            <div className="message-flex">
              <div className="comment-message">
                <p className="comment-text">${data.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
