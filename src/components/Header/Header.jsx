import react from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>logo</div>
      <NavLink to="/login">
        <div className={s.login}>login</div>
      </NavLink>
    </header>
  );
};

export default Header;
