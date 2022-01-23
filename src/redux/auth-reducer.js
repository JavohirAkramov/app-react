import carpet from './../assets/images/osmon.jpg';
import { authAPI } from '../API/API';

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
      return {...state, ...action.payload, isAuth: true}
    }
    default:
      return state;
  }
};

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});
export const setAuthUserData = () => {
  return (dispatch) => {
    authAPI.authMe()
      .then(data => {
        console.log(data)
        if(data.resultCode === 0) {
          let {id, email, login} = data.data
          dispatch(setAuthUserDataSuccess(id, email, login, true));
        }
      })
  }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        if(data.resultCode === 0) {
          dispatch(setAuthUserData())
        }
      })

}
export const logout = () => (dispatch) => {
    authAPI.logout()
      .then(data => {
        if(data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })

}
