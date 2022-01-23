<<<<<<< HEAD
import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import * as axios from 'axios';
import {setAuthUserData} from './../../redux/auth-reducer';
=======
import React from "react";
import s from './Header.module.css';
import Header from './Header';
import {setAuthUserData} from './../../redux/auth-reducer';
import * as axios from 'axios';
>>>>>>> app-br-remembered
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
<<<<<<< HEAD
    console.log("response")

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        console.log(response)
        if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }
  render() {
    return <Header {...this.props}/>
  }
};

let mapStateToProps = (state) => ({

=======
    this.props.setAuthUserData();
  }
  render() {
    return <Header {...this.props}/>
  }f
};

let mapStateToProps = (state) => ({
  login: state.authPage.login,
  isAuth: state.authPage.isAuth
>>>>>>> app-br-remembered
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
