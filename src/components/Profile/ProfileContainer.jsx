import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect }from 'react-redux';
import {compose} from 'redux';
import * as axios from 'axios';
import Profile from './Profile';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import {setUserProfile} from '../../redux/profile-reducer';
import { getProfile } from '../../redux/profile-selector'
import { getUserId } from '../../redux/auth-selector'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.setUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
};

// let mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   authorizedUserId: state.authPage.userId
// });

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  authorizedUserId: getUserId(state)
});

export default compose(
  connect(mapStateToProps, {setUserProfile}),
  withAuthRedirect,
  withRouter,

)(ProfileContainer);
