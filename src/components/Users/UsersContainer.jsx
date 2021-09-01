import React from 'react';
import s from './Users.module.css';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import Preloader from './../commons/Preloader/Preloader.js'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
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
    return <>
      { this.props.isFetching ? <Preloader /> : null}
      <Users
         onPageChanged={this.onPageChanged}
         currentPage={this.props.currentPage}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         users={this.props.users}
         pages={pages} />
    </>
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
});

export default connect(mapStateToProps,
  {follow, unfollow, setTotalUsersCount, setUsers, setCurrentPage, toggleIsFetching
})(UsersAPIContainer);
