import React from 'react';
import s from './../Navbar.module.css';
import StoreContext from './../../../StoreContext.js'

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.img} />
      {props.name}
    </div>
  );
}

const Friends = (props) => {
  let friedsArray = props.dialogs.map(el => {if (el.id <= 3) return <Friend name={el.name} img={el.img}/>});
    return (
      <div className={s.friendsArray}>
        {friedsArray}
      </div>
    )
}

export default Friends;
