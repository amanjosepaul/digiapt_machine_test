import React, { useEffect, useState } from "react";
import Card from "../../core/ui/card/Card";
import Pagination from "../../core/ui/pagination/Pagination";
import PostFilter from "../../core/ui/postFilter/PostFilter";
import "./post.css";

const Posts = (props) => {
  const { header, allPost } = props;
  const [filteredPost, setFilteredPost] = useState();
  const postPerPage = 5;
  const postFilterHandler = (key, value) => {
    if (key === "category") {
      let tempData = allPost.filter((post) => {
        return value === post.category;
      });
      setFilteredPost([...tempData]);
    }

    if (key === "date") {
      let tempData = allPost.filter((post) => value === post.postDate);
      setFilteredPost([...tempData]);
    }

    if (key === "search") {
      let tempData = [];
      allPost.forEach((post) => {
        tempData.push(post.title);
      });

      let keyword = value.toLowerCase();
      let filterByChar = filteredPost.filter((user) => {
        user = user.title.toLowerCase();
        return user.indexOf(keyword) > -1;
      });
      setFilteredPost([...filterByChar]);

      if (value === "") setFilteredPost(allPost);
    }

    if (key === "clearFilter") {
      setFilteredPost(allPost);
    }
  };

  const paginationHandler = (pageIndex) => {
    let tempData = [...allPost];
    let startIndex = 1,
      endIndex = 5;
    if (pageIndex > 1) {
      endIndex = pageIndex * postPerPage;
      startIndex = endIndex - postPerPage;
    }
    let slicedData = tempData.slice(startIndex - 1, endIndex - 1);
    setFilteredPost(slicedData);
  };

  useEffect(() => {
    // setFilteredPost(allPost);
    setFilteredPost(allPost?.slice(0, 5));
  }, [allPost]);

  return (
    <div className="post-container">
      <div className="main-container">
        <div>
          <h1>{header}</h1>
        </div>
        {allPost && (
          <div>
            <PostFilter
              categories={[
                { keyValue: "technology", displayValue: "Technology" },
                { keyValue: "auto", displayValue: "Auto" },
                { keyValue: "finance", displayValue: "Finance" },
              ]}
              postFilterHandler={postFilterHandler}
            />
          </div>
        )}
      </div>

      {allPost ? (
        <div className="post-grid-container">
          {filteredPost?.map((post, index) => {
            return (
              <div key={post.id + index}>
                <Card
                  author={post.author}
                  title={post.title}
                  category={post.category}
                  description={post.description}
                  postDate={post.date}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <label className="no-data">No Data to Show</label>
        </div>
      )}

      {allPost?.length && (
        <Pagination
          pageCount={allPost?.length}
          itemCount={postPerPage}
          paginationHandler={paginationHandler}
        />
      )}
    </div>
  );
};

export default Posts;
