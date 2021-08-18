import react from 'react';
import s from './Users.module.css';
import {followAC, unfollowAC, setUsersAC} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => ({
  users: state.usersPage.users
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);
