import React from "react";
import s from "./Profile.module.css";
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2;
    this.props.setUserProfile(userId);
  };
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent);
