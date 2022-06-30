import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Nav from "../components/nav/Nav";
import Person from "../components/UserInfo/person.jpg";
import "../styles/FilterProjects.css";
import "../styles/FeedRSS.css";

function FilterProjects() {
  const [agencies, setAgencies] = useState("");
  const [themes, setThemes] = useState("");
  const [dates, setDates] = useState("");
  const [words, setWords] = useState("");
  const [titles, setTitles] = useState("");
  const [getAgencies, setGetAgencies] = useState([]);
  const [getCategories, setGetCategories] = useState([]);
  const [newProject, setNewProject] = useState([]);
  console.log(newProject);

  const handleAgencies = (e) => {
    setAgencies(e.target.value);
  };
  const handleThemes = (e) => {
    setThemes(e.target.value);
  };
  const handleDates = (e) => {
    setDates(e.target.value);
  };
  const handleWords = (e) => {
    setWords(e.target.value);
  };
  const handleTitles = (e) => {
    setTitles(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/agencies")
      .then((res) => setGetAgencies(res.data))
      .catch((err) => console.warn(err));

    axios
      .get("http://localhost:8000/api/categories")
      .then((res) => setGetCategories(res.data))
      .catch((err) => console.warn(err));

    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setNewProject(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="filter-page">
      <Nav />
      <div className="filter-desc">
        <div className="filter-top-flex">
          <div className="flex-top-container">
            <h2 className="filter-title">Key-words</h2>
            <input
              placeholder="Search for key-words"
              className="filter-input"
              onChange={handleWords}
            />
          </div>
          <div className="flex-top-container">
            <h2 className="filter-title">Theme</h2>
            <select className="filter-select" onChange={handleThemes}>
              <option value="" selected>
                Choose a theme
              </option>
              {getCategories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-top-container">
            <h2 className="filter-title">Date</h2>
            <input
              placeholder="Select a date"
              className="filter-input"
              onChange={handleDates}
            />
          </div>
          <div className="flex-top-container">
            <h2 className="filter-title">Title</h2>
            <input
              placeholder="Search a title"
              className="filter-input"
              onChange={handleTitles}
            />
          </div>
        </div>
        <div className="filter-bottom-flex">
          <div className="flex-bottom-container">
            <h2 className="filter-title">Agency</h2>
            <select className="filter-select" onChange={handleAgencies}>
              <option value="" selected>
                Choose an agency
              </option>
              {getAgencies.map((agency) => (
                <option key={agency.id}>{agency.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-component-container">
            <div className="feed-outer-flex">
              {newProject
                .filter(
                  (elem) =>
                    elem.agency.name.includes(agencies) &&
                    elem.category.name.includes(themes) &&
                    elem.createdAt.includes(dates) &&
                    elem.description.includes(words)
                )
                .map((data) => (
                  <div className="feed-container" key={data.id}>
                    <div className="feed-flex">
                      <img
                        src={Person}
                        alt={data.author}
                        className="feed-img"
                      />
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
        </div>
      </div>
    </div>
  );
}

export default FilterProjects;
