import React from "react";
import s from './Users.module.css';
import carpet from '../../assets/images/carpet.jpg';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <div>
      {
        this.props.users.map(u => {
          return <div>
            <div>
              <img className={s.avatar} src={u.photos.small || carpet}/>
              {
                u.followed
                  ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                  : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
              }
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{u.id}</div>
                <div>{u.uniqueUrlName}</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  }
}

export default Users;
