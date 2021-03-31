import React from "react";
import { updateNewPostTextActionCreater, addPostActionCreater} from "../../../redux/profile-reducer.js";
import StoreContext from "./../../../StoreContext";
import  MyPost from './MyPost'

const MyPostContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let onAddPost = () => {
          store.dispatch(addPostActionCreater());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreater(text);
          store.dispatch(action);
        };
        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
