import React, { useState } from "react";
import "./post-filter.css";

const PostFilter = (props) => {
  const { categories, postFilterHandler } = props;
  const [searchString, setSearchString] = useState("");
  const [filterBy, setFilterBy] = useState("category");
  const onFilterHanlder = (key, value) => {
    if (value === "") return;
    if (key === "clearFilter") setSearchString("");
    postFilterHandler(key, value);
  };

  return (
    <div className="filter-container">
      <div className="filter-options">
        <label>Filter by:</label>
        <select
          defaultValue="category"
          onChange={(event) => setFilterBy(event.target.value)}
        >
          <option value="category">Category</option>
          <option value="search">Search</option>
          <option value="date">Date</option>
        </select>
      </div>

      <div>
        {filterBy === "category" && (
          <div className="filter-options">
            <label>Category:</label>
            <select
              onChange={(event) =>
                onFilterHanlder("category", event.target.value)
              }
            >
              <option value="">Select Category</option>
              {categories?.map((option) => {
                return (
                  <option key={option.keyValue} value={option.keyValue}>
                    {option.displayValue}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {filterBy === "search" && (
          <div className="filter-options">
            <input
              type="text"
              placeholder="Search.."
              value={searchString}
              onChange={(event) => setSearchString(event.target.value)}
            />
            <button onClick={() => onFilterHanlder("search", searchString)}>
              Search
            </button>
          </div>
        )}

        {filterBy === "date" && (
          <div className="date-filter filter-options">
            <div>
              <label>Select Date</label>
              <input
                type="date"
                onChange={(event) =>
                  onFilterHanlder(
                    "date",
                    new Date(event.target.value).toDateString()
                  )
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className="clear-filter">
        <button onClick={() => onFilterHanlder("clearFilter")}>
          Clear filter
        </button>
      </div>
    </div>
  );
};

export default PostFilter;
