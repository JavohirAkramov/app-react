import React from "react";
import s from "./../Dialogs.module.css";
import {
  sendMessageCreater,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer.js";
import Message from './Message'
import {connect} from 'react-redux'

let sendMessageRef = React.createRef();

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (e) => {
      let body = e.target.value;
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreater());
    },


  }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
