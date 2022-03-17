import React from "react";
import { updateNewPostTextActionCreater, addPostActionCreater} from "../../../redux/profile-reducer.js";
import { getPosts, getNewPostText } from "../../../redux/profile-selector";
import  MyPost from './MyPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    newPostText: getNewPostText(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    }

  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
