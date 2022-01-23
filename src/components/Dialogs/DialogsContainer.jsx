import React from "react";
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import Dialogs from './Dialogs';
import {compose} from 'redux';

let mapStateToProps = (state) => ({});

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);
