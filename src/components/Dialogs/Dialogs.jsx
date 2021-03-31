import React from "react";
import s from "./Dialogs.module.css";
import DialogContainer from "./DialogItem/DialogContainer.jsx";
import MessageContainer from "./Message/MessageContainer"

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <DialogContainer />
      <MessageContainer />
    </div>
  );
};

export default Dialogs;
