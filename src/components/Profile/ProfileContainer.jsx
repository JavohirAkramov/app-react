<<<<<<< HEAD
import React from "react";
import s from "./Profile.module.css";
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'

=======
import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer';
import {connect }from 'react-redux';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import {compose} from 'redux';
>>>>>>> app-br-remembered

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
<<<<<<< HEAD
    if(!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      });
  };
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
=======
    if(!userId) userId = 2
    this.props.setUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
>>>>>>> app-br-remembered
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
<<<<<<< HEAD
})

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent);
=======
});

export default compose(
  connect(mapStateToProps, {setUserProfile}),
  withAuthRedirect,
  withRouter,

)(ProfileContainer);
>>>>>>> app-br-remembered
