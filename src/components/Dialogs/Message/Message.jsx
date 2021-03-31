import React from "react";
import s from "./../Dialogs.module.css";
import {
  sendMessageCreater,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer.js";

let sendMessageRef = React.createRef();

const Message = (props) => {
        let sendMessage = () => {
          props.sendMessage()
        };

        let onMessageChange = (e) => {

          props.messageChange(e)
        };
        console.log(a)

        return (
          <div className={s.messages}>
            {props.message}
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
