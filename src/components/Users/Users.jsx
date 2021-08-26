import React from "react";
import s from './Users.module.css';
import carpet from '../../assets/images/carpet.jpg';
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let  i=1; i<=pagesCount; i++) {
      pages.push(i);
        }
    return <div>
      <div>
        {
          pages.map(p => {
            return <span
                     className={this.props.currentPage === p && s.selectedPage}
                     onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          })
        }
      </div>
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
              </div>
            </div>
          </div>
        })
      }
    </div>
  }
}

export default Users;
