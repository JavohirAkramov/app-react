import react from "react";
import s from "./Post.module.css";

const Post = (props, state) => {
  return (
    <div className={s.item}>
      <img className={s.img} src="https://cdn.pixabay.com/photo/2021/02/05/07/35/winter-5983671_960_720.jpg"/>
      {props.message}
      <button>Like   {props.likes}</button>
    </div>
  );
};

export default Post;
