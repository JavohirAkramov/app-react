import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import StoreContext from './../../../StoreContext.js'
import Dialog from './Dialog'

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



const DialogContainer = () => {
          return <StoreContext.Consumer>
            {
              (store) => {
                let dialog = store.getState().messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
                return <Dialog dialog={dialog}/>
              }
            }
          </StoreContext.Consumer>
}

export default DialogContainer;
