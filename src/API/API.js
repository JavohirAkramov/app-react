import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "4d8bd3e0-6ec8-4b8e-8176-315b78baeda7"
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
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data
  })},
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
      .then(response => {
        return response.data
      })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
      .then(response => {
        return response
      })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        console.log(response)
        if(response.data.resultCode === 0) {
          return response.data
        }
      })
  }
}
