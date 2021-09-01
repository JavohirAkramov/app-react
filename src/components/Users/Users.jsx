import React from 'react';
import s from './Users.module.css';
import carpet from '../../assets/images/carpet.jpg';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
  return <div>
    <div>
      {
        props.pages.map(p => {
          return <span
                   className={props.currentPage === p && s.selectedPage}
                   onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
        })
      }
    </div>
    {
      props.users.map(u => {
        return <div>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img className={s.avatar} src={u.photos.small || carpet}/>
            </NavLink>
            {
              u.followed
                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
            }
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.id}</div>
            </div>
          </div>
        </div>
      })
    }
  </div>
}

export default Users;
