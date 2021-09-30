import React from "react";
import s from "./Dialogs.module.css";
import DialogContainer from "./DialogItem/DialogContainer.jsx";
import MessageContainer from "./Message/MessageContainer";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
  if (props.isAuth == false) return <Redirect to={"/login"}/>
  return (
    <div className={s.dialogs}>
      <DialogContainer />
      <MessageContainer />
    </div>
  );
};

export default Dialogs;
