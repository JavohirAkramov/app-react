import React from 'react';
import {} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import {compose} from 'redux';

export default compose(
  withAuthRedirect
)(Dialogs)
