import React from 'react';
import s from './Users.module.css';
import carpet from '../../assets/images/carpet.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
<<<<<<< HEAD
import {usersAPI} from '../../API/API'
=======
import {usersAPI} from './../../API/API'
>>>>>>> app-br-remembered

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
<<<<<<< HEAD
            <NavLink to={'/profile/' + u.id}>
=======
            <NavLink to={"/profile/" + u.id}>
>>>>>>> app-br-remembered
              <img className={s.avatar} src={u.photos.small || carpet}/>
            </NavLink>
            {
              u.followed
<<<<<<< HEAD
                ? <button onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "038aac11-e1ca-4f93-b471-210ba47c4258"
                      }
                    })
                      .then(response => {
                        if(response.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                      })


                }}>Unfollow</button>
                : <button onClick={() => {
                  console.log("data")
                  usersAPI.followUser(u.id).then(data => {
                    console.log(data)
                        if(data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })

                }}>Follow</button>
=======
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.unfollow(u.id);}}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.follow(u.id);}}>Follow</button>
>>>>>>> app-br-remembered
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
