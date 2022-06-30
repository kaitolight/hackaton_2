import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/nav/Nav";
import Person from "../components/UserInfo/person.jpg";
import "../styles/FilterProjects.css";
import "../styles/FeedRSS.css";

function FilterProjects() {
  const [fake, setFake] = useState([
    {
      id: 1,
      image: { Person },
      author: "Loris Chastanet",
      category: "Conseil",
      title: "Every",
      date: "06/04/2019",
      agency: "Paris",
      desc: "Every.io lets you set up and manage all your Finance and HR operations in one place — Bank Accounts, Corporate Cards, Bill Pay, HR, Payroll, Benefits, and Web3 Wallets. We’re super friendly to Web3 and international founders. Get started in under 10 minutes.",
    },
    {
      id: 2,
      image: { Person },
      author: "Anthony Gorsky",
      category: "IT",
      title: "Shift",
      date: "28/09/2020",
      agency: "Nices",
      desc: "Convert text or SVG file to the 3D, right in your browser. Build cool 3D animations for your website, app, social media, or thumbnails. It's super easy: Upload → Customize → Animate.",
    },
    {
      id: 3,
      image: { Person },
      author: "Julien Richard",
      category: "Music",
      title: "WiredVibe",
      date: "14/12/2017",
      agency: "Brest",
      desc: "WiredVibe is a neuroscience-based music platform that improves your focus in less than 10 minutes. Our technology generates personalized sound therapies using health data (via Google), and weather conditions based on your current location.",
    },
    {
      id: 4,
      image: { Person },
      author: "Jean-François Morin",
      category: "Ingénierie des Systèmes",
      title: "Coldbrew",
      date: "31/01/2022",
      agency: "Paris",
      desc: "A fun little app I built over a weekend. Select your favorite macOS apps using a visual interface. Then install them with a single terminal command (apps will install with Homebrew). Share a link to your selection with others, or bookmark it for later.",
    },
  ]);
  const [agencies, setAgencies] = useState("");
  const [themes, setThemes] = useState("");
  const [dates, setDates] = useState("");
  const [words, setWords] = useState("");
  const [titles, setTitles] = useState("");
  const [getAgencies, setGetAgencies] = useState([]);
  const [getCategories, setGetCategories] = useState([]);

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
              {fake
                .filter(
                  (elem) =>
                    elem.agency.includes(agencies) &&
                    elem.category.includes(themes) &&
                    elem.date.includes(dates) &&
                    elem.title.includes(titles) &&
                    elem.desc.includes(words)
                )
                .map((data) => (
                  <div className="feed-project-container" key={data.id}>
                    <div className="feed-flex">
                      <img
                        src={Person}
                        alt={data.author}
                        className="feed-img"
                      />
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
