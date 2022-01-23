<<<<<<< HEAD
=======
import carpet from './../assets/images/osmon.jpg';
import {headerAPI} from '../API/API';

>>>>>>> app-br-remembered
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
<<<<<<< HEAD
  isLogin: false
=======
  isAuth: false
>>>>>>> app-br-remembered
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA: {
<<<<<<< HEAD
      console.log(action)
      return {...state, ...action.data, isLogin: true}
=======
      return {...state, ...action.dataUser, isAuth: true}
>>>>>>> app-br-remembered
    }
    default:
      return state;
  }
};

<<<<<<< HEAD
export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
=======
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
>>>>>>> app-br-remembered
