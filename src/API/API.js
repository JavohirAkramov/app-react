import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "038aac11-e1ca-4f93-b471-210ba47c4258"
  }
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollowUser: (usersId) => {
    return instance.delete(`follow/${usersId}`)
      .then(response => response.data)
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data
  })}
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        if(response.data.resultCode === 0) {
          return response.data
        }
      })
  }
}
