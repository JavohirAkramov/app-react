import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer
})

export let store = createStore(reducers);

window.store = store;


// export default store;