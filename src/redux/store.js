import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Hi, how are you?", likesCount: 1222 },
        { id: 3, message: "where are you?", likesCount: 18882 },
        { id: 4, message: "This is use of props.", likesCount: 23 },
      ],
      newPostText: "Ishladi",
    },
    messagesPage: {
      dialogs: [
        {
          id: 1,
          name: "Javohir",
          img:
            "https://cdn.pixabay.com/photo/2021/02/05/07/35/winter-5983671_960_720.jpg",
        },
        {
          id: 2,
          name: "Akramjon",
          img:
            "https://cdn.pixabay.com/photo/2021/02/05/07/35/winter-5983671_960_720.jpg",
        },
        { id: 3, name: "Sohib", img: "https://pixabay.com/images/id-5863751" },
        {
          id: 4,
          name: "Javohir aka",
          img:
            "https://cdn.pixabay.com/photo/2021/02/05/07/35/winter-5983671_960_720.jpg",
        },
        {
          id: 5,
          name: "Anvar aka",
          img:
            "https://cdn.pixabay.com/photo/2021/02/05/07/35/winter-5983671_960_720.jpg",
        },
      ],
      messages: [
        { id: 1, message: "Assalomu alaykum!" },
        { id: 2, message: "Va alaykum assalom va rohmatullohu va barokatuh!" },
        { id: 2, message: "Qayerdasiz?" },
        { id: 3, message: "Nima yangiliklar?" },
      ],
      newMessageBody: "",
    },
  },

  setState(value) {
    this.state = value;
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage,action);
    this._callSubscriber();
  },
};

export default store;
window.store = store;
