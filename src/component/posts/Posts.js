import React, { useEffect, useState } from "react";
import Card from "../../core/ui/card/Card";
import PostFilter from "../../core/ui/postFilter/PostFilter";
import { getUserData } from "../../services/dummyData";
import "./post.css";
const Posts = () => {
  const [allPost, setAllPost] = useState();
  const [filteredPost, setFilteredPost] = useState(allPost);

  const postFilterHandler = (key, value) => {
    console.log("value: ", value);
    if (key === "category") {
      let tempData = allPost.filter((post) => {
        return value === post.category;
      });
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

    if (key === "clearFilter") setFilteredPost(allPost);
  };

  useEffect(() => {
    setAllPost(getUserData());
    setFilteredPost(getUserData());
  }, []);

  return (
    <>
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
      <div className="grid-container">
        {filteredPost?.map((post) => {
          return (
            <div key={post.id}>
              <Card
                name={post.name}
                title={post.title}
                category={post.category}
                description={post.description}
                date={"12th Feb"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
