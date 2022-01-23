import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
<<<<<<< HEAD
    "API-KEY": "038aac11-e1ca-4f93-b471-210ba47c4258"
  }
});
=======
    "API-KEY": "4d8bd3e0-6ec8-4b8e-8176-315b78baeda7"
  }
})
>>>>>>> app-br-remembered

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
<<<<<<< HEAD
        .then(response => response.data)
  },
  followUser: (ids) => {
    console.log(ids)
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${ids}`,{})
      .then(response => response.data)
=======
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
export const headerAPI = {
  authMe: () => {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
>>>>>>> app-br-remembered
  }
}
