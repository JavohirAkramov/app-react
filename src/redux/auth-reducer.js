import carpet from './../assets/images/osmon.jpg';
import {headerAPI} from '../API/API';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA: {
      return {...state, ...action.dataUser, isLogin: true}
    }
    default:
      return state;
  }
};

export const setAuthUserDataSuccess = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, dataUser: {userId, email, login}});
export const setAuthUserData = () => {
  return (dispatch) => {
    headerAPI.authMe()
      .then(data => {
        console.log(data)
        if(data.resultCode === 0) {
          let {id, email, login} = data.data
          dispatch(setAuthUserDataSuccess(id, email, login));
        }
      })
  }
}
