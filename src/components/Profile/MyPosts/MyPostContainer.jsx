import React from "react";
import { updateNewPostTextActionCreater, addPostActionCreater} from "../../../redux/profile-reducer.js";
import  MyPost from './MyPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
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
