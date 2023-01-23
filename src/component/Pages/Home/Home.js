import React, { useEffect, useState } from "react";
import Card from "../../../core/ui/card/Card";
import { getUserData } from "../../../services/dummyData";
import "./home.css";
const Home = () => {
  const [allPost, setAllPost] = useState();
  useEffect(() => {
    setAllPost(getUserData());
  }, []);
  return (
    <>
      {allPost?.map((post) => {
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
    </>
  );
};

export default Home;
