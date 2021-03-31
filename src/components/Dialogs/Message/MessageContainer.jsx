import React from "react";
import s from "./../Dialogs.module.css";
import StoreContext from './../../../StoreContext.js'
import {
  sendMessageCreater,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer.js";
import Message from './Message'

let sendMessageRef = React.createRef();

const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const MessageContainer = () => {
  return <StoreContext.Consumer>
      {
        (store) => {
        let message = store.getState().messagesPage.messages.map((m) => <Messages message={m.message} />);

        let sendMessage = () => {
          store.dispatch(sendMessageCreater());
        };

        let onMessageChange = (e) => {
          let body = e.target.value;
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return <Message messageChange={onMessageChange}
                        sendMessage={sendMessage}
                        message={message}
                        newMessageBody={store.getState().messagesPage.newMessageBody}
                        />
      }}
    </StoreContext.Consumer>
};

export default MessageContainer;
