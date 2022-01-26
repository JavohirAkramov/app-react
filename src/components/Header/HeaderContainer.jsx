import React from "react";
import s from './Header.module.css';
import Header from './Header';
import {setAuthUserData, logout} from './../../redux/auth-reducer';
import * as axios from 'axios';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserData();
  }
  render() {
    return <Header {...this.props}/>
  }f
};

let mapStateToProps = (state) => ({
  login: state.authPage.login,
  isAuth: state.authPage.isAuth
})

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);
