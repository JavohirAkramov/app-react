import React from 'react';
import connect from 'react-redux';
import Login from '../components/Login/Login'


let withAuthRedirect = () => {
  if (!isAuth) {
    return <Login />
  }
};

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
});

export default connect(mapStateToProps)(withAuthRedirect);
