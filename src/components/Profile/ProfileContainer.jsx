import React from "react";
import s from "./Profile.module.css";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom'


class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.porps)
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2;
    this.props.getUserProfile(userId);
  };
  render() {
    // if (this.porps.isAuth == false) return <Redirect to="/login"/>
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.authPage.isAuth
})

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withURLDataContainerComponent);
