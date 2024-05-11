import "./CarSearcher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import SearchFilter from "../search-filter/SearchFilter";

import React, { useState } from "react";

export default function CarSeacher() {
  const [showSearcher, setSshowSearcher] = useState(false);

  return (
    <div
      className={`searcher-filters-container ${showSearcher ? "hidden" : ""}`}
    >
      <div className="searcher">
        <div className="label-search-container">
          <label htmlFor="searchInput"> Search </label>
          <FontAwesomeIcon
          className="showSearcher"
            onClick={() => setSshowSearcher(showSearcher ? false : true)}
            icon={faChevronCircleLeft}
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search by brand" />
        </div>
      </div>
      <div className="filters-content-container">
        <SearchFilter
          title={"Tyre"}
          filter1={["Sport", 12]}
          filter2={["SUV", 12]}
          filter3={["MPV", 12]}
          filter4={["Sedan", 12]}
        />

        <SearchFilter
          title={"Capacity"}
          filter1={["Sport", 12]}
          filter2={["SUV", 12]}
          filter3={["MPV", 12]}
          filter4={["Sedan", 12]}
        />
      </div>
    </div>
  );
}
