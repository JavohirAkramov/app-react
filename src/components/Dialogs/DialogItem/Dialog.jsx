import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  return (
    <div className={s.diallogItem}>
      <NavLink to={"/dialogs/" + props.id}>
        <img className={s.img} src={props.img}/>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialog = (props) => {
          let dialogArray = props.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
          return (
            <div className={s.dialogs}>
              <div className={s.dialogItems}>
                {dialogArray}
              </div>
            </div>
          )
}
export default Dialog;
