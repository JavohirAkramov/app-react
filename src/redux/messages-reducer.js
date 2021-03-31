const SEND_MESSAGE =  'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
  newMessageBody: ''
}

export const messagesReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    let newText = state.newMessageBody;
    let newMessageArrayItem = {id: 5, message: newText};
    state.messages.push(newMessageArrayItem);
    state.newMessageBody = "";
  }
  else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.message;
  }


  return state;
}

export const sendMessageCreater   = (text) => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, message: text}); 

// export default messagesReducer;