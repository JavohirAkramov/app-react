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
  }
}
export const profileAPI = {
    getUser: (userId) => {
      console.log(userId)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        console.log(response)
        return response.data
      });
  }
}
