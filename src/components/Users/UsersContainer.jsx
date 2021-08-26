import react from 'react';
import s from './Users.module.css';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
