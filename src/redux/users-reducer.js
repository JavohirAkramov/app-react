import carpet from './../assets/images/osmon.jpg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
  users: [
    {id: 1, fullName: 'Javohir Akramov', followed: false, photoURL: carpet, status: 'dasturchi', location: {country: 'O`zbekiston', city: 'Shahrisabz'}},
    {id: 2, fullName: 'Akmal Anvarov', followed: true, photoURL: carpet, status: 'iqtisodchi', location: {country: 'Hindiston', city: 'Mumbai'}},
    {id: 3, fullName: 'Asror Islomov', followed: false, photoURL: carpet, status: 'muhandis', location: {country: 'Pokiston', city: 'Qarachi'}}
  ]
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
