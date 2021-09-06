import carpet from './../assets/images/osmon.jpg'

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
      return {...state, ...action.dataUser}
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, dataUser: {userId, email, login}});
