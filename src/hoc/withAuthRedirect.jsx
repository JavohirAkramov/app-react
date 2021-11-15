import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
})

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login"/>
      return <Component {...this.props}/>

    }
  }
  let connectedWithProps = connect(mapStateToProps)(RedirectComponent);

  return connectedWithProps;
}

export default withAuthRedirect;
