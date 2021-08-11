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
  let stateCopy = {...state};
  switch(action.type) {
    case ADD_POST: {
      let newPost = { id: 6, message: state.newPostText, likesCount: 0 };
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

// export default profileReducer;
