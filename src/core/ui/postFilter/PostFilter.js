import React, { useState } from "react";
import "./post-filter.css";
const PostFilter = (props) => {
  const { categories, postFilterHandler } = props;
  const [value, setValue] = useState("");
  const filterHanlder = (key, value) => {
    if (value === "") return;
    postFilterHandler(key, value);
  };

  return (
    <div className="filter-container">
      <div className="filter-options">
        <label>Filter by Category:</label>
        <select
          onChange={(event) => filterHanlder("category", event.target.value)}
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
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={() => filterHanlder("search", value)}>Search</button>
      </div>
      <div className="filter-options">
        <button onClick={() => filterHanlder("clearFilter")}>
          Clear filter
        </button>
      </div>
      <div className="filter-options">
        <button>Date</button>
      </div>
    </div>
  );
};

export default PostFilter;
