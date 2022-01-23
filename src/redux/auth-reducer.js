import carpet from './../assets/images/osmon.jpg';
import {authAPI} from '../API/API';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA: {
      return {...state, ...action.dataUser, isAuth: true}
    }
    default:
      return state;
  }
};

export const setAuthUserDataSuccess = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, dataUser: {userId, email, login}});
export const setAuthUserData = () => {
  return (dispatch) => {
    authAPI.authMe()
      .then(data => {
        console.log(data)
        if(data.resultCode === 0) {
          let {id, email, login} = data.data
          dispatch(setAuthUserDataSuccess(id, email, login));
        }
      })
  }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        console.log(data)
        if(data.resultCode === 0) {
          dispatch(setAuthUserData());
        }
      })

}
