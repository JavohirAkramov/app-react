import react from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends.jsx'

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active  }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active  }>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/video" activeClassName={s.active  }>Video</NavLink>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
        <div className={s.friends}>
          <hr/>
          <Friends/>
        </div>
      </nav>
  );
};

export default Navbar;
