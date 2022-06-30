import React from "react";

import Nav from "../components/nav/Nav";
import FeedRSS from "../components/FeedRSS";
import "../styles/FilterProjects.css";

function FilterProjects() {
  return (
    <div className="filter-page">
      <Nav />
      <div className="filter-desc">
        <div className="filter-top-flex">
          <div className="flex-top-container"></div>
          <div className="flex-top-container"></div>
          <div className="flex-top-container"></div>
          <div className="flex-top-container"></div>
        </div>
        <div ClassName="filter-top-flex">
          <div classNaùe="flex-bottom-container"></div>
          <FeedRSS />
        </div>
      </div>
    </div>
  );
}

export default FilterProjects;
