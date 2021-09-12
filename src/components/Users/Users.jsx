import React from 'react';
import s from './Users.module.css';
import carpet from '../../assets/images/carpet.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from '../../API/API'

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
            <NavLink to={'/profile/' + u.id}>
              <img className={s.avatar} src={u.photos.small || carpet}/>
            </NavLink>
            {
              u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                 onClick={() => {
                  props.toggleFollowingProgress(true, u.id)
                  usersAPI.unfollowUser(u.id).then(data => {
                    if(data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id)
                  })
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true, u.id)
                  usersAPI.followUser(u.id).then(data => {
                    if(data.resultCode === 0) {
                      props.follow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id)
                  })
                }}>Follow</button>
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
