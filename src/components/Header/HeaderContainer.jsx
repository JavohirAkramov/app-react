import React from "react";
import s from './Header.module.css';
import Header from './Header';
import {setAuthUserData} from './../../redux/auth-reducer';
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

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
