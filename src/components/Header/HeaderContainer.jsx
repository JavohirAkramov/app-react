import React from "react";
import s from './Header.module.css';
import Header from './Header';
import {setAuthUserData} from './../../redux/auth-reducer';
import * as axios from 'axios';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login);

        }
      })
  }
  render() {
    return <Header {...this.props}/>
  }f
};

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
