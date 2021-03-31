const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 1222 },
    { id: 3, message: "where are you?", likesCount: 18882 },
    { id: 4, message: "This is use of props.", likesCount: 23 },
  ],
  newPostText: "Ishladi",
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let text = state.newPostText;
    let newPost = { id: 6, message: text, likesCount: 0 };
    state.posts.push(newPost);
    state.newPostText = "";
  }
  else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

// export default profileReducer;