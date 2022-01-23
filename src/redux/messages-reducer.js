
import carpet from './../assets/images/osmon.jpg'

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Javohir",
      img: carpet,
    },
    {
      id: 2,
      name: "Akramjon",
      img: carpet,
    },
    { id: 3, name: "Sohib", img: carpet },
    {
      id: 4,
      name: "Javohir aka",
      img: carpet,
    },
    {
      id: 5,
      name: "Anvar aka",
      img: carpet,
    },
  ],
  messages: [
    { id: 1, message: "Assalomu alaykum!" },
    { id: 2, message: "Va alaykum assalom va rohmatullohu va barokatuh!" },
    { id: 2, message: "Qayerdasiz?" },
    { id: 3, message: "Nima yangiliklar?" },
    { id: 3, message: "Nima yangiliklar?" },
    { id: 2, message: "Qayerdasiz?" },

  ],
  newMessageBody: "",
};

export const messagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      let newText = state.newMessageBody;
      let newMessageArrayItem = { id: 5, message: newText };
      let stateCopy = {
                        ...state,
                        messages: [...state.messages, newMessageArrayItem],
                        newMessageBody: ""
                      };
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {
                        ...state,
                        newMessageBody: action.message
                      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreater = (text) => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  message: text,
});

// export default messagesReducer;
