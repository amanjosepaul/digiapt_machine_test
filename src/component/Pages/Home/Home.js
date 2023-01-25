import { useEffect, useState } from "react";
import { getAllPostData } from "../../../services/apiServices";
import Posts from "../../posts/Posts";

const Home = () => {
  const [allPost, setAllPost] = useState();
  useEffect(() => {
    getAllPostData("user-posts")
      .then((resp) => setAllPost(Object.values(resp)))
      .catch((error) => error.message);
  }, []);
  return (
    <>
      <Posts header={"All Posts"} allPost={allPost} />;
      
    </>
  );
};

export default Home;
