import React from "react";
import s from "./../Dialogs.module.css";

const Dialog = (props) => {
          return (
            <div className={s.dialogs}>
              <div className={s.dialogItems}>
                {props.dialog}
              </div>
            </div>
          )
}
export default Dialog;
