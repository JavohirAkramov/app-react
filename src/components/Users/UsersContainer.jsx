import Users from './Users';
import s from './Users.module.css';
import {getUsers, follow, unfollow} from './../../redux/users-reducer';
import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from './../commons/Preloader/Preloader.js';
import {usersAPI} from '../../API/API'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
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
         followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
});

export default connect(mapStateToProps,
  {getUsers, follow, unfollow})(UsersAPIContainer);
