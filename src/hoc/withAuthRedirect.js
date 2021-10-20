import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
})

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      console.log(this.props)
      if (!this.props.isAuth) return <Redirect to="/login" />
      return <Component {...this.props}/>
    };
  };

  let connectedWithProps = connect(mapStateToProps)(RedirectComponent)

  return connectedWithProps;
}

export default withAuthRedirect
