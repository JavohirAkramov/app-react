import React from "react";
import s from "./../Dialogs.module.css";
import {
  sendMessageCreater,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer.js";

let sendMessageRef = React.createRef();

const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Message = (props) => {
        let sendMessage = () => {
          props.sendMessage()
        };

        let onMessageChange = (e) => {

          props.messageChange(e)
        };

        let message = props.messages.map((m) => <Messages message={m.message} key={m.id}/>);

        return (
          <div className={s.messages}>
            {message}
            <div>
              <div>
                <textarea
                  onChange={onMessageChange}
                  placeholder="O'z habaringizni kiriting"
                  ref={sendMessageRef}
                  value={props.newMessageBody}
                ></textarea>
              </div>
              <div>
                <button onClick={sendMessage}>-=Send message=-</button>
              </div>
            </div>
          </div>
  );
};

export default Message;
