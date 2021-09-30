import React from 'react';
import {} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
});

export default connect(mapStateToProps,
  {})(Dialogs);
