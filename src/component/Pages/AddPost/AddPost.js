import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { savePost } from "../../../services/apiServices";
import "./add-post.css";

const AddPost = () => {
  const context = useContext(AuthContext);
  const [formData, setFormData] = useState({
    id: context?.currentUser?.uid,
    author: context?.currentUser?.displayName,
    title: "",
    category: "",
    description: "",
  });

  const formDataHandler = (key, value) => {
    setFormData((preState) => {
      return {
        ...preState,
        [key]: value,
      };
    });
  };

  const categories = [
    { keyValue: "technology", displayValue: "Technology" },
    { keyValue: "auto", displayValue: "Auto" },
    { keyValue: "finance", displayValue: "Finance" },
  ];

  const onPostHandler = (event) => {
    event.preventDefault();
    savePost(formData)
      .then((resp) =>
        setFormData({
          id: context?.currentUser?.uid,
          author: context?.currentUser?.displayName,
          title: "",
          category: "",
          description: "",
        })
      )
      .catch((error) => error);
  };

  return (
    <div className="add-post-container">
      <div className="header">
        <h1>Add Your Post</h1>
      </div>
      <div className="form-container">
        <form onSubmit={onPostHandler} className="form">
          <div className="grid-container">
            <div className="input-fields">
              <label>Title: </label>
              <input
                value={formData.title}
                type="text"
                label="Title"
                onChange={(event) =>
                  formDataHandler("title", event.target.value)
                }
                required
              />
            </div>
            <div className="input-fields">
              <label>Catogry: </label>
              <select
                value={formData.category}
                onChange={(event) =>
                  formDataHandler("category", event.target.value)
                }
                required
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
          </div>

          <div className="input-fields">
            <div className="text-area">
              <label>Description: </label>
            </div>
            <textarea
              value={formData.description}
              maxLength={300}
              id=""
              cols="100"
              rows="5"
              required
              onChange={(event) =>
                formDataHandler("description", event.target.value)
              }
            ></textarea>
          </div>

          <div className="input-fields">
            <button className="submit-button" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
