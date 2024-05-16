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
          title={"Driving"}
          filter1={["Manual", 8]}
          filter2={["Automatic", 4]}
          filter3={["Double clutch", 0]}
          filter4={["CVT", 0]}
        />
        <SearchFilter
          title={"Capacity"}
          filter1={["10 - 15 L", 3]}
          filter2={["15 - 20 L", 5]}
          filter3={["20 - 25 L", 2]}
          filter4={["25 - 30 L", 4]}
        />
        <SearchFilter
          title={"People"}
          filter1={["2 People", 3]}
          filter2={["4 People", 5]}
          filter3={["5 People", 2]}
          filter4={["6 People", 0]}
        />
      </div>
    </div>
  );
}
