import {authAPI} from '../API/API';

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
      return {...state, ...action.data, isLogin: true}
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
      authAPI.me()
        .then(data => {
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login));
        })
    }
