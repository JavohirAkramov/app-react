import React from "react";
import {connect} from 'react-redux';
import Dialog from './Dialog'

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
