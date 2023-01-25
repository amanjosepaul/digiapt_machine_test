import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { getAllPostData } from "../../../services/apiServices";
import Posts from "../../posts/Posts";
const MyPosts = () => {
  const [allPost, setAllPost] = useState();
  const context = useContext(AuthContext);
  useEffect(() => {
    getAllPostData(`user-posts`)
      .then((resp) => {
        setAllPost(
          Object.values(resp).filter(
            (post) => post.id === context?.currentUser?.uid
          )
        );
      })
      .catch((error) => error);
  }, []);
  return (
    <>
      <Posts header={"My Posts"} allPost={allPost} />;
    </>
  );
};

export default MyPosts;
