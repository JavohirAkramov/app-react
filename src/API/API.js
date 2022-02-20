import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "d3f140a5-105e-4017-97b3-e23b3e418040"
  }
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`)
      .then(response => {
      return response.data
      })
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`, {})
      .then(response => {return response.data})
  }
};
export const profileAPI = {
  getUser: (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        return response.data
        })
  }
}
export const authAPI = {
  authMe: () => {
    return instance.get(`auth/me`)
  },
  login: (email, password, rememberMe) => {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  loginOut: () => {
    return instance.delete(`auth/login`)
  }
}
