import Users from './Users';
import s from './Users.module.css';
import {follow, unfollow, followingInProgress, getUsers} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from './../commons/Preloader/Preloader.js';
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

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
});

export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsers})
)(UsersAPIContainer);
