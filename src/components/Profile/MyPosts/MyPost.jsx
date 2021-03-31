import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post.jsx";
import StoreContext from "./../../../StoreContext.js";

const MyPost = (props) => {
  let post = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  let addPostRef = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = addPostRef.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.item}>
      <div>
        <textarea
          onChange={onPostChange}
          ref={addPostRef}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      {post}
    </div>
  );
};

export default MyPost;
