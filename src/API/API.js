import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "038aac11-e1ca-4f93-b471-210ba47c4258"
  }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}
export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`)
    .then(response => response.data)
}
export const followUser = (userId) => {
  return instance.post(`follow/${userId}`, {})
    .then(response => response.data)
}
