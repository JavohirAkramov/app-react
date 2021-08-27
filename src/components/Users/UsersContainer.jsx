import React from 'react';
import s from './Users.module.css';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
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
    return <Users
             onPageChanged={this.onPageChanged}
             currentPage={this.props.currentPage}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             users={this.props.users}
             pages={pages}

    />
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage
});

let mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users))
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber))
  },
  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountAC(totalUsersCount))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
