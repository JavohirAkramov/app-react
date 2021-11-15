import React from "react";
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => ({});

let DialogsContainer = withAuthRedirect(connect(mapStateToProps)(Dialogs));

export default DialogsContainer;
