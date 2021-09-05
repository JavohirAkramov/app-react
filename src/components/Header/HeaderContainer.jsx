import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import * as axios from 'axios';
import {setAuthUserData} from './../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log('dad')
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        console.log(response)
        if(response.data.messages.resultCode === 0) {
          let {id, email, login} = response.data.data
          setAuthUserData(id, email, login)
        }
      })
  }
  render() {
    return <Header {...this.props}/>
  }
};

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
