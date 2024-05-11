import React from "react";
import "./SearchFilter.css";

export default function SearchFilter({
  title,
  filter1 = [],
  filter2 = [],
  filter3 = [],
  filter4 = [],
}) {
  const filter = [filter1, filter2, filter3, filter4];

  return (
    <div className="filter-content-container">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="filters-checkbox-container">
        {filter.map((f, index) => {
          const filterName = "filter" + index;
          const filterNumber = f[1];
          return (
            <div key={index} className="filter">
              <input
                type="checkbox"
                className="checkbox-filter"
                name={filterName}
                id={filterName}
              />
              <h2>
                {f[0]} ({filterNumber})
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
