import React, { useState } from "react";

import Person from "./UserInfo/person.jpg";
import "../styles/FeedRSS.css";

function FeedRSS() {
  const [fake, setFake] = useState([
    {
      id: 1,
      image: { Person },
      author: "Loris Chastanet",
      category: "Finance",
      title: "Every",
      desc: "Every.io lets you set up and manage all your Finance and HR operations in one place — Bank Accounts, Corporate Cards, Bill Pay, HR, Payroll, Benefits, and Web3 Wallets. We’re super friendly to Web3 and international founders. Get started in under 10 minutes.",
    },
    {
      id: 2,
      image: { Person },
      author: "Anthony Gorsky",
      category: "IT",
      title: "Shift",
      desc: "Convert text or SVG file to the 3D, right in your browser. Build cool 3D animations for your website, app, social media, or thumbnails. It's super easy: Upload → Customize → Animate.",
    },
    {
      id: 3,
      image: { Person },
      author: "Julien Richard",
      category: "Music",
      title: "WiredVibe",
      desc: "WiredVibe is a neuroscience-based music platform that improves your focus in less than 10 minutes. Our technology generates personalized sound therapies using health data (via Google), and weather conditions based on your current location.",
    },
    {
      id: 4,
      image: { Person },
      author: "Jean-François Morin",
      category: "IT",
      title: "Coldbrew",
      desc: "A fun little app I built over a weekend. Select your favorite macOS apps using a visual interface. Then install them with a single terminal command (apps will install with Homebrew). Share a link to your selection with others, or bookmark it for later.",
    },
  ]);

  return (
    <>
      {fake.map((data) => (
        <div className="filter-container" key={data.id}>
          <div className="filter-flex">
            <img src={Person} alt={data.author} className="filter-img" />
            <h2 className="filter-title">{data.author}</h2>
            <div className="flex-category">
              <h2 className="filter-title">{data.category}</h2>
            </div>
          </div>
          <div className="filter-desc">
            <h2 className="desc-title">{data.title}</h2>
            <p className="desc-text">{data.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedRSS;
