import { authAPI } from '../API/API';
import { stopSubmit } from 'formik';
import { setAuthUserData } from './auth-reducer'
import {Promise} from 'es6-promise'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
  initialized: false
};

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS: {
      return {...state, initialized: true }
    }
    default:
      return state;
  }
};

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(setAuthUserData())
    Promise.all([promise])
      .then(() => {
        dispatch(initializedSuccess())
      })
  }
}
