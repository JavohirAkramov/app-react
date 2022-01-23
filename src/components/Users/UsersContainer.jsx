import React from 'react';
import s from './Users.module.css';
<<<<<<< HEAD
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from './../../redux/users-reducer';
=======
import {follow, unfollow, followingInProgress, getUsers} from './../../redux/users-reducer';
>>>>>>> app-br-remembered
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import Preloader from './../commons/Preloader/Preloader.js';
<<<<<<< HEAD
import {usersAPI} from '../../API/API'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount)
      })
  }
  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);
    usersAPI.getUsers(p, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount)
      })
=======
import {usersAPI} from '../../API/API';
import {compose}from 'redux';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
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
>>>>>>> app-br-remembered
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
         pages={pages}
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

<<<<<<< HEAD
export default connect(mapStateToProps,
  {follow, unfollow, setTotalUsersCount, setUsers, setCurrentPage, toggleIsFetching
})(UsersAPIContainer);
=======
export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsers})
)(UsersAPIContainer);
>>>>>>> app-br-remembered
