import React from "react"
import Users from './Users';
import s from './Users.module.css';
import {follow, unfollow, followingInProgress, requestUsers} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from './../commons/Preloader/Preloader.js';
import {usersAPI} from '../../API/API';
import {compose}from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selector'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
  }
  onPageChanged = (p) => {
    this.props.requestUsers(p, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(p);
    // usersAPI.getUsers(p, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
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
         users={this.props.users}
         pages={pages}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         users={this.props.users}
         pages={pages}
         followingInProgress={this.props.followingInProgress}
       />
    </>
  }
}

// let mapStateToProps = (state) => ({
//   users: state.usersPage.users,
//   pageSize: state.usersPage.pageSize,
//   totalUsersCount: state.usersPage.totalUsersCount,
//   currentPage: state.usersPage.currentPage,
//   isFetching: state.usersPage.isFetching,
//   followingInProgress: state.usersPage.followingInProgress
// });
let mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
});

export default compose(
  connect(mapStateToProps, { follow, unfollow, requestUsers})
)(UsersAPIContainer);
