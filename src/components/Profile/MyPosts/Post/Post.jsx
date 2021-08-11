import react from "react";
import s from "./Post.module.css";
import ustun from './../../../../assets/images/Ustun.jpg';

const Post = (props, state) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={ustun}/>
      {props.message}
      <button>Like   {props.likes}</button>
    </div>
  );
};

export default Post;
