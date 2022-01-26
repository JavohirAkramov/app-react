import react from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>logo</div>
      {
        props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
          : <NavLink to="/login">login</NavLink>
      }
    </header>
  );
};

export default Header;
