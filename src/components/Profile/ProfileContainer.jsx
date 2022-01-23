import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer';
import {connect }from 'react-redux';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2
    this.props.setUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {setUserProfile}),
  withAuthRedirect,
  withRouter,

)(ProfileContainer);
