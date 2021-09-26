import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import {getAuthUserData} from './../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props}/>
  }
};

let mapStateToProps = (state) => ({
  isLogin: state.authPage.isLogin,
  login: state.authPage.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
