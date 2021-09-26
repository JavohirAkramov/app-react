import react from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  console.log(props.login);
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>Logo"bu yerda rasm bo'lishi kerak"</div>
      <br/>
      <div className={s.loginBlock}>
        {props.isLogin ? props.login
        : <NavLink to={"/login"} activeClassName={s.active}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
