import React from 'react';
import s from './../Navbar.module.css';
import {connect} from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
