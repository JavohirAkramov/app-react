import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer.js'
import {sidebarReducer} from './sidebar-reducer'


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer
})

export let store = createStore(reducers);

// export default store;
