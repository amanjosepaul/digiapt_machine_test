import React, { useState } from "react";
import "./pagination.css";
const Pagination = (props) => {
  const { pageCount, paginationHandler, itemCount } = props;
  const [pageIndex, setPageIndex] = useState(1);
  let count = Math.ceil(pageCount / itemCount);

  const renderPagerCount = () => {
    return Array.from(Array(count), (e, i) => {
      return (
        <li
          key={i + 1}
          className={`${pageIndex === i + 1 ? "active" : ""}`}
          onClick={() => {
            setPageIndex(i + 1);
            paginationHandler(i + 1);
          }}
        >
          {i + 1}
        </li>
      );
    });
  };

  return (
    <div className="pager-container">
      <div className="inner-wrapper">
        <ul className="pagination modal-3">
          <li
            onClick={() => {
              if (pageIndex !== 1) {
                paginationHandler(pageIndex - 1);
                setPageIndex(pageIndex - 1);
              }
            }}
          >{`<`}</li>

          {renderPagerCount()}
          <li
            onClick={() => {
              if (pageIndex < pageCount) {
                setPageIndex(pageIndex + 1);
                paginationHandler(pageIndex + 1);
              }
            }}
          >{`>`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
